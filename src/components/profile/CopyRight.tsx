import { cn } from "@/lib/utils";
import React from "react";

function CopyRight({ className='' }: { className?: string }) {
    const currentYear = new Date().getFullYear();
    return (
        <p className={cn("text-gray-500 text-sm mt-6", className)}>© {currentYear} All rights reserved.</p>
    );
}

export default CopyRight;
