import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
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
export default function SideNav(){
    return(
        <>
        {
            links.map((link)=>(
              <Link key={link.name} href={link.href}>
                {link.name}
              </Link>  
            ))
        }
        </>
    )
}
