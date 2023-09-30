import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import styles from "./AnimeDetail.module.css";
import { Header } from "../../components/Header/Header";
export const AnimeDetail = () => {
  const [animeData, setAnimeData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchAnimeData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/anime/${id}`);
        setAnimeData(response.data);
      } catch (error) {
        console.error("Ошибка запроса:", error);
      }
    };

    fetchAnimeData();
  }, [id]);

  if (!animeData) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Header />
      <div className="container">
        <div className={styles.AnimeDetail}>
          <div className={styles.AnimeDetail_content}>
            <div className={styles.detail_info}>
              <h1 className={styles.AnimeDetail__title}>{animeData.name}</h1>
              <p className={styles.AnimeDetail__description}>
                {animeData.description}
              </p>
              <div className={styles.genres_btn}>
                <a href="#" className={styles.AnimeDetail__genres}>
                  {animeData.genres}
                </a>
              </div>
            </div>

            <div>
              <img src={animeData.img} alt="" className={styles.imag_detail} />
            </div>
          </div>

          <video controls width="100%" height="300" poster={animeData.img_detail}>
            <source src={animeData.video} type="video/mp4" />
          </video>

        </div>
      </div>
    </div>
  );
};
