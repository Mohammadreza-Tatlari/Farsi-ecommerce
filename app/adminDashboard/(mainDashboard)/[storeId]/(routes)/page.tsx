import prismadb from '@/lib/prismadb'
import React from 'react'

interface StorePageProps{
params: {storeId: string}
}

export default async function StorePage({params}: StorePageProps) {

    const store = await prismadb.store.findFirst({
        where:{
            id: params.storeId
        }
    })
    const storeName = store?.name

  return (
    <>
    <div>store actually exist and you are navigated by really cool routing</div>
    <div>نام این فروشگاه: {storeName} می باشد</div>
    </>
    )
}
