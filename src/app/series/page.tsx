import Link from 'next/link';

export default function Films() {
  return (
    <article>
      <Link href={'/films'}>to films</Link>
    </article>
  );
}
