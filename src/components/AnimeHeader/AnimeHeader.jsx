import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./AnimeHeader.module.css";

export const AnimeHeader = () => {
  const location = useLocation();

  return (
    <header>
      <div className="container">
        <div className={styles.header}>
          <Link to='/anime' className={styles.header__title}>AnimeNetWatch</Link>
          <nav className={styles.header__list}>
            <Link className={styles.header_nav} to="/">Главная</Link>
            <Link className={styles.header_nav} to="/anime?genre=Комедия">Комедия</Link>
            <Link className={styles.header_nav} to="/anime?genre=Боевик">Боевик</Link>
            <Link className={styles.header_nav} to="/anime?genre=Экшен">Экшен</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};






