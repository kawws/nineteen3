// src/app/components/Header.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header>
      <Link href="/">
        <Image src="/NineTeen-logo-black.svg" className="logo" alt="Logo" width={130} height={50} />
      </Link>
      <div>
        <nav>
            <ul>
                <Link href="/projekt"><li className='header-item'>Tidigare projekt</li></Link>
                <Link href="/projekt"><li className='header-item'>Tekniker</li></Link>
                <Link href="/projekt"><li className='header-item'>Om oss</li></Link>
                <Link href="/contact"><li className='header-item'>Kontakt</li></Link>
            </ul>
        </nav>
        <ul className="social-media">
            <li className='header-item'>
            <a href="https://instagram.com/nineteen.production" target="_blank" rel="noopener noreferrer">
                <span>Instagram</span>
            </a>
            </li>
            <li className='header-item'>
            <a href="https://www.linkedin.com/company/nineteen-production/" target="_blank" rel="noopener noreferrer">
                <span>LinkedIn</span>
            </a>
            </li>
        </ul>
      </div>
    </header>
  );
}
