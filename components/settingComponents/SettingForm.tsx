'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Store } from '@prisma/client'
import axios from 'axios'
import { Trash } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { z } from 'zod'
import Heading from '../Heading'
import { Button } from '../ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Separator } from '../ui/separator'
import AlertModal from '../Admin-Dashboard/Modals/AlertModal'
import { ApiALert } from '../ui/api-alert'
import useOrigin from '@/app/hooks/use-origin'

interface SettingFormProps{
    receivedData: Store
}

const fomrSchema = z.object({
  name: z.string().min(1, {message:"نام باید حداقل دارای یک کلمه باشد"}),
})

type settingFormValues = z.infer<typeof fomrSchema>;

export default function SettingForm({receivedData}: SettingFormProps) {

  const router = useRouter()
  const params = useParams()
  const [isOpen, setOpen ] = useState<boolean>(false)
  const [isLoading , SetLoading] = useState<boolean>(false)
  const createdOrigin = useOrigin()

  const form = useForm<settingFormValues>({
    resolver: zodResolver(fomrSchema),
    defaultValues: receivedData,
  })

  async function onSubmit(data: settingFormValues){
    try {
      SetLoading(true)
      await axios.patch(`/api/stores/${params.storeId}` , data)
      toast.success("!نام فروشگاه بروزرسانی شد")
      router.refresh()
    } 
    catch (error) {
      console.log("error result is : " , error);
      toast.error("خطایی در بروز رسانی صورت گرفت")
    }
    finally{
      SetLoading(false)
    }
  }

  function onConfirm() {
    setOpen(true)
  }
  function onClose(){
    setOpen(false)
  }
  async function onDelete(){
    try {
      SetLoading(true)
      await axios.delete(`/api/stores/${params.storeId}`)
      router.refresh()
      router.push('/adminDashboard')
      toast.success("فروشگاه با موفقیت حذف شد")
    } catch (error) {
      toast.error("قبل از حذف از خالی بودن تمام اطلاعات مطمعا شوید")
      
    }finally{
      SetLoading(false)
    }
  }

  return (
    <>
    <AlertModal loading={isLoading} onClose={onClose} onConfirm={onDelete} isOpen={isOpen}/>
    
    <div className='flex items-center justify-between'>
        <Heading
        title="تنظیمات"
        description='مدیریت و تنظیم فروشگاه'/>
        <Button variant="destructive"
        size='icon'
        onClick={onConfirm}>
            <Trash className='h-4 w-4'/>
        </Button>
    </div>
    <Separator />   
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 w-full'>
      <div className='grid grid-cols-3 gap-8'>
      <FormField 
      control={form.control}
      name='name'
      render={({field}) => (
        <FormItem>
          <FormLabel>
            نام فروشگاه
          </FormLabel>
          <FormControl>
            <Input disabled={isLoading} placeholder='نام فروشگاه' {...field}/>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
      />
      </div>
      <Button disabled={isLoading} className='ml-auto' type='submit'> دخیره تغییرات</Button>
    </form>
    </Form>
    <Separator />
    <ApiALert title='NEXT_PUBLIC_API_URL' description={`${createdOrigin}/api/${params.storeId}`} variant='public'/>
    </>
  )
}