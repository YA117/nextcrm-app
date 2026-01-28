"use client";

import { List } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
    open: boolean;
};

const ListsModuleMenu = ({ open }: Props) => {
    const pathname = usePathname();
    const isPath = pathname.includes("lists");
    return (
        <div className="flex flex-row items-center mx-auto p-2">
            <Link
                href={"/lists"}
                className={`flex gap-2 p-2 w-full hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors ${isPath ? "text-primary bg-slate-100 dark:bg-slate-800" : "text-muted-foreground"
                    }`}
            >
                <List className="w-6 h-6" />
                <span className={`${open ? "block" : "hidden"} ml-2 font-medium`}>Lists</span>
            </Link>
        </div>
    );
};

export default ListsModuleMenu;
