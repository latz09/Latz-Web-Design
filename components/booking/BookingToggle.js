'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const options = [
  { label: '📞 Call', href: '/book/call' },
  { label: '🎥 Video', href: '/book/video' },
  { label: '🤝 In-Person', href: '/book/in-person' },
];

export default function BookingToggle() {
  const pathname = usePathname();

  return (
    <div className="flex justify-center gap-2 mb-8 flex-wrap">
      {options.map(({ label, href }) => (
        <Link
          key={href}
          href={href}
          className={`px-4 py-2 rounded border text-sm font-medium transition uppercase tracking-wide ${
            pathname === href
              ? 'bg-dark text-light border-light/20'
              : 'bg-light text-dark border-light/20 hover:border-dark'
          }`}
        >
          {label}
        </Link>
      ))}
    </div>
  );
}
