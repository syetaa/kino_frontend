"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getMovieDetails } from "@/api/movies/moviess";
import styles from "./page.module.css";

const MoviePage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        if (id) {
            getMovieDetails(id).then(setMovie);
        }
    }, [id]);

    if (!movie) return <div className={styles.loading}>Загрузка...</div>;

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{movie.title} ({movie.year})</h1>
            <img className={styles.poster} src={movie.poster_url} alt={movie.title} />
            {movie.description && <p className={styles.description}>{movie.description}</p>}
        </div>
    );
};

export default MoviePage;
