import { UserButton } from "@clerk/nextjs";
import React from "react";
import ADMainNav from "./ADMainNav";
import StoreSwitcher from "./StoreSwitcher";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";

export default async function DashboardNavbar() {
  const { userId } = auth();

  if (!userId) {
    redirect("/auth/sign-in");
  }

  const stores = await prismadb.store.findMany({
    where: {
      userId,
    },
  });

  return (
    <>
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <div className="mr-auto flex items-center space-x-4">
            <UserButton afterSignOutUrl="/" />
          </div>

          <div>
            <ADMainNav className="mx-6" />
          </div>
          <div>
            {/* store needs to be revised */}
            <StoreSwitcher items={stores} />
          </div>
        </div>
      </div>
    </>
  );
}
