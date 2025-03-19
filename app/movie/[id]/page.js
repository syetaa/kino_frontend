'use client'

import { useEffect, useState } from "react";
import MovieDetails from "@/components/movie_details/Movie_details"; // Импортируем MovieDetails
import { getMovieDetails } from "@/api/movies/movies"; // Импортируем getMovieDetails из api
import { useParams } from "next/navigation"; // Импортируем useParams для получения параметров маршрута

const MoviePage = () => {
  const [movie, setMovie] = useState(null); // Хранение данных о фильме
  const [error, setError] = useState(null); // Хранение ошибок

  // Получаем ID фильма с помощью хука useParams
  const { id } = useParams();

  // Запрашиваем данные о фильме при загрузке компонента
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movieData = await getMovieDetails(id); // Используем метод из api
        if (!movieData) {
          throw new Error("Ошибка при загрузке данных фильма");
        }
        setMovie(movieData); // Сохраняем данные фильма
      } catch (error) {
        setError(error.message); // Обрабатываем ошибку
      }
    };

    fetchMovie();
  }, [id]);

  if (error) return <p>{error}</p>; // Если ошибка, показываем сообщение
  if (!movie) return <p>Загрузка...</p>; // Если фильм не загружен, показываем "Загрузка"

  return (
    <div>
      <MovieDetails movie={movie} /> {/* Передаем данные фильма в MovieDetails */}
    </div>
  );
};

export default MoviePage;
