'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type ActiveLinkProps = {
    href: string;
    children: React.ReactNode;
}

export default function ActiveLink({ href, children } : ActiveLinkProps){
    const pathname = usePathname()
    const isActive = pathname === href;

    return (
        <>
            <Link href={href} className={`mx-3 px-2 text-yellow-600 text-lg font-medium hover:text-yellow-700 ${isActive ? 'border-b-4 border-yellow-600' : ''}`}>
                {children}
            </Link>
        </>
    )
};