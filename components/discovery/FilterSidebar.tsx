"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";

export function FilterSidebar() {
    return (
        <div className="w-64 flex-shrink-0 border-r h-full p-4 space-y-6 hidden md:block overflow-y-auto">
            <div>
                <h3 className="font-semibold mb-4">Filters</h3>
                <Input placeholder="Search keywords..." className="mb-4" />
            </div>

            <div>
                <h4 className="text-sm font-medium mb-2">Platform</h4>
                <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                        <Checkbox id="ig" />
                        <Label htmlFor="ig">Instagram</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="tt" />
                        <Label htmlFor="tt">TikTok</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="yt" />
                        <Label htmlFor="yt">YouTube</Label>
                    </div>
                </div>
            </div>

            <Separator />

            <div>
                <h4 className="text-sm font-medium mb-3">Follower Count</h4>
                <Slider defaultValue={[10000]} max={1000000} step={1000} />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>10K</span>
                    <span>1M+</span>
                </div>
            </div>

            <Separator />

            <div>
                <h4 className="text-sm font-medium mb-3">Engagement Rate</h4>
                <Slider defaultValue={[2]} max={10} step={0.1} />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>1%</span>
                    <span>10%+</span>
                </div>
            </div>

            <Separator />

            <div>
                <h4 className="text-sm font-medium mb-2">Niche</h4>
                <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                        <Checkbox id="beauty" />
                        <Label htmlFor="beauty">Beauty</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="fitness" />
                        <Label htmlFor="fitness">Fitness</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="fashion" />
                        <Label htmlFor="fashion">Fashion</Label>
                    </div>
                </div>
            </div>

            <Button className="w-full mt-4">Apply Filters</Button>
        </div>
    );
}
