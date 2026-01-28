const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  console.log("-------- Seeding DB --------");

  // cleanup (optional, be careful in prod)
  // await prisma.influencer.deleteMany();
  // await prisma.campaign.deleteMany();

  // Create Sample Influencers
  const influencers = [
    {
      firstName: "Sarah",
      lastName: "Jenkins",
      handle: "sarahjenkins_fit",
      platform: "INSTAGRAM", // Using the enum string
      followers: 45200,
      engagementRate: 3.8,
      niche: ["Fitness", "Wellness"],
      location: "Los Angeles, CA",
      bio: "Fitness enthusiast | Yoga teacher | LA based",
      email: "sarah@example.com",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      tags: ["Yoga", "High Engagement"],
      ratePost: 350,
    },
    {
      firstName: "Mike",
      lastName: "Chen",
      handle: "mike_lifts",
      platform: "TIKTOK",
      followers: 82000,
      engagementRate: 5.2,
      niche: ["Fitness", "Gym"],
      location: "New York, NY",
      bio: "Powerlifting and nutrition tips.",
      email: "mike@example.com",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      tags: ["Strength", "Video"],
      ratePost: 500,
    },
    {
      firstName: "Emily",
      lastName: "Rose",
      handle: "emily.beauty",
      platform: "INSTAGRAM",
      followers: 28000,
      engagementRate: 2.9,
      niche: ["Beauty", "Skincare"],
      location: "London, UK",
      bio: "Skincare addict. Sephora partner.",
      email: "emily@example.com",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      tags: ["Skincare", "Makeup"],
      ratePost: 250,
    }
  ];

  console.log("Seeding Influencers...");
  for (const inf of influencers) {
    // Upsert to avoid duplicates if re-running
    // Assuming handle is unique enough for seeding check, or just createMany if we wipe
    // Since handle isn't @unique in schema yet (it should be probably), we'll check first or just create.
    
    const existing = await prisma.influencer.findFirst({
        where: { handle: inf.handle }
    });

    if (!existing) {
        await prisma.influencer.create({ data: inf });
    }
  }

  // Create a Demo Users
  const userEmail = "demo@example.com";
  let user = await prisma.users.findUnique({
    where: { email: userEmail },
  });

  if (!user) {
    console.log("Creating Demo User...");
    user = await prisma.users.create({
      data: {
        email: userEmail,
        name: "Demo User",
        password: "password123", // In real app, hash this
      },
    });
  }

  // Create a Sample Campaign
  const campaignName = "Summer Launch 2026";
  const existingCampaign = await prisma.campaign.findFirst({
    where: { name: campaignName }
  });

  if (!existingCampaign && user) {
    console.log("Creating Sample Campaign...");
    const campaign = await prisma.campaign.create({
      data: {
        name: campaignName,
        description: "Launch campaign for the new summer skincare line.",
        brand: "GlowCosmetics",
        budget: 5000,
        status: "DRAFT",
        ownerId: user.id,
        objectives: ["Brand Awareness", "UGC"],
      }
    });
  }

  console.log("-------- Seed DB completed --------");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
