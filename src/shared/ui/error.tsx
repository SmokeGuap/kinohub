import { Button } from '@/shared/ui/button';
import Link from 'next/link';

type Props = {
  message: string;
  status: number | undefined;
};

export default function Error({ message, status }: Props) {
  return (
    <main className='grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8'>
      <div className='text-center'>
        <p className='text-base font-semibold text-color2'>{status}</p>
        <h1 className='mt-4 text-5xl font-semibold tracking-tight text-balance sm:text-7xl'>
          Ошибка запроса
        </h1>
        <p className='mt-6 text-lg font-medium text-pretty text-color2 sm:text-xl/8'>
          {message}
        </p>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <Link href='/'>
            <Button>Вернуться на главную</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
