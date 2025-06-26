import { Button } from '@/shared/ui/button';

type Props = {
  currentPage: number;
  totalPages: number;
  pages: number[];
  setPage: (newPage: number) => void;
};

export const Pagination = ({
  currentPage,
  totalPages,
  pages,
  setPage,
}: Props) => {
  return (
    <section className='mt-10 flex justify-center items-center gap-2'>
      <Button
        onClick={() => setPage(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
      >
        «
      </Button>

      {currentPage > 3 && (
        <>
          <Button
            className='bg-foreground text-background'
            onClick={() => setPage(1)}
          >
            1
          </Button>
          {currentPage > 4 && <span className='px-2'>...</span>}
        </>
      )}

      {pages.map((pageNum) => (
        <Button
          key={pageNum}
          onClick={() => setPage(pageNum)}
          className={`${
            pageNum === currentPage
              ? '!bg-color1 text-background font-bold'
              : 'bg-foreground text-background'
          }`}
        >
          {pageNum}
        </Button>
      ))}

      {currentPage < totalPages - 2 && (
        <>
          {currentPage < totalPages - 3 && <span className='px-2'>...</span>}
          <Button
            className='bg-foreground text-background'
            onClick={() => setPage(totalPages)}
          >
            {totalPages}
          </Button>
        </>
      )}

      <Button
        onClick={() => setPage(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
      >
        »
      </Button>
    </section>
  );
};
