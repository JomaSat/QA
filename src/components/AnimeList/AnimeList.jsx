import React, { useEffect, useState } from "react";
import styles from "./AnimeList.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { Slider } from "../Slider/Slider";
import { Header } from "../Header/Header";

export const AnimeList = () => {
  const [animeList, setAnimeList] = useState([]);

  const fetchAnimeData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/anime");
      setAnimeList(response.data);
    } catch (error) {
      console.error("Ошибка запроса:", error);
    }
  };

  useEffect(() => {
    fetchAnimeData();
  }, []);

  return (
    <div>
      <Header />
      <Slider />
      <div>
        <h2 className={styles.anime__subtitle}>Приятного просмотра !</h2>
      </div>
      <div className={styles.anime__list}>
        {animeList.map((anime) => (
            <Link key={anime.id} to={`/anime/${anime.id}`}>
            <div className={styles.anime__card}>
              <img
                src={anime.img}
                alt={anime.name}
                className={styles.anime__imag}
              />
              <h3 className={styles.anime__title}>{anime.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
