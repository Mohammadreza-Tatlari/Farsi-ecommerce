"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";

export default function ADMainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/adminDashboard/${params.storeId}/setting`,
      label: "تنظیمات",
      isActive: pathname === `/adminDashboard/${params.storeId}/setting`,
    },
    {
      href: `/adminDashboard/${params.storeId}/`,
      label: "بررسی",
      isActive: pathname === `/adminDashboard/${params.storeId}/`,
    },
  ];
  return (
    <>
      <nav
        className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      >
        {routes.map((route) => (
          <Link
            href={route.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary underline-offset-4",
              route.isActive ? "text-black " : "text-primary"
            )}
          >
            {route.label}
          </Link>
        ))}
      </nav>
    </>
  );
}
