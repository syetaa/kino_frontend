import axios from "axios";

const protocol = process.env.NEXT_PUBLIC_BACKEND_PROTOCOL || "http";
const host = process.env.NEXT_PUBLIC_BACKEND_HOST || "localhost";
const port = process.env.NEXT_PUBLIC_BACKEND_PORT || "8000";
const BASE_URL = `${protocol}://${host}:${port}`;

// Получение популярных фильмов
export async function getTrendingMovies() {
    try {
        const response = await fetch(`${BASE_URL}/movies/movies/popular`);
        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Ошибка при получении популярных фильмов:", error);
        return [];
    }
}

// Получение избранных фильмов
export const getFavoriteMovies = async (userId) => {
    try {
        const response = await fetch(`${BASE_URL}/movies/movies/favorite`);
        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Ошибка при получении избранных фильмов:", error);
        return [];
    }
};

// Получение деталей фильма
export const getMovieDetails = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/movies/${id}`);
        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Ошибка при получении деталей фильма:", error);
        return null;
    }
};

// Добавление фильма в избранное
export const addFavoriteMovie = async (userId, movie) => {
    try {
        const response = await fetch(`${BASE_URL}/movies/movies/favorite`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user_id: userId, movie }),
        });
        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Ошибка при добавлении фильма в избранное:", error);
        return null;
    }
};

// Получение информации о фильме по ID

