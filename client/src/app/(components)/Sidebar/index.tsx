'use client'

import { useAppDispatch, useAppSelector } from '@/app/redux';
import { setIsSidebarCollapsed } from '@/state';
import { Icon, Menu, LucideIcon, Layout, Archive, Clipboard } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarLinkProps {
    href: string;
    icon: LucideIcon;
    label: string;
    isCollapsed: boolean
}

const SidebarLink = ({
    href,
    icon: Icon,
    label,
    isCollapsed
}: SidebarLinkProps) => {
    const pathname = usePathname();
    const isActive = pathname === href || (pathname === "/" && href === "/dashboard");

    return (
        <Link href={href}>
            <div className={`cursor-pointer flex items-center ${
                isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"}
                hover:text-green-500 hover:bg-green-100 gap-3 transition-colors ${
                    isActive ? "bg-amber-100 text-white" : ""
                }
            }`}
        >
            <Icon className='w-6 h-6 !text-gray-700' />

            <span className={`${isCollapsed ? "hidden" : "block"
            } font-medium text-gray-700`}>
                {label}
            </span>
            </div>
        </Link>
    )
}


const Sidebar = () => {
    const dispatch = useAppDispatch();
    const isSidebarCollapsed = useAppSelector(
        (state) => state.global.isSidebarCollapsed
      );

      const toogleSidebar = () => {
        dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))
      };

      const sidebarClassNames = `fixed flex flex-col ${
        isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
      } bg-white overflow-hidden h-full shadow-md z-40`

  return (
    <div className={sidebarClassNames}>
        {/* TOP LOGO */}
        <div className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${
            isSidebarCollapsed ? "px-5" : "px-8"}`}
        >
            <div>
                <Image 
                    src="/logo.png"
                    alt='logo'
                    width={30}
                    height={30}
                />
            </div>
            <h1 className={`${
                    isSidebarCollapsed ? "hidden" : "block"
                } font-extrabold text-2xl`}
            >
                TRACKSY
            </h1>
            <button 
                className='md:hidden px-3 py-3 bg-gray-100 rounded-full' 
                onClick={toogleSidebar}>
                <Menu className='w-4 h-4' />
            </button>
        </div>

        {/* LINKS */}
        <div className='flex-grow mt-8'>
            <SidebarLink 
                href='/dashboard'
                icon={Layout}
                label='Dashboard'
                isCollapsed={isSidebarCollapsed}
            />
            <SidebarLink 
                href='/inventory'
                icon={Archive}
                label='Inventory'
                isCollapsed={isSidebarCollapsed}
            />
            <SidebarLink 
                href='/products'
                icon={Clipboard}
                label='Products'
                isCollapsed={isSidebarCollapsed}
            />
        </div>

        {/* FOOTER */}
        <div className={`${isSidebarCollapsed} ? "hidden" : "block" mb-10`}>
            <p className='text-center text-xs text-gray-500'>&copy; 2025 Tracksy</p>
        </div>
    </div>
  )
}

export default Sidebar