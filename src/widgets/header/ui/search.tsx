import SearchIcon from '@/assets/icons/search.svg';

type Props = {
  isMobile?: boolean;
};

export const Search = ({ isMobile }: Props) => {
  return (
    <form className={isMobile ? 'mt-12 block sm:hidden' : 'hidden sm:block'}>
      <label htmlFor='search' className='sr-only'>
        Search
      </label>
      <div className='relative flex'>
        <div className='absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none'>
          <SearchIcon />
        </div>
        <input
          type='search'
          id='search'
          className='block p-2 ps-10 w-full border rounded-lg bg-background border-color2 text-color3 placeholder-foreground'
          placeholder='Поиск...'
          required
        />
      </div>
    </form>
  );
};
