"use client";

import Modal from "@/components/Modal";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}
export default function AlertModal({
  isOpen,
  onClose,
  onConfirm,
  loading,
}: AlertModalProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); 
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
    <Modal
    title="آیا از حذف این فروشگاه اطمینان دارید؟"
    description="این عمل قابل برگشت نیست"
    isOpen={isOpen}
    onClose={onClose}
    >
        <div className="pt-6 space-x-2 flex items-center justify-start w-full">
            <Button disabled={loading} variant="destructive" onClick={onConfirm}>حذف فروشگاه</Button>
            <Button disabled={loading} variant="outline" onClick={onClose}>لفو</Button>
        </div>
    </Modal>
    </>
  );
}
