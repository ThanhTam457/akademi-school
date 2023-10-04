import styles from "../../styles/menu.module.scss"
import MenuList from './MenuList';

const Menu = () => {
    return ( 
        <div className={styles.menu}>
            <div className={styles.menu__leftMenu}>
                <div className={styles.menu__leftMenu__item}>
                    <div className={styles.menu__leftMenu__item__logo}>
                        A
                    </div>
                    <div className={styles.menu__leftMenu__item__name}>
                        AKADEMI
                    </div>
                </div>
                <div className={styles.menu__leftMenu__list}>
                    <MenuList/>
                </div>
                <div className={styles.menu__leftMenu__description}>
                    <div className={styles.menu__leftMenu__description__akademi}>
                        Akademi - School Admission Dashboard
                    </div>
                    <div className={styles.menu__leftMenu__description__author}>
                        Made with ♥ by Peterdraw
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Menu;