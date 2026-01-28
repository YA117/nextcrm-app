"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus, Search, MoreHorizontal, User } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

// Mock Data
const MOCK_LISTS = [
    {
        id: "1",
        name: "Summer Launch Candidates",
        description: "Potential influencers for the upcoming summer skincare line.",
        count: 12,
        color: "bg-orange-100 dark:bg-orange-900/20 text-orange-600",
        updatedAt: "2 days ago"
    },
    {
        id: "2",
        name: "VIP Ambassadors",
        description: "Long-term partners and high performers.",
        count: 4,
        color: "bg-purple-100 dark:bg-purple-900/20 text-purple-600",
        updatedAt: "1 week ago"
    },
    {
        id: "3",
        name: "Fitness Niche (LA)",
        description: "Los Angeles based fitness content creators.",
        count: 28,
        color: "bg-green-100 dark:bg-green-900/20 text-green-600",
        updatedAt: "3 days ago"
    }
];

export default function ListsPage() {
    return (
        <div className="flex flex-col h-full space-y-6 p-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">My Lists</h1>
                    <p className="text-muted-foreground">Organize your influencers into custom collections.</p>
                </div>
                <Button>
                    <Plus className="mr-2 h-4 w-4" /> Create List
                </Button>
            </div>

            <div className="flex items-center gap-2 max-w-sm">
                <div className="relative w-full">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search lists..."
                        className="w-full pl-9"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MOCK_LISTS.map((list) => (
                    <Card key={list.id} className="cursor-pointer hover:shadow-md transition-all">
                        <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                                <Badge variant="secondary" className={`${list.color} hover:${list.color} border-0`}>
                                    {list.count} Influencers
                                </Badge>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" className="h-8 w-8 p-0">
                                            <span className="sr-only">Open menu</span>
                                            <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                        <DropdownMenuItem>Edit List</DropdownMenuItem>
                                        <DropdownMenuItem>Manage Influencers</DropdownMenuItem>
                                        <DropdownMenuItem className="text-red-600">Delete List</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                            <CardTitle className="text-xl mt-2">{list.name}</CardTitle>
                            <CardDescription className="line-clamp-2 min-h-[40px]">
                                {list.description}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground pt-4 border-t">
                                <User className="h-4 w-4" />
                                <span>By You</span>
                                <span className="mx-1">•</span>
                                <span>Updated {list.updatedAt}</span>
                            </div>
                        </CardContent>
                    </Card>
                ))}

                {/* New List Card Placeholder */}
                <button className="border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center gap-2 text-muted-foreground hover:bg-accent/50 transition-colors h-full min-h-[200px]">
                    <div className="h-12 w-12 rounded-full bg-accent/50 flex items-center justify-center">
                        <Plus className="h-6 w-6" />
                    </div>
                    <span className="font-medium">Create New List</span>
                </button>
            </div>
        </div>
    );
}
