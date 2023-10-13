import styles from '../../../../../styles/add.module.scss';

const Child2 = () => {
    return (  
        <div className={styles.frame2__content__child2}>
            <div className={styles.frame2__content__child2__nav}>
                <h5 className={styles.frame2__content__child2__nav__title}>Education</h5>
            </div>
            <div className={styles.frame2__content__child2__body}>
                <div className={styles.frame2__content__child2__body__container}>
                    <div className={styles.frame2__content__child2__body__container__row}>
                        <label className={styles.frame2__content__child2__body__container__row__label} htmlFor="university">University *</label>
                        <input className={styles.frame2__content__child2__body__container__row__input} type="text" placeholder='University Akademi Historia' />
                    </div>
                    <div className={styles.frame2__content__child2__body__container__row}>
                        <label className={styles.frame2__content__child2__body__container__row__label} htmlFor="start_end_date">Start & End Date *</label>
                        <div className={styles.frame2__content__child2__body__container__row__inputs}>
                            <input className={styles.frame2__content__child2__body__container__row__input} type="text" placeholder='September 2013' />
                            <input className={styles.frame2__content__child2__body__container__row__input} type="text" placeholder='September 2017' />
                        </div>
                    </div>
                </div>
                <div className={styles.frame2__content__child2__body__container}>
                    <div className={styles.frame2__content__child2__body__container__row}>
                        <label className={styles.frame2__content__child2__body__container__row__label} htmlFor="degree">Degree *</label>
                        <input className={styles.frame2__content__child2__body__container__row__input} type="text" placeholder='History Major' />
                    </div>
                    <div className={styles.frame2__content__child2__body__container__row}>
                        <label className={styles.frame2__content__child2__body__container__row__label} htmlFor="city">City *</label>
                        <input className={styles.frame2__content__child2__body__container__row__input} type="text" placeholder='Yogyakarta, Indonesia' />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Child2;