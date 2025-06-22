'use client';

import Link from 'next/link';
import { useState } from 'react';

import Close from '@/assets/icons/close.svg';
import MenuIcon from '@/assets/icons/menu.svg';
import { Button } from '@/shared/ui/button';
import { Search } from '@/widgets/header/ui/search';

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='block lg:hidden'>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className='rounded-sm bg-color3 p-3'
      >
        <MenuIcon />
      </Button>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className='fixed inset-0 z-1001 flex'
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className='ml-auto w-64 h-full bg-color2 shadow-lg p-4 relative'
          >
            <Button
              onClick={() => setIsOpen(false)}
              className='absolute top-6 right-6'
            >
              <Close />
            </Button>
            <Search isMobile />
            <nav className='mt-6 sm:mt-12 flex flex-col space-y-4'>
              <Link href='/'>Главная</Link>
              <Link href='#'>Фильмы</Link>
              <Link href='#'>Сериалы</Link>
              <Link href='#'>Мультфильмы</Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};
