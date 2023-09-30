import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.title}>
            <Link to='/anime' className={styles.header__title}>AnimeNetWatch</Link>
          </div>
          <nav className={styles.header__list}>
            <Link to='/anime'>Аниме</Link>
            <Link to="/search" className={styles.search__btn}>
               <FaSearch className={styles.search} />
           </Link>          
           </nav>
        </div>
      </div>
    </header>
  );
};
