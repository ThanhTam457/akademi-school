import styles from '../../../../../styles/add.module.scss';

const Child2 = () => {
    return (  
        <div className={styles.frame2__content__child2}>
            <div className={styles.frame2__content__child2__nav}>
                <h5 className={styles.frame2__content__child2__nav__title}>Parents Details</h5>
            </div>
            <div className={styles.frame2__content__child2__body}>
                <div className={styles.frame2__content__child2__body__container}>
                    <div className={styles.frame2__content__child2__body__container__row}>
                        <label className={styles.frame2__content__child2__body__container__row__label} htmlFor="first_name">First Name *</label>
                        <input className={styles.frame2__content__child2__body__container__row__input} type="text" placeholder='Mana' />
                    </div>
                    <div className={styles.frame2__content__child2__body__container__row}>
                        <label className={styles.frame2__content__child2__body__container__row__label} htmlFor="email">Email *</label>
                        <input className={styles.frame2__content__child2__body__container__row__input} type="text" placeholder='Mana@mail.com' />
                    </div>
                    <div className={styles.frame2__content__child2__body__container__row}>
                        <label className={styles.frame2__content__child2__body__container__row__label} htmlFor="address">Address *</label>
                        <input className={styles[`frame2__content__child2__body__container__row__input--special`]} style={{height: "150px"}} type="text" placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' />
                    </div>
                </div>
                <div className={styles.frame2__content__child2__body__container}>
                    <div className={styles.frame2__content__child2__body__container__row}>
                        <label className={styles.frame2__content__child2__body__container__row__label} htmlFor="last_name">Last Name *</label>
                        <input className={styles.frame2__content__child2__body__container__row__input} type="text" placeholder='William' />
                    </div>
                    <div className={styles.frame2__content__child2__body__container__row}>
                        <label className={styles.frame2__content__child2__body__container__row__label} htmlFor="phone">Phone *</label>
                        <input className={styles.frame2__content__child2__body__container__row__input} type="number" placeholder='+1234567890' />
                    </div>
                    <div className={styles.frame2__content__child2__body__container__row}>
                        <label className={styles.frame2__content__child2__body__container__row__label} htmlFor="payment">Payment *</label>
                        <div className={styles.frame2__content__child2__body__container__row__checkboxes}>
                            <input type="radio" id="cash" name="payment"/>
                            <label className={styles.frame2__content__child2__body__container__row__checkboxes__label} htmlFor="cash"> Cash</label>
                            <input type="radio" id="debit" name="payment"/>
                            <label className={styles.frame2__content__child2__body__container__row__checkboxes__label} htmlFor="debit">Debit</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Child2;