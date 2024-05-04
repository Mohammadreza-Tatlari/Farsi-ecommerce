import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

export default async function MainDashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { storeId: string };
}) {
   const {userId} = auth();
   
   if(!userId){
     redirect("/auth/sign-in")
    }
    
    console.log("ID IS : " ,params.storeId);
   //check whether the dashboard exist for the logged user.
   //and checks whether user has any store
   const store = await prismadb.store.findFirst({
    where:{
        id: params.storeId,
        userId: userId,
    }
   })

   if(!store) {
    redirect('/adminDashboard')
   }
  return(
    <>
    <div>Navbar</div>
    {children}
    </>
  );
}
