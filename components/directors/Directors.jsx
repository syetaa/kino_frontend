import styles from './Directors.module.css';

export default function Directors() {
    return (
        <div className={styles.directors}>
            <h2>Режиссеры</h2>
            <div className={styles['directors-grid']}>
                <div className={styles.director}>
                    <img src="#" alt="Режиссер 1" />
                    <button>Смотреть</button>
                </div>
                <div className={styles.director}>
                    <img src="#" alt="Режиссер 2" />
                    <button>Смотреть</button>
                </div>
                <div className={styles.director}>
                    <img src="#" alt="Режиссер 3" />
                    <button>Смотреть</button>
                </div>
                <div className={styles.director}>
                    <img src="#" alt="Режиссер 4" />
                    <button>Смотреть</button>
                </div>
                <div className={styles.director}>
                    <img src="#" alt="Режиссер 5" />
                    <button>Смотреть</button>
                </div>
                <div className={styles.director}>
                    <img src="#" alt="Режиссер 6" />
                    <button>Смотреть</button>
                </div>
            </div>
        </div>
    );
}