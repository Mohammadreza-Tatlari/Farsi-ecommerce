"use client";
import React, { useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from 'axios'
import Modal from "../../Modal";
import useModalStoreAD from "@/app/hooks/useModalStoreAD";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { toast } from "react-hot-toast";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "نام باید حداقل یک کاراکتر داشته باشد",
  }),
});

export default function ModalStoreDashboard() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const storeModal = useModalStoreAD();

  async function onSubmit(values: z.infer<typeof formSchema>) {
      
        try {
          setIsLoading(true);
          const response = await axios.post('/api/stores', values);
          console.log(response.data);
          toast.success("فروشگاه ایجاد شد")
          //it will do a whole refresh on page for 100% load (welcome to REACT WORLD :) )
          window.location.assign(`/adminDashboard/${response.data.id}`)
          
        } catch (error) {
          console.log("error from modal ", error);
          toast.error("خطایی رخ داده است")
        } finally{
          setIsLoading(false)
        }
  }

  return (
    <div>
      <Modal
        isOpen={storeModal.isOpen}
        title="ماجول استور"
        description="توضیحاتی درباره ماجول"
        onClose={storeModal.onClose}
      >
        <div>
          <div className="space-y-4 py-2 pb-4">
            {/* adding all the created form to Form in order to use it value */}
            <Form {...form}>
              {/* let handleSubmit trigger our submit with value */}
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div dir="rtl">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>نام</FormLabel>
                        <FormControl>
                          {/* passing field in order to use properties */}
                          <Input
                            disabled={isLoading}
                            placeholder="نام فروشگاه..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex justify-start items-center space-x-4 w-full pt-6">
                  <Button disabled={isLoading} type="submit">
                    تایید
                  </Button>
                  <Button
                    disabled={isLoading}
                    size="default"
                    variant="outline"
                    onClick={storeModal.onClose}
                  >
                    لغو
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </Modal>
    </div>
  );
}
