import styles from '../../../../../styles/add.module.scss';

const Child1 = () => {
    return (  
        <div className={styles.frame2__content__child1}>
            <div className={styles.frame2__content__child1__nav}>
                <h5 className={styles.frame2__content__child1__nav__title}>Personal Details</h5>
            </div>
            <div className={styles.frame2__content__child1__body}>
                <div className={styles.frame2__content__child1__body__container}>
                    <div className={styles.frame2__content__child1__body__container__row}>
                        <label className={styles.frame2__content__child1__body__container__row__label} htmlFor="first_name">First Name *</label>
                        <input className={styles.frame2__content__child1__body__container__row__input} type="text" placeholder='Maria' />
                    </div>
                    <div className={styles.frame2__content__child1__body__container__row}>
                        <label className={styles.frame2__content__child1__body__container__row__label} htmlFor="email">Email *</label>
                        <input className={styles.frame2__content__child1__body__container__row__input} type="text" placeholder='Historia@mail.com' />
                    </div>
                    <div className={styles.frame2__content__child1__body__container__row}>
                        <label className={styles.frame2__content__child1__body__container__row__label} htmlFor="address">Address *</label>
                        <input className={styles[`frame2__content__child1__body__container__row__input--special`]} style={{height: "150px"}} type="text" placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' />
                    </div>
                    <div className={styles.frame2__content__child1__body__container__row}>
                        <label className={styles.frame2__content__child1__body__container__row__label} htmlFor="date">Date of Birth *</label>
                        <input className={styles.frame2__content__child1__body__container__row__input} type="text" placeholder='24 Februari 1997' />
                    </div>
                </div>
                <div className={styles.frame2__content__child1__body__container}>
                    <div className={styles.frame2__content__child1__body__container__row}>
                        <label className={styles.frame2__content__child1__body__container__row__label} htmlFor="last_name">Last Name *</label>
                        <input className={styles.frame2__content__child1__body__container__row__input} type="text" placeholder='William' />
                    </div>
                    <div className={styles.frame2__content__child1__body__container__row}>
                        <label className={styles.frame2__content__child1__body__container__row__label} htmlFor="phone">Phone *</label>
                        <input className={styles.frame2__content__child1__body__container__row__input} type="number" placeholder='+1234567890' />
                    </div>
                    <div className={styles.frame2__content__child1__body__container__row}>
                        <label className={styles.frame2__content__child1__body__container__row__label} htmlFor="avatar">Photo *</label>
                        <div className={styles.frame2__content__child1__body__container__avatar}>
                            Drag and drop or click here to select file
                        </div>
                    </div>
                    <div className={styles.frame2__content__child1__body__container__row}>
                        <label className={styles.frame2__content__child1__body__container__row__label} htmlFor="place">Place of Birth *</label>
                        <input className={styles.frame2__content__child1__body__container__row__input} type="text" placeholder='Jakarta, Indonesia' />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Child1;