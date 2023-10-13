import styles from '../../../../../styles/add.module.scss';

const Child1 = () => {
    return (  
        <div className={styles.frame2__content__child1}>
            <div className={styles.frame2__content__child1__nav}>
                <h5 className={styles.frame2__content__child1__nav__title}>Student Details</h5>
            </div>
            <div className={styles.frame2__content__child1__body}>
                <div className={styles.frame2__content__child1__body__container__container1}>
                    <label className={styles.frame2__content__child1__body__container__row__label} htmlFor="avatar">Photo *</label>
                    <div className={styles.frame2__content__child1__body__container__avatar}>
                        Drag and drop or click here to select file
                    </div>
                </div>
                <div className={styles.frame2__content__child1__body__container__container2}>
                    <div className={styles.frame2__content__child1__body__container__row}>
                        <label className={styles.frame2__content__child1__body__container__row__label} htmlFor="first_name">First Name *</label>
                        <input className={styles.frame2__content__child1__body__container__row__input} type="text" placeholder='Samantha' />
                    </div>
                    <div className={styles.frame2__content__child1__body__container__row}>
                        <label className={styles.frame2__content__child1__body__container__row__label} htmlFor="date_place">Date & Place of Birth *</label>
                        <div className={styles.frame2__content__child1__body__container__row__inputs}>
                            <input className={styles.frame2__content__child1__body__container__row__input} style={{flex: "auto"}} type="text" placeholder='24 Februari 1997' />
                            <input className={styles.frame2__content__child1__body__container__row__input} style={{flex: "auto"}} type="text" placeholder='Jakarta' />
                        </div>
                    </div>
                    <div className={styles.frame2__content__child1__body__container__row}>
                        <label className={styles.frame2__content__child1__body__container__row__label} htmlFor="email">Email *</label>
                        <input className={styles.frame2__content__child1__body__container__row__input} type="text" placeholder='william@mail.com' />
                    </div>
                    <div className={styles.frame2__content__child1__body__container__row}>
                        <label className={styles.frame2__content__child1__body__container__row__label} htmlFor="address">Address *</label>
                        <input className={styles[`frame2__content__child1__body__container__row__input--special`]} style={{height: "150px"}} type="text" placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' />
                    </div>
                </div>
                <div className={styles.frame2__content__child1__body__container__container2}>
                    <div className={styles.frame2__content__child1__body__container__row}>
                        <label className={styles.frame2__content__child1__body__container__row__label} htmlFor="last_name">Last Name *</label>
                        <input className={styles.frame2__content__child1__body__container__row__input} type="text" placeholder='William' />
                    </div>
                    <div className={styles.frame2__content__child1__body__container__row}>
                        <label className={styles.frame2__content__child1__body__container__row__label} htmlFor="parent_name">Parent Name *</label>
                        <input className={styles.frame2__content__child1__body__container__row__input} type="text" placeholder='Mana William' />
                    </div>
                    <div className={styles.frame2__content__child1__body__container__row}>
                        <label className={styles.frame2__content__child1__body__container__row__label}htmlFor="phone">Phone *</label>
                        <input className={styles.frame2__content__child1__body__container__row__input} type="number" placeholder='+1234567890' />
                    </div>

                </div>
            </div>
        </div>
    );
}
 
export default Child1;