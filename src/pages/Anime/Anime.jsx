import React, { useEffect, useState } from "react";
import styles from "./Anime.module.css";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { AnimeHeader } from "../../components/AnimeHeader/AnimeHeader";

export const Anime = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedGenre = queryParams.get("genre");

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
      <AnimeHeader />
      <main>
      <div className="container">
      <div className={styles.anime__list}>
        {animeList
          .filter((anime) => !selectedGenre || (anime.genres && anime.genres.includes(selectedGenre)))
          .map((anime) => (
            <Link key={anime.id} to={`/anime/${anime.id}`}>
              <div className={[styles.anime__card]}>
                <img src={anime.img} alt={anime.name} className={styles.anime__imag} />
                <h3 className={styles.anime__title}>{anime.name}</h3>
              </div>
            </Link>
          ))}
      </div>
      </div>
      </main>
    </div>
  );
  
};
