'use client';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

type ActiveLinkProps = LinkProps & {
    href: string;
    children: React.ReactNode;
}

export default function ActiveLink({ href, children, ...rest } : ActiveLinkProps){
    const pathname = usePathname()
    const isActive = pathname === href.toString();

    return (
        <>
            <Link
                href={href}
                className={`mx-3 px-2 text-yellow-600 text-lg font-medium hover:text-yellow-700 ${isActive ? 'border-b-4 border-yellow-600' : ''}`}
                { ...rest }
            >
                {children}
            </Link>
        </>
    )
};