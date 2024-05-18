'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function NavigationBar() {
    const pathname = usePathname();

    return (
        <nav className="flex">
            <ul className="flex w-1/2 justify-between">
                <li>
                    <Link href="/marketplace" className={pathname == "/marketplace" && "font-bold underline"}>
                        <p>
                            Marketplace
                        </p>
                    </Link>
                </li>
                <li>
                    <Link href="/apartments" className={pathname == "/apartments" && "font-bold underline"}>
                        <p>
                            Apartments
                        </p>
                    </Link>
                </li>
                <li>
                    <Link href="/roomates" className={pathname == "/roomates" && "font-bold underline"}>
                        <p>
                            Roomates
                        </p>
                    </Link>
                </li>
            </ul>

            <ul className="flex w-1/2 justify-end gap-12">
                <li>
                    <Link href="/messages" className={pathname == "/messages" && "font-bold underline"}>
                        <p>
                            Messages
                        </p>
                    </Link>
                </li>
                <li>
                    <Link href="/account" className={pathname == "/account" && "font-bold underline"}>
                        <p>
                            Sign-in
                        </p>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
