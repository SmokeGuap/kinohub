import Link from 'next/link';

import Logo from '@/assets/icons/logo.svg';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className=''>
      <div className='sm:flex sm:items-center sm:justify-between'>
        <Link
          href='/'
          className='flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse'
        >
          <Logo />
          <span className='self-center text-2xl font-semibold whitespace-nowrap'>
            KinoHub
          </span>
        </Link>
        <ul className='flex flex-wrap items-center mb-6 sm:mb-0'>
          <li>
            <Link href='#' className='me-4 md:me-6'>
              О нас
            </Link>
          </li>
          <li>
            <Link href='#' className='me-4 md:me-6'>
              Политика конфиденциальности
            </Link>
          </li>
          <li>
            <Link href='#' className='me-4 md:me-6'>
              Лицензирование
            </Link>
          </li>
          <li>
            <Link href='#' className=''>
              Контакты
            </Link>
          </li>
        </ul>
      </div>
      <hr className='my-6 border-color2 sm:mx-auto lg:my-8' />
      <span className='block sm:text-center'>
        © {year}{' '}
        <Link href='/' className=''>
          KinoHub™
        </Link>
        . Все права защищены.
      </span>
    </footer>
  );
};
