import React from 'react'
import ModalProvider from '../../provider/ModalProvider'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';
import prismadb from '@/lib/prismadb';
import DashboardNavbar from '@/components/Admin-Dashboard/DashboardNavbar';

export default async function DashboardLayout({children}:{children:React.ReactNode}) {
  
  const {userId} = auth();

  if(!userId){
    redirect('/auth/sign-in')
  }
  
  const store = await prismadb.store.findFirst({
    where:{
      userId: userId
    }
  })

  if(store){
    redirect(`adminDashboard/${store.id}`)
  }

  return (
    <>
    <div>
        <ModalProvider />
        {children}
    </div>
    </>
  )
}
