import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import * as React from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

import LanguageButton from '@/components/buttons/LanguageButton';

type ThemeButtonProps = React.ComponentPropsWithoutRef<'button'>;

export default function ThemeButton({ className, ...rest }: ThemeButtonProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);
  const { locales } = useRouter();

  if (locales === undefined) {
    // Handle the case when 'items' is undefined, e.g., return an empty state
    return <p>No items available.</p>;
  }

  return (
    <div>
      <button
        className={clsx(
          'rounded-md p-2 focus:outline-none md:p-2.5',
          'border dark:border-gray-600',
          'hover:border-primary-300 hover:text-primary-300 dark:hover:border-primary-300 dark:hover:text-primary-300',
          'focus-visible:border-primary-300 focus-visible:text-primary-300 dark:focus-visible:border-primary-300 dark:focus-visible:text-primary-300',
          'text-lg md:text-xl',
          className
        )}
        {...rest}
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {mounted ? (
          <>{theme === 'light' ? <FiMoon /> : <FiSun />}</>
        ) : (
          <FiSun />
        )}
      </button>
      <LanguageButton locales={locales} />
    </div>
  );
}
