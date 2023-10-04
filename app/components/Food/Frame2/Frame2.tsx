'use client'

import styles from '../../../styles/food.module.scss';
import Child1 from './Child/Child1';
import Paginate from '../../Paginate/Paginate';
import { useState } from 'react';

const Frame2 = () => {
    const [totalPage, setTotalPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    function handlePageClick(event: {selected: number}) {
        setCurrentPage(event.selected)
    }

    return (  
        <div className={styles.frame2__content}>
            <div className={styles.frame2__content__nav}>
                <h5 className={styles.frame2__content__nav__title}>Food menu</h5>
                <div className={styles.frame2__content__nav__menu}>
                    <div className={styles.frame2__content__nav__menu__item}>
                        <h6 className={styles['frame2__content__nav__menu__item--active']}>All Menus</h6>
                    </div>
                    <div className={styles.frame2__content__nav__menu__item}>
                        <h6 className={styles.frame2__content__nav__menu__item__name}>Breakfast</h6>
                    </div>
                    <div className={styles.frame2__content__nav__menu__item}>
                        <h6 className={styles.frame2__content__nav__menu__item__name}>Lunch</h6>
                    </div>
                    <div className={styles.frame2__content__nav__menu__item}>
                        <h6 className={styles.frame2__content__nav__menu__item__name}>Snack</h6>
                    </div>
                </div>
            </div>
            <div className={styles.frame2__content__menulist}>
                <Child1 />
            </div>
            <div className={styles.frame2__content__footer}>
                <p className={styles.frame2__content__footer__text}>Showing 1-5 from 100 data</p>
                <div className={styles.frame2__content__footer__paginate}>
                    <Paginate handlePageClick={handlePageClick} pageCount={3} currentPage={0}/>
                </div>
            </div>
        </div>
    );
}
 
export default Frame2;