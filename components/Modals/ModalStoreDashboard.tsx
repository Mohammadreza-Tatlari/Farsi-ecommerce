"use client";
import React, { useEffect } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import Modal from "../Modal";
import useModalStoreAD from "@/app/hooks/useModalStoreAD";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "نام باید حداقل یک کاراکتر داشته باشد",
  }),
});

export default function ModalStoreDashboard() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });
  const storeModal = useModalStoreAD();
  async function onSubmit(value: z.infer<typeof formSchema>) {
    console.log(value, "value of Submitted in ModalStoreAD");
  }
  return (
    <>
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
                        <Input placeholder="نام فروشگاه..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                </div>
                <div className="flex justify-start items-center space-x-4 w-full pt-6">
                  <Button type="submit">تایید</Button>
                  <Button size="default" variant="outline" onClick={storeModal.onClose}>لغو</Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
        
      </Modal>
    </>
  );
}
