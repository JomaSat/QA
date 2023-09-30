import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./SearchPage.module.css";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { FaSearch } from "react-icons/fa";

export const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [error, setError] = useState(null);
  const apiUrl = "http://localhost:8080/anime";

  useEffect(() => {
    const fetchData = async () => {
      setError(null);

      try {
        const response = await axios.get(apiUrl, {
          params: { q: searchTerm.toLowerCase() },
        });
        setSearchResults(response.data);
      } catch (error) {
        setError(
          "Произошла ошибка при загрузке данных. Пожалуйста, попробуйте еще раз."
        );
      }
    };

    if (buttonClicked && searchTerm.trim() !== "") {
      fetchData();
    }
  }, [searchTerm, buttonClicked]);

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
  };

  const handleButtonClick = () => {
    setButtonClicked(true);
  };

  return (
    <div>
      <Header />

      <div className={styles.main}>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Поиск..."
            className={styles.search_input}
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button onClick={handleButtonClick} className={styles.search_btn}>
            <FaSearch />
          </button>
        </div>

        <div>
          {error ? (
            <p>{error}</p>
          ) : buttonClicked && searchTerm.trim() !== "" ? (
            searchResults.length === 0 ? (
              <p>Такого аниме не найдено</p>
            ) : (
              <div className={styles.anime__list}>
              {searchResults.map((anime) => (
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
            )
          ) : null}
        </div>
      </div>
    </div>
  );
};
