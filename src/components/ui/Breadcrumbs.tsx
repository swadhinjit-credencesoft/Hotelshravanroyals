'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs() {
  const pathname = usePathname();
  if (!pathname || pathname === '/') return null;

  // Pages with dark CinematicHeroes where we need light text
  const darkHeroPages = ['/about', '/rooms', '/dining', '/experiences', '/events', '/gallery', '/blog'];
  const isDarkHero = darkHeroPages.some(page => pathname.startsWith(page));

  const paths = pathname.split('/').filter((path) => path);
  const breadcrumbs = paths.map((path, index) => {
    const href = `/${paths.slice(0, index + 1).join('/')}`;
    const label = path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ');
    return { label, href };
  });

  const textColorClass = isDarkHero ? 'text-ivory/80' : 'text-forest/60';
  const activeColorClass = isDarkHero ? 'text-gold' : 'text-gold';

  return (
    <nav className="absolute top-32 left-0 right-0 z-40 flex px-6 md:px-10 py-4 max-w-[1600px] mx-auto pointer-events-none" aria-label="Breadcrumb">
      <ol className={`flex items-center space-x-2 font-sans text-[10px] uppercase tracking-widest ${textColorClass} pointer-events-auto`}>
        <li className="flex items-center">
          <Link href="/" className="hover:text-gold transition-colors flex items-center gap-1">
            <Home size={12} /> Home
          </Link>
        </li>
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.href} className="flex items-center space-x-2">
            <ChevronRight size={10} className={isDarkHero ? "text-gold/40" : "text-gold/60"} />
            {index === breadcrumbs.length - 1 ? (
              <span className={`${activeColorClass} font-bold`}>{crumb.label}</span>
            ) : (
              <Link href={crumb.href} className="hover:text-gold transition-colors">
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>

    </nav>
  );
}
