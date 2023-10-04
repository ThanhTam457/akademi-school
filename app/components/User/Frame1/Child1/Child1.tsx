import styles from '../../../../styles/user.module.scss';

const Child1 = () => {
    return (  
        <div className={styles.frame1__content__child1}>
            <div className={styles.frame1__content__child1__circle}>
                <div className={styles.frame1__content__child1__circle__circle1}></div>
                <div className={styles.frame1__content__child1__circle__circle2}></div>
            </div>
            <div className={styles.frame1__content__child1__container}>
                <div className={styles.frame1__content__child1__container__row1}>
                    <div className={styles.frame1__content__child1__container__row1__avatar}>
                        <div className={styles.frame1__content__child1__container__row1__avatar__item}>

                        </div>
                    
                    </div>
                    <button className={styles.frame1__content__child1__container__row1__button}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12.0012 9.36011C11.6543 9.36011 11.3109 9.42842 10.9904 9.56116C10.67 9.69389 10.3788 9.88844 10.1335 10.1337C9.88829 10.379 9.69374 10.6701 9.56101 10.9906C9.42828 11.311 9.35996 11.6545 9.35996 12.0013C9.35996 12.3482 9.42828 12.6916 9.56101 13.0121C9.69374 13.3325 9.88829 13.6237 10.1335 13.8689C10.3788 14.1142 10.67 14.3087 10.9904 14.4415C11.3109 14.5742 11.6543 14.6425 12.0012 14.6425C12.7017 14.6423 13.3734 14.3639 13.8686 13.8685C14.3638 13.3731 14.6419 12.7012 14.6418 12.0007C14.6416 11.3002 14.3632 10.6285 13.8677 10.1333C13.3723 9.63806 12.7004 9.35995 12 9.36011H12.0012ZM3.60116 9.36011C3.25431 9.36011 2.91086 9.42842 2.59042 9.56116C2.26997 9.69389 1.97881 9.88844 1.73355 10.1337C1.48829 10.379 1.29374 10.6701 1.16101 10.9906C1.02828 11.311 0.959961 11.6545 0.959961 12.0013C0.959961 12.3482 1.02828 12.6916 1.16101 13.0121C1.29374 13.3325 1.48829 13.6237 1.73355 13.8689C1.97881 14.1142 2.26997 14.3087 2.59042 14.4415C2.91086 14.5742 3.25431 14.6425 3.60116 14.6425C4.30165 14.6423 4.97339 14.3639 5.4686 13.8685C5.9638 13.3731 6.24192 12.7012 6.24176 12.0007C6.2416 11.3002 5.96318 10.6285 5.46775 10.1333C4.97231 9.63806 4.30045 9.35995 3.59996 9.36011H3.60116ZM20.4012 9.36011C20.0543 9.36011 19.7109 9.42842 19.3904 9.56116C19.07 9.69389 18.7788 9.88844 18.5336 10.1337C18.2883 10.379 18.0937 10.6701 17.961 10.9906C17.8283 11.311 17.76 11.6545 17.76 12.0013C17.76 12.3482 17.8283 12.6916 17.961 13.0121C18.0937 13.3325 18.2883 13.6237 18.5336 13.8689C18.7788 14.1142 19.07 14.3087 19.3904 14.4415C19.7109 14.5742 20.0543 14.6425 20.4012 14.6425C21.1017 14.6423 21.7734 14.3639 22.2686 13.8685C22.7638 13.3731 23.0419 12.7012 23.0418 12.0007C23.0416 11.3002 22.7632 10.6285 22.2677 10.1333C21.7723 9.63806 21.1005 9.35995 20.4 9.36011H20.4012Z" fill="#A098AE"/>
                        </svg>
                    </button>
                </div>
                <div className={styles.frame1__content__child1__container__row2}>
                    <div className={styles.frame1__content__child1__container__row2__col}>
                        <h3 className={styles.frame1__content__child1__container__row2__col__name}>Nabila Azalea</h3>
                        <h6 className={styles.frame1__content__child1__container__row2__col__role}>Admin</h6>
                        <p className={styles.frame1__content__child1__container__row2__col__paragraph}>Jakarta, Indonesia</p>
                    </div>
                    <div className={styles.frame1__content__child1__container__row2__col}>
                        <p className={styles.frame1__content__child1__container__row2__col__paragraph}>Phone</p>
                        <div className={styles.frame1__content__child1__container__row2__col__text}>
                            <button className={styles.frame1__content__child1__container__row2__col__button}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M19.4401 13.7403C19.2201 13.7403 18.9901 13.6703 18.7701 13.6203C18.3246 13.5222 17.8868 13.3918 17.4601 13.2303C16.9962 13.0616 16.4862 13.0703 16.0284 13.255C15.5706 13.4396 15.1972 13.787 14.9801 14.2303L14.7601 14.6803C13.7861 14.1385 12.8911 13.4656 12.1001 12.6803C11.3149 11.8894 10.6419 10.9943 10.1001 10.0203L10.5201 9.74035C10.9635 9.52326 11.3109 9.14988 11.4955 8.69204C11.6801 8.2342 11.6889 7.72426 11.5201 7.26035C11.3613 6.83277 11.231 6.39514 11.1301 5.95035C11.0801 5.73035 11.0401 5.50035 11.0101 5.27035C10.8887 4.56597 10.5197 3.92809 9.96972 3.47159C9.41972 3.01508 8.7248 2.76996 8.0101 2.78035H5.0101C4.57913 2.7763 4.15235 2.86516 3.75881 3.04088C3.36527 3.21659 3.01421 3.47504 2.72953 3.79863C2.44485 4.12221 2.23324 4.50334 2.10909 4.91606C1.98494 5.32878 1.95118 5.76341 2.0101 6.19035C2.54284 10.3797 4.45613 14.2722 7.44775 17.253C10.4394 20.2337 14.3388 22.1329 18.5301 22.6503H18.9101C19.6475 22.6514 20.3595 22.3809 20.9101 21.8903C21.2265 21.6074 21.4792 21.2605 21.6516 20.8727C21.8239 20.4848 21.9121 20.0648 21.9101 19.6403V16.6403C21.8979 15.9457 21.6449 15.2769 21.1944 14.748C20.744 14.2191 20.1239 13.863 19.4401 13.7403ZM19.9401 19.7403C19.9399 19.8823 19.9095 20.0226 19.8509 20.152C19.7923 20.2813 19.7068 20.3966 19.6001 20.4903C19.4884 20.5868 19.3577 20.6589 19.2165 20.7019C19.0753 20.745 18.9267 20.7581 18.7801 20.7403C15.035 20.2602 11.5563 18.5468 8.89282 15.8706C6.2293 13.1944 4.53251 9.70768 4.0701 5.96035C4.05419 5.81386 4.06813 5.66568 4.1111 5.52474C4.15407 5.3838 4.22517 5.25303 4.3201 5.14035C4.41381 5.03368 4.52916 4.94819 4.65848 4.88956C4.7878 4.83094 4.92812 4.80053 5.0701 4.80035H8.0701C8.30265 4.79517 8.52972 4.87123 8.71224 5.01542C8.89476 5.15961 9.02131 5.36292 9.0701 5.59035C9.1101 5.86368 9.1601 6.13368 9.2201 6.40035C9.33562 6.92749 9.48936 7.44553 9.6801 7.95035L8.2801 8.60035C8.1604 8.65527 8.05272 8.73329 7.96326 8.82994C7.87379 8.92659 7.8043 9.03996 7.75877 9.16354C7.71324 9.28712 7.69257 9.41848 7.69795 9.55007C7.70332 9.68166 7.73464 9.81089 7.7901 9.93035C9.2293 13.0131 11.7073 15.4911 14.7901 16.9303C15.0336 17.0304 15.3066 17.0304 15.5501 16.9303C15.6748 16.8857 15.7894 16.8168 15.8873 16.7275C15.9851 16.6383 16.0643 16.5305 16.1201 16.4103L16.7401 15.0103C17.2571 15.1952 17.7847 15.3488 18.3201 15.4703C18.5868 15.5303 18.8568 15.5803 19.1301 15.6203C19.3575 15.6691 19.5608 15.7957 19.705 15.9782C19.8492 16.1607 19.9253 16.3878 19.9201 16.6203L19.9401 19.7403Z" fill="white"/>
                                </svg>
                            </button>
                            <h6>+12 345 6789 0</h6>
                        </div>
                    </div>
                    <div className={styles.frame1__content__child1__container__row2__col}>
                        <p className={styles.frame1__content__child1__container__row2__col__paragraph}>Email</p>
                        <div className={styles.frame1__content__child1__container__row2__col__text}>
                            <button className={styles.frame1__content__child1__container__row2__col__button}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M19 4.74023H5C4.20435 4.74023 3.44129 5.0563 2.87868 5.61891C2.31607 6.18152 2 6.94458 2 7.74023V17.7402C2 18.5359 2.31607 19.2989 2.87868 19.8616C3.44129 20.4242 4.20435 20.7402 5 20.7402H19C19.7956 20.7402 20.5587 20.4242 21.1213 19.8616C21.6839 19.2989 22 18.5359 22 17.7402V7.74023C22 6.94458 21.6839 6.18152 21.1213 5.61891C20.5587 5.0563 19.7956 4.74023 19 4.74023ZM18.427 6.74023L12.6 11.5402C12.4335 11.6669 12.2312 11.7378 12.022 11.7429C11.8129 11.7479 11.6074 11.6868 11.435 11.5682L5.573 6.74023H18.427ZM19 18.7402H5C4.73478 18.7402 4.48043 18.6349 4.29289 18.4473C4.10536 18.2598 4 18.0055 4 17.7402V8.04023L10.2 13.1402C10.7159 13.5266 11.3435 13.7347 11.988 13.7332C12.6551 13.7322 13.3037 13.5143 13.836 13.1122L20 8.04023V17.7402C20 18.0055 19.8946 18.2598 19.7071 18.4473C19.5196 18.6349 19.2652 18.7402 19 18.7402Z" fill="white"/>
                                </svg>
                            </button>
                            <h6>jordan@mail.com</h6>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
 
export default Child1;