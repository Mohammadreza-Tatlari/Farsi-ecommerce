"use client";
import { Store } from "@prisma/client";
import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import useModalStoreAD from "@/app/hooks/useModalStoreAD";
import { useParams, useRouter } from "next/navigation";
import { Button } from "../ui/button";
import {
  Check,
  ChevronsUpDownIcon,
  PlusCircle,
  Store as StoreIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "../ui/command";

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;

interface StoreSwitcherProps extends PopoverTriggerProps {
  items: Store[];
}

export default function StoreSwitcher({
  className,
  items = [],
}: StoreSwitcherProps) {

  const storeModal = useModalStoreAD();
  const params = useParams();
  const router = useRouter();

  const formattedItems = items.map((item) => {
    return {
      label: item.name,
      value: item.id,
    };
  });
  items.map((item) => ({
    label: item.name,
    value: item.id,
  }));

  const currentStore = formattedItems.find(
    (items) => items.value === params.storeId
  );
  const [open, setOpen] = useState(false);

  const onStoreSelect = (store: { value: string; label: string }) => {
    setOpen(false);
    router.push(`/adminDashboard/${store.value}`);
  };
  return (
    <>
      <div >
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            role="combobox"
            aria-expanded={open}
            aria-label="انتخاب فروشگاه"
            className={cn("w-[200px] justify-between", className)}
          >
            <ChevronsUpDownIcon className="h-4 w-4 mr-auto shrink-0 opacity-40" />
            {currentStore?.label} 
            <StoreIcon className="ml-2 h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandList>
              <CommandInput placeholder="جست و جو فروشگاه" />
              <CommandEmpty>فروشگاهی یافت نشد</CommandEmpty>
              <CommandGroup>
                {formattedItems.map((store) => (
                  <CommandItem
                    key={store.value}
                    onSelect={() => onStoreSelect(store)}
                    className="text-sm"
                  >
                    <Check
                      className={cn(
                        "mr-auto h-4 w-4",
                        currentStore?.value === store.value
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {store.label}
                    <StoreIcon className="ml-2 h-4 w-4" />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
            <CommandSeparator />
            <CommandList>
              <CommandGroup>
                <CommandItem
                  onSelect={() => {                   
                    setOpen(false);
                    storeModal.onOpen();
                  }}
                >
                  <PlusCircle className="mr-auto h-4 w-5" />
                  فروشگاه جدید
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      </div>
    </>
  );
}
