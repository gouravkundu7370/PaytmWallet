"use client";

import { usePathname, useRouter } from "next/navigation";

import React from "react";

export const SidebarItem = ({
  href,
  title,
  icon,
}: {
  href: string;
  title: string;
  icon: React.ReactNode;
}) => {
  const router = useRouter();

  const pathname = usePathname();
    const selected = pathname === href;
    return <div className={`${selected ? "text-[#ae1ed6]" :"text-slate-700"} cursor-pointer pl-2 p-2`} onClick={() => {
        router.push(href)
    }}>
        <div className="pr-2">

            {icon}
        </div>
        <div className={`font-bold ${selected ? "text-[#ae1ed6]":"text-slate-700"}`}>

            {title}
        </div>

    </div>
};
