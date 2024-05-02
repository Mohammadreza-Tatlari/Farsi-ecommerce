import React from 'react'
import ModalProvider from '../provider/ModalProvider'

export default function DashboardLayout({children}:{children:React.ReactNode}) {
    return (
    <>
    <div>
        <ModalProvider />
        {children}
    </div>
    </>
  )
}
