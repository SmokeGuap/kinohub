import { FavoritesList } from '@/widgets/favoritesList';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KinoHub — Избранное',
  description: 'Ваши избранные',
};

export default function Favorites() {
  return <FavoritesList />;
}
