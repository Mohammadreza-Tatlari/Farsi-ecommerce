'use client'
import useModalStoreAD from "@/app/hooks/useModalStoreAD";
import React from "react";
import { useEffect } from "react";

//this page only triggers modal for dashboard
export default function DashboardPage() {
  const {onOpen ,isOpen} = useModalStoreAD();
  
  useEffect(() => {
    if(!isOpen){
      onOpen()
    }
  },[])

  return null;
  // return (
  //   <div className="flex justify-center items-center h-screen">
  //     <h1>صفحه ی داشبورد adminDashboard not `()`</h1>
  //   </div>
  // );
}
