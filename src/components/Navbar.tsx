import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='sticky top-0 left-0 shadow-md p-3 w-full flex items-center gap-3 justify-evenly h-[72px] z-50 bg-white'>
            <ul className="flex items-center gap-3 justify-evenly font-medium md:text-lg flex-1">
                <Image src="/logo.svg" alt="Logo" width={48} height={48} />
                <h1 className='font-semibold text-2xl'>Depok Kita</h1>
                <li>
                    <a href="#sosvent">
                        Social Event
                    </a>
                </li>
                <li>
                    <Link href="/">
                        Donasi
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        Artikel
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        Tentang Kami
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        Galeri
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar