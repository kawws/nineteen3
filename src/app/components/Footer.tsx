'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <footer>
      <div>
        <span>@ NINETEEN PRODUCTION 2024 | ORG NR. 559423-5631</span>
      </div>
    </footer>
  );
}
