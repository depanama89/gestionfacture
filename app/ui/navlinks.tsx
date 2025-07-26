"use client"
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const links = [
  {
    icon: HomeIcon,
    name: "Home",
    href: "/dashboard",
  },
  {
    icon: DocumentDuplicateIcon,
    name: "Invoice",
    href: "/dashboard/invoices",
  },
  {
    icon: UserGroupIcon,
    name: "Customer",
    href: "/dashboard/customers",
  },
];
export default function NavLinks(){
    const pathName=usePathname()
    return(
        <div className='flex md:flex-col'>
        {
            links.map((link)=>{
                const LinkIcon=link.icon
                return(
                
              <Link key={link.name} href={link.href} className={clsx('flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium',{
                'bg-sky-100 text-blue-600':pathName===link.href
              })}>
                <LinkIcon className='w-6'/>
               <span className='hidden md:block'> {link.name}</span>
              </Link>  
            )
            })
        }
        </div>
    )
}
