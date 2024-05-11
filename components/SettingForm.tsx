'use client'

import { Store } from '@prisma/client'
import Heading from './Heading'
import { Button } from './ui/button'
import { Trash } from 'lucide-react'

interface SettingFormProps{
    data: Store
}

export default function SettingForm({data}: SettingFormProps) {
  return (
    <div className='flex items-center justify-between'>
        <Heading
        title="تنظیمات"
        description='مدیریت و تنظیم فروشگاه'/>
        <Button variant="destructive"
        size='icon'
        onClick={() => {}}>
            <Trash className='h-4 w-4'/>
        </Button>
    </div>
  )
}
