"use client";

import { useEffect, useState } from "react";
import { FilterSidebar } from "@/components/discovery/FilterSidebar";
import { InfluencerCard } from "@/components/influencer/InfluencerCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

// Mock data until API is connected - aiming for immediate visual feedback
const MOCK_INFLUENCERS = [
    {
        id: "1",
        firstName: "Sarah",
        lastName: "Jenkins",
        handle: "sarahjenkins_fit",
        platform: "INSTAGRAM",
        followers: 45200,
        engagementRate: 3.8,
        niche: ["Fitness", "Wellness"],
        location: "Los Angeles, CA",
        bio: "Fitness enthusiast | Yoga teacher | LA based",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        verified: true,
    },
    {
        id: "2",
        firstName: "Mike",
        lastName: "Chen",
        handle: "mike_lifts",
        platform: "TIKTOK",
        followers: 82000,
        engagementRate: 5.2,
        niche: ["Fitness", "Gym"],
        location: "New York, NY",
        bio: "Powerlifting and nutrition tips.",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        verified: false,
    },
    {
        id: "3",
        firstName: "Emily",
        lastName: "Rose",
        handle: "emily.beauty",
        platform: "INSTAGRAM",
        followers: 28000,
        engagementRate: 2.9,
        niche: ["Beauty", "Skincare"],
        location: "London, UK",
        bio: "Skincare addict. Sephora partner.",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
        verified: true,
    }
];

export default function DiscoveryPage() {
    const [influencers, setInfluencers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate API fetch
        const fetchInfluencers = async () => {
            try {
                // In real implementation: const res = await fetch('/api/influencers');
                // const data = await res.json();
                // setInfluencers(data);
                setTimeout(() => {
                    setInfluencers(MOCK_INFLUENCERS);
                    setLoading(false);
                }, 500);
            } catch (error) {
                console.error("Failed to fetch influencers", error);
                setLoading(false);
            }
        };

        fetchInfluencers();
    }, []);

    return (
        <div className="flex h-full min-h-screen bg-background">
            <FilterSidebar />
            <div className="flex-1 flex flex-col">
                <header className="border-b p-4 flex items-center justify-between bg-card">
                    <div className="flex items-center gap-2 w-full max-w-xl">
                        <div className="relative w-full">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search by name, handle, or keywords..."
                                className="w-full pl-9"
                            />
                        </div>
                        <Button>Search</Button>
                    </div>
                    <div className="ml-4 flex items-center gap-2">
                        <span className="text-sm text-muted-foreground mr-2">Sort by: Relevance</span>
                    </div>
                </header>

                <main className="flex-1 p-6 overflow-y-auto">
                    <div className="mb-4">
                        <h1 className="text-2xl font-bold tracking-tight">Discover Influencers</h1>
                        <p className="text-muted-foreground">Find the perfect creators for your next campaign.</p>
                    </div>

                    {loading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="h-[300px] w-full bg-muted animate-pulse rounded-xl" />
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {influencers.map((influencer) => (
                                <InfluencerCard key={influencer.id} influencer={influencer} />
                            ))}
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}
