"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Instagram, MapPin, Mail, Globe, ArrowUpRight } from "lucide-react";
import { SiTiktok } from "react-icons/si";

// Mock data
const MOCK_INFLUENCER = {
    id: "1",
    firstName: "Sarah",
    lastName: "Jenkins",
    handle: "sarahjenkins_fit",
    platform: "INSTAGRAM",
    followers: 45200,
    following: 850,
    engagementRate: 3.8,
    avgLikes: 1540,
    avgComments: 85,
    niche: ["Fitness", "Wellness"],
    location: "Los Angeles, CA",
    bio: "Fitness enthusiast | Yoga teacher | LA based 🌴\nHelping you live your best life.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    verified: true,
    posts: [
        { id: 1, image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=400", likes: 1200, comments: 45 },
        { id: 2, image: "https://images.unsplash.com/photo-1544367563-12123d8965cd?auto=format&fit=crop&w=400", likes: 1800, comments: 90 },
        { id: 3, image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=400", likes: 1500, comments: 60 },
    ]
};

export default function InfluencerProfilePage({ params }: { params: { id: string } }) {
    // In real app, fetch influencer by params.id
    const influencer = MOCK_INFLUENCER;

    return (
        <div className="flex flex-col min-h-screen bg-background p-6 space-y-6">
            {/* Header */}
            <Card>
                <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <Avatar className="h-24 w-24 md:h-32 md:w-32">
                            <AvatarImage src={influencer.avatar} />
                            <AvatarFallback>SJ</AvatarFallback>
                        </Avatar>

                        <div className="flex-1 space-y-2">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h1 className="text-2xl font-bold flex items-center gap-2">
                                        {influencer.firstName} {influencer.lastName}
                                        {influencer.verified && <Badge variant="secondary">Verified</Badge>}
                                    </h1>
                                    <p className="text-muted-foreground flex items-center gap-1">
                                        <Instagram className="h-4 w-4" /> @{influencer.handle}
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <Button>Add to Campaign</Button>
                                    <Button variant="outline">Message</Button>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                    <MapPin className="h-4 w-4" /> {influencer.location}
                                </div>
                                <div className="flex items-center gap-1">
                                    <Globe className="h-4 w-4" /> website.com
                                </div>
                            </div>

                            <p className="whitespace-pre-wrap pt-2 max-w-2xl">
                                {influencer.bio}
                            </p>

                            <div className="flex gap-2 pt-2">
                                {influencer.niche.map(tag => (
                                    <Badge key={tag} variant="outline">{tag}</Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Stats Column */}
                <div className="space-y-6">
                    <Card>
                        <CardHeader><CardTitle className="text-base">Performance</CardTitle></CardHeader>
                        <CardContent className="grid grid-cols-2 gap-4">
                            <div>
                                <div className="text-2xl font-bold">{influencer.engagementRate}%</div>
                                <div className="text-xs text-muted-foreground">Engagement Rate</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold">{(influencer.followers / 1000).toFixed(1)}K</div>
                                <div className="text-xs text-muted-foreground">Followers</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold">{influencer.avgLikes}</div>
                                <div className="text-xs text-muted-foreground">Avg Likes</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold">{influencer.avgComments}</div>
                                <div className="text-xs text-muted-foreground">Avg Comments</div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader><CardTitle className="text-base">Audience</CardTitle></CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span>United States</span>
                                    <span className="font-bold">65%</span>
                                </div>
                                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                    <div className="h-full bg-primary w-[65%]" />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span>United Kingdom</span>
                                    <span className="font-bold">12%</span>
                                </div>
                                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                    <div className="h-full bg-primary w-[12%]" />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span>Female</span>
                                    <span className="font-bold">78%</span>
                                </div>
                                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                    <div className="h-full bg-pink-500 w-[78%]" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Content Column */}
                <div className="md:col-span-2 space-y-6">
                    <Tabs defaultValue="content">
                        <TabsList>
                            <TabsTrigger value="content">Recent Content</TabsTrigger>
                            <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
                            <TabsTrigger value="notes">Notes</TabsTrigger>
                        </TabsList>

                        <TabsContent value="content" className="mt-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {influencer.posts.map(post => (
                                    <Card key={post.id} className="overflow-hidden group cursor-pointer">
                                        <div className="relative aspect-square">
                                            <img src={post.image} alt="Post" className="object-cover w-full h-full group-hover:scale-105 transition-transform" />
                                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-4 font-bold">
                                                <span>❤️ {post.likes}</span>
                                                <span>💬 {post.comments}</span>
                                            </div>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="campaigns" className="mt-4">
                            <div className="space-y-4">
                                <Card>
                                    <CardContent className="p-4 flex items-center justify-between">
                                        <div>
                                            <h3 className="font-semibold">Summer Launch 2026</h3>
                                            <p className="text-sm text-muted-foreground">Status: <span className="text-green-600 font-medium">Active</span></p>
                                        </div>
                                        <Button variant="outline" size="sm">View Details</Button>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardContent className="p-4 flex items-center justify-between">
                                        <div>
                                            <h3 className="font-semibold">Winter Collection</h3>
                                            <p className="text-sm text-muted-foreground">Status: <span className="text-blue-600 font-medium">Completed</span></p>
                                        </div>
                                        <Button variant="outline" size="sm">View Details</Button>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>

                        <TabsContent value="notes" className="mt-4">
                            <Card>
                                <CardContent className="p-4 space-y-4">
                                    <div className="flex gap-4">
                                        <div className="w-2 bg-primary/20 rounded-full" />
                                        <div className="pb-4 border-b w-full">
                                            <p className="text-sm font-medium">Initial Outreach</p>
                                            <p className="text-sm text-muted-foreground text-xs mb-1">Oct 24, 2025</p>
                                            <p className="text-sm">Sent email regarding the Summer campaign. She seemed interested in the previous interaction.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-2 bg-primary/20 rounded-full" />
                                        <div className="pb-2 w-full">
                                            <p className="text-sm font-medium">Rate Negotiation</p>
                                            <p className="text-sm text-muted-foreground text-xs mb-1">Oct 28, 2025</p>
                                            <p className="text-sm">Agreed on $350 per post. Contract sent for review.</p>
                                        </div>
                                    </div>
                                    <Button className="w-full mt-2" variant="secondary">Add Note</Button>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}
