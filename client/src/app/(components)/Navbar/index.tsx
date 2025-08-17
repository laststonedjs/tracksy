'use client'

import { Bell, Menu, Search } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-full mb-7'>
        {/* LEFT SIDE */}
        <div className='flex justify-between items-center gap-5'>
            <button 
                    className='px-3 py-3 bg-amber-100 rounded-full hover:bg-green-100'
                    onClick={() => {}}>
                        <Menu className='w-4 h-4' />
            </button>
            <div className='relative'>
                <input 
                    type='search'
                    placeholder='Start type to search groups & products'
                    className='pl-10 pr-4 py-2 w-50 md:w-80 border-2 border-gray-300 bg-white rounded-lg focus:outline-none '
                />

                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <Search className='text-gray-500' size={20} />
                </div>
            </div>
        </div>

        {/* RIGHT SIDE */}
        <div className='flex justify-between items-center gap-5'>
            <div className='hidden md:flex justify-between items-center gap-5'>
                <div className='relative'>
                    <Bell className='cursor-pointer text-gray-500' size={24} />
                </div>
                <hr className='w-0 h-7 border border-solid border-l border-gray-300 mx-3' />
                {/* image placeholder */}
                <div className='flex items-center gap-3 cursor-pointer'>
                    <div className='w-9 h-9'>
                        image
                    </div>
                    <span className='font-semibold'>Filip</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar