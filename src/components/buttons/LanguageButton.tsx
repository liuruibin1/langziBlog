import Link from 'next/link';
import * as React from 'react';
import { useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

function LanguageIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      width='1em'
      height='1em'
      className={className}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802'
      />
    </svg>
  );
}

export default function LanguageButton(props: { locales: string[] }) {
  const [visible, setVisivle] = useState(false);
  const open = () => setVisivle(true);
  const close = () => setVisivle(false);
  const ref = useRef<HTMLUListElement>(null);
  useOnClickOutside(ref, close);

  return (
    <div className='relative inline-block'>
      <button
        className='rounded-md border p-2 text-lg hover:border-primary-300 hover:text-primary-300 focus:outline-none focus-visible:border-primary-300 focus-visible:text-primary-300 dark:border-gray-600 dark:hover:border-primary-300 dark:hover:text-primary-300 dark:focus-visible:border-primary-300 dark:focus-visible:text-primary-300 md:p-2.5 md:text-xl'
        onClick={open}
      >
        <LanguageIcon />
      </button>

      <ul
        ref={ref}
        id='list'
        className={
          visible
            ? 'absolute left-0 top-full rounded-md border p-2 hover:border-primary-300 hover:text-primary-300 focus:outline-none focus-visible:border-primary-300 focus-visible:text-primary-300 dark:border-gray-600 dark:hover:border-primary-300 dark:hover:text-primary-300 dark:focus-visible:border-primary-300 dark:focus-visible:text-primary-300 md:p-2.5'
            : 'hidden'
        }
      >
        {props.locales.map((locale) => (
          <li key={locale}>
            <Link
              href='/'
              locale={locale}
              onClick={close}
              className='text-nowrap inline-block w-full'
            >
              {locale}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
