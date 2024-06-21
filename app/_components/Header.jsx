import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


function Header() {
    return (
        <div className='p-5 shadow-sm flex justify-between'>
            <div className='flex items-center gap-8'>
                <Link href={'/'}>
                    <Image src='/logo.svg' alt='logo' width={100} height={100} />
                </Link>
                <div className='md:flex items-center gap-6 hidden'>
                    <h2 className='hover:scale-105 hover:text-primary cursor-pointer'>Home</h2>
                    <h2 className='hover:scale-105 hover:text-primary cursor-pointer'>Services</h2>
                    <h2 className='hover:scale-105 hover:text-primary cursor-pointer'>About Us</h2>
                </div>
            </div>

            <div>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        Get Started
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem><Link href={'/mybooking'}>My Booking</Link></DropdownMenuItem>
                        <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>


            </div>
        </div>
    )
}

export default Header