import React from 'react'
import styles from './Footer.module.css'
import { BiLogoFacebookCircle, BiLogoGithub, BiLogoInstagram } from "react-icons/bi";


export const Footer = () => {



  return (
    <footer>
        <div className="container">
                <div className={styles.footer}>
                    <div>
                        <p className={styles.copyright}>© AnimeNetWatch, LLC</p>
                    </div>
                    <div>
                        <ul className={styles.icon_list}>
                            <li><a href="https://instagram.com/stbkv.joma?igshid=NGVhN2U2NjQ0Yg==" target="_blank"><BiLogoInstagram  className={styles.footer_icon}/></a></li>
                            <li><a href="https://github.com/JomaSat" target="_blank"><BiLogoGithub  className={styles.footer_icon}/></a></li>
                            <li><a href="https://ru-ru.facebook.com/" target="_blank"><BiLogoFacebookCircle className={styles.footer_icon} /></a></li>
                        </ul>
                    </div>
                </div>
        </div>
    </footer>
  )
}
