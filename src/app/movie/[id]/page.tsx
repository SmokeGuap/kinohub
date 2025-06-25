import { Player } from '@/entities/Player';
import { MovieAbout } from '@/widgets/movieAbout';
import { getMovie } from '@/entities/Movie/api/getMovie';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Films({ params }: Props) {
  const { id } = await params;

  const data = await getMovie(id);

  return (
    <article className='rounded-lg border border-color2'>
      <div className='p-4'>
        <MovieAbout movie={data} />
        <div className='mt-6'>
          <div className='aspect-video bg-foreground rounded-lg overflow-hidden'>
            <Player id={id} />
          </div>
        </div>
      </div>
    </article>
  );
}
