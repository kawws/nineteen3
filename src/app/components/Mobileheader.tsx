'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Mobileheader() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className='mobile-header'>
      <div>
        <nav>
          <ul>
            <li className={`header-item ${isActive('/projekt') ? 'active' : ''}`}>
              <Link href="/projekt">Projekt</Link>
            </li>
            <li className={`header-item ${isActive('/techniques') ? 'active' : ''}`}>
              <Link href="/techniques">Tekniker</Link>
            </li>
          </ul>
        </nav>
        <Link href="/">
                <Image src="/nineteen-logo-black.svg" className="logo" alt="Logo" width={120} height={50} />
        </Link>
        <nav>
          <ul>
            <li className={`header-item ${isActive('/about') ? 'active' : ''}`}>
              <Link href="/about">Om oss</Link>
            </li>
            <li className={`header-item ${isActive('/contact') ? 'active' : ''}`}>
              <Link href="/contact">Kontakt</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
