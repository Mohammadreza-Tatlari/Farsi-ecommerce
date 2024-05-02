'use client'
import Modal from '@/components/Modal';
import ModalStoreDashboard from '@/components/Modals/ModalStoreDashboard';
import {useEffect , useState} from 'react';

export default function ModalProvider() {
    const [isMounted , setIsMounted] = useState<boolean>(false)
 
    useEffect(() => {
        setIsMounted(true)
    },[])

    if(!isMounted){
        return null;
    }

  return (
    <>
    <ModalStoreDashboard />
    </>
  )
}
