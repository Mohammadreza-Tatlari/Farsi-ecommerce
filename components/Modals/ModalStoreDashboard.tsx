'use client'
import React, { useEffect } from 'react'
import Modal from '../Modal'
import useModalStoreAD from '@/app/hooks/useModalStoreAD'

export default function ModalStoreDashboard() {
    const onOpen = useModalStoreAD((state) => state.onOpen);
    const isOpen = useModalStoreAD((state) => state.isOpen);
    const onClose = useModalStoreAD((state) => state.onClose);
    console.log("isOpen va",isOpen);
    
    useEffect(() => {
        if(!isOpen){
            onOpen()
        }
    },[])
    console.log();
    console.log("isOpen va2",isOpen);
  return (
    <>
    <Modal isOpen={isOpen} title='ماجول استور' description='توضیحاتی درباره ماجول' onClose={onClose}>
        محتوای داخل استور مدال
    </Modal>
    </>
  )
}
