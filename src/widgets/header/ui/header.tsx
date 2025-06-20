'use client';

import Link from 'next/link';
import { useState } from 'react';

import Logo from '@/assets/icons/logo.svg';
import Search from '@/assets/icons/search.svg';
import Close from '@/assets/icons/close.svg';
import Menu from '@/assets/icons/menu.svg';
import { Button } from '@/shared/ui/button';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='flex h-16 items-center justify-between'>
      <div className='md:flex md:items-center md:gap-12'>
        <Link className='block' href='/'>
          <Logo />
        </Link>
      </div>

      <div className='hidden md:block'>
        <nav aria-label='Global'>
          <ul className='flex items-center gap-6'>
            <li>
              <Link href='#'>Фильмы</Link>
            </li>

            <li>
              <Link href='#'>Сериалы</Link>
            </li>

            <li>
              <Link href='#'>Мультфильмы</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className='sm:flex sm:gap-4'>
        <form className='mx-auto'>
          <label htmlFor='search' className='sr-only'>
            Search
          </label>
          <div className='relative flex max-[450px]:w-[230px] md:w-sm lg:w-xl'>
            <div className='absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none'>
              <Search />
            </div>
            <input
              type='search'
              id='search'
              className='block w-full p-2 ps-10 border rounded-tl-lg rounded-bl-lg bg-background border-color2 border-r-0 placeholder-foreground'
              placeholder='Поиск...'
              required
            />
            <Button className='rounded-tl-none rounded-bl-none' type='submit'>
              Искать
            </Button>
          </div>
        </form>
      </div>

      <div className='block md:hidden'>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className='rounded-sm bg-color3 p-3'
        >
          <Menu />
        </Button>

        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className='fixed inset-0 z-2 flex'
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className='ml-auto w-64 h-full bg-color1 shadow-lg p-4 relative z-2'
            >
              <Button
                onClick={() => setIsOpen(false)}
                className='absolute top-6 right-6'
              >
                <Close />
              </Button>

              <nav className='mt-12 flex flex-col space-y-4'>
                <Link href='#'>Фильмы</Link>
                <Link href='#'>Сериалы</Link>
                <Link href='#'>Мультфильмы</Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
