import SettingForm from '@/components/SettingForm';
import prismadb from '@/lib/prismadb';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react'
interface SettingPageProps{
    params:{
        storeId: string;
    }
}

export default async function SettingPage({params}:SettingPageProps) {

    const {userId} = auth();
    if(!userId) {
        redirect('/auth/sign-in')
    }

    const store = await prismadb.store.findFirst({
        where: {
            userId,
            id: params.storeId
        }
    })

    if(!store){
        redirect("/adminDashboard")
    }

  return (
    <>
    <div dir='rtl' className='flex-col'>
        <div className='flex-1 space-y-4 p-8 pt-6'>
            <SettingForm data={store} />
        </div>
    </div>
    </>
  )
}
