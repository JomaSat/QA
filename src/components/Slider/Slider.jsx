import React from 'react';
import { Carousel } from 'antd';
import styles from './Slider.module.css'
const contentStyle = {
  width: '100hv',
  height: '100hv',
  color: '#fff',
};

export const Slider = () =>{

  
    return (
        <Carousel autoplay>
        <div>
          <div style={contentStyle} className={styles.imag_container}>
            <img src="https://static.crunchyroll.com/fms/landscape_large/94/png/8c566c3c-15e4-4c20-a224-174b0744eaf8.webp" alt="" className={styles.slider__imag}/>
            <div className={styles.image_content}>
            <img src="https://static.crunchyroll.com/fms/logo/85/png/c1465630-cbe5-45ac-8bcd-62d17d54073e.webp" alt=""  className={styles.imag_logo}/>
            <p className={styles.imag_text}>Юдзи Итадори — сильный юноша, который ведёт заурядную жизнь старшеклассника. Однажды, чтобы спасти друзей от нападения проклятий, он съедает палец Двуликого призрака, который становится</p>
              </div> 
          </div>
        </div>
        <div>
        <div style={contentStyle} className={styles.imag_container}>
            <img src="https://static.crunchyroll.com/fms/landscape_large/94/png/0f64543f-c57d-4271-9750-8e84ddc3aa9d.webp" alt="" className={styles.slider__imag}/>
            <div className={styles.image_content}>
            <img src="https://static.crunchyroll.com/fms/logo/85/png/09175a8c-9ab2-4466-8dd9-406285e3e0a4.webp" alt=""  className={styles.imag_logo}/>
            <p className={styles.imag_text}>Эпоха Тайсё. Ещё с древних времён ходят слухи, что в лесу обитают демоны, которые питаются людьми и выискивают по ночам новых жертв. Однажды Тандзиро Камадо уходит в соседний город, чтобы продать</p>
              </div> 
          </div>
        </div>
        <div className={styles.slider__container }>
          <div style={contentStyle}>
          <img src="https://a.storyblok.com/f/178900/1600x900/769b61213a/q3-2023-social-announce-16x9_ru.png/m/1200x0/filters:quality(95)format(webp)" alt="" className={styles.slider__imag}/>
          </div>
        </div>
        <div>
        <div style={contentStyle} className={styles.imag_container}>
            <img src="https://static.crunchyroll.com/fms/landscape_large/94/png/708d0801-9fb4-4bd2-8301-005f29e5f95c.webp" alt="" className={styles.slider__imag}/>
            <div className={styles.image_content}>
            <img src="https://static.crunchyroll.com/fms/logo/85/png/a90be63b-d5a1-4981-ae04-9877d71bc006.webp" alt=""  className={styles.imag_logo}/>
            <p className={styles.imag_text}>Mushoku Tensei: Перерождение безработного</p>
              </div> 
          </div>
        </div>
      </Carousel>
    );
  };
