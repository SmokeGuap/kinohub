import { render, screen } from '@testing-library/react';
import { FavoritesList } from '../ui/favoritesList';
import { movies } from '@/shared/mocks';

// Мокаем компонент Movie, чтобы не влезать в детали рендера
jest.mock('@/entities/Movie', () => ({
  Movie: ({ id, name }: { id: number; name: string }) => (
    <div data-testid='movie' data-id={id}>
      {name}
    </div>
  ),
}));

describe('FavoritesList', () => {
  beforeEach(() => {
    // Чистим localStorage перед каждым тестом
    localStorage.clear();
  });

  it('Рендер фильмов из localStorage', () => {
    localStorage.setItem('kinohub-favorites', JSON.stringify(movies));

    render(<FavoritesList />);

    const fakeMovies = screen.getAllByTestId('movie');
    expect(fakeMovies).toHaveLength(2);
    expect(screen.getByText('Movie One')).toBeInTheDocument();
    expect(screen.getByText('Movie Two')).toBeInTheDocument();
  });

  it('Не отображает фильмы, если localStorage пуст', () => {
    render(<FavoritesList />);
    expect(screen.queryByTestId('movie')).not.toBeInTheDocument();
  });
});
