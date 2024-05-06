import { UserButton } from '@clerk/nextjs'
import React from 'react'

export default function Navbar() {
  return (
    <div>
        <UserButton afterSignOutUrl='/'/>
        <>Main Navbar</>
    </div>
  )
}




