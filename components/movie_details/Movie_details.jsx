'use client';
import { useState } from 'react';
import { addFavoriteMovie } from '@/api/movies/movies'; // Импортируем функцию для добавления в избранное
import { useUser } from '@/context/UserContext'; // Импортируем хук для доступа к контексту пользователя

const MovieDetails = ({ movie }) => {
  const { user } = useUser(); // Получаем данные о пользователе из контекста
  const [isFavorite, setIsFavorite] = useState(false); // Состояние для отслеживания добавлен ли фильм в избранное

  const handleAddToFavorites = async () => {
    if (!user) {
      alert('Пожалуйста, войдите в систему'); // Если пользователь не авторизован, выводим предупреждение
      return;
    }

    try {
      const response = await addFavoriteMovie(movie); // Передаем только объект фильма
      if (response) {
        setIsFavorite(true); // Обновляем состояние, если фильм добавлен в избранное
      }
    } catch (error) {
      console.error('Ошибка при добавлении фильма в избранное:', error);
    }
  };

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.year}</p>
      <img src={movie.poster} alt={movie.title} />
      <p>{movie.description || 'Описание отсутствует'}</p>
      <button onClick={handleAddToFavorites}>
        {isFavorite ? 'Добавлено в избранное' : 'Добавить в избранное'}
      </button>
      <p>Жанр: {movie.genre || 'Неизвестно'}</p>
      <p>Режиссер: {movie.director || 'Неизвестно'}</p>
      <p>Рейтинг: {movie.rating || 'Неизвестно'}</p>
    </div>
  );
};

export default MovieDetails;
