'use client'

import React from 'react'
import Heading from '../Heading'
import { Button } from '../ui/button'
import { Plus } from 'lucide-react'
import { Separator } from '../ui/separator'
import { useParams, useRouter } from 'next/navigation'

export default function BillboardClient() {
  const router = useRouter()
  const params = useParams()
  return (
    <>
    <div className='flex items-center justify-between'>
        <Heading 
        title='آگهی ها (0)'
        description='مدیریت آگهی های داخل فروشگاه'/>
        <Button onClick={() => {router.push(`/adminDashboard/${params.storeId}/billboard/new`)}}>
            افزودن جدید
        <Plus className='mr-2 h-4 w-4'/>
        </Button>
    </div>
    <Separator />
    </>
  )
}
