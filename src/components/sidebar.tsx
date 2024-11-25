"use client"

import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { RefreshCwIcon as Refresh, Database, LogOut } from 'lucide-react'
// import { useRouter } from 'next/router'

const SidebarLink = ({ href, children, icon: Icon }) => {
  const pathname = usePathname()
  const isActive = pathname === href
 



  return (
    <Link href={href} className={`flex items-center mt-4 space-x-2 px-4 py-2 rounded-lg transition-colors ${isActive ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'}`}>
      <Icon className="h-5 w-5" />
      <span>{children}</span>
    </Link>
  )
}

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  return (
    <>
      <aside className={`bg-white text-white  w-64 min-h-screen p-4 fixed lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center h-20 mb-8">
            <h1 className="text-2xl text-gray-800 font-bold">LawNeeds</h1>
          </div>
          <nav className="flex-1 ">
            <SidebarLink href="/dashboard" icon={Refresh}>Refresh</SidebarLink>
            <SidebarLink href="/dashboard/scrapper" icon={Database}>Scrapper</SidebarLink>
          </nav>
          <button 
            onClick={() => router.push('/')} 
            className="flex items-center space-x-2 px-4 py-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-lg transition-colors"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>
      <button 
        className="lg:hidden fixed bottom-4 right-4 bg-black text-white p-2 rounded-full shadow-lg z-20"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>
    </>
  )
}

