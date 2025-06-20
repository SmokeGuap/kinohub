'use client';

import Link from 'next/link';
import { useState } from 'react';

import Logo from '@/assets/icons/logo.svg';
import Search from '@/assets/icons/search.svg';
import Close from '@/assets/icons/close.svg';
import Menu from '@/assets/icons/menu.svg';

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
              <Link href='#'>Films</Link>
            </li>

            <li>
              <Link href='#'>Series</Link>
            </li>

            <li>
              <Link href='#'>Cartoons</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className='sm:flex sm:gap-4'>
        <form className='mx-auto'>
          <label htmlFor='search' className='sr-only'>
            Search
          </label>
          <div className=' h-[44px] relative flex max-[450px]:w-[230px] md:w-sm lg:w-xl'>
            <div className='absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none'>
              <Search />
            </div>
            <input
              type='search'
              id='search'
              className='block w-full p-2 ps-10 border rounded-tl-lg rounded-bl-lg bg-background border-color2 border-r-0 placeholder-foreground'
              placeholder='Search...'
              required
            />
            <button
              type='submit'
              className='bg-color2 hover:bg-color3 rounded-tr-lg rounded-br-lg px-4 py-1'
            >
              Search
            </button>
          </div>
        </form>
      </div>

      <div className='block md:hidden'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='rounded-sm bg-color3 p-3'
        >
          <Menu />
        </button>

        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className='fixed inset-0 z-2 flex'
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className='ml-auto w-64 h-full bg-color1 shadow-lg p-4 relative z-2'
            >
              <button
                onClick={() => setIsOpen(false)}
                className='absolute top-6 right-6'
              >
                <Close />
              </button>

              <nav className='mt-12 flex flex-col space-y-4'>
                <Link href='#'>Films</Link>
                <Link href='#'>Series</Link>
                <Link href='#'>Cartoons</Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
