"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Instagram, MapPin, Plus, User, Youtube } from "lucide-react";
import { SiTiktok } from "react-icons/si";

interface InfluencerCardProps {
    influencer: any; // Type strictly later with Prisma type
}

export function InfluencerCard({ influencer }: InfluencerCardProps) {
    const formatNumber = (num: number) => {
        if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
        if (num >= 1000) return (num / 1000).toFixed(1) + "K";
        return num.toString();
    };

    const PlatformIcon = () => {
        switch (influencer.platform) {
            case "INSTAGRAM":
                return <Instagram className="h-4 w-4 text-pink-500" />;
            case "TIKTOK":
                return <SiTiktok className="h-4 w-4 text-black dark:text-white" />;
            case "YOUTUBE":
                return <Youtube className="h-4 w-4 text-red-600" />;
            default:
                return <User className="h-4 w-4" />;
        }
    };

    return (
        <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                <Avatar className="h-16 w-16">
                    <AvatarImage src={influencer.avatar} alt={influencer.handle} />
                    <AvatarFallback>{influencer.firstName?.[0]}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                    <h3 className="font-semibold text-lg hover:underline cursor-pointer">
                        {influencer.firstName} {influencer.lastName}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <PlatformIcon />
                        <span>@{influencer.handle}</span>
                        {influencer.verified && (
                            <Badge variant="secondary" className="h-4 px-1 text-[10px] ml-1">
                                Verified
                            </Badge>
                        )}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                        <MapPin className="h-3 w-3" />
                        {influencer.location || "Unknown"}
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 gap-4 mt-2 mb-4">
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold">{formatNumber(influencer.followers)}</span>
                        <span className="text-xs text-muted-foreground">Followers</span>
                    </div>
                    <div className="flex flex-col">
                        <span className={`text-2xl font-bold ${influencer.engagementRate > 3 ? "text-green-600" :
                                influencer.engagementRate < 1 ? "text-red-500" : "text-yellow-600"
                            }`}>
                            {influencer.engagementRate}%
                        </span>
                        <span className="text-xs text-muted-foreground">Engagement</span>
                    </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-2">
                    {influencer.niche?.slice(0, 3).map((tag: string) => (
                        <Badge key={tag} variant="outline" className="text-xs font-normal">
                            {tag}
                        </Badge>
                    ))}
                </div>

                <p className="text-sm text-muted-foreground line-clamp-2 min-h-[40px]">
                    {influencer.bio}
                </p>
            </CardContent>
            <CardFooter className="flex justify-between gap-2">
                <Button variant="outline" className="w-full h-8 text-xs">
                    View Profile
                </Button>
                <Button size="sm" className="h-8 w-8 p-0 shrink-0">
                    <Plus className="h-4 w-4" />
                </Button>
            </CardFooter>
        </Card>
    );
}
