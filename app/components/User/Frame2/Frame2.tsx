import styles from '../../../styles/user.module.scss';
import Child1 from './Child/Child1';

const Frame2 = () => {
    return (  
        <div className={styles.frame2__content}>
            <div className={styles.frame2__content__nav}>
                <div className={styles.frame2__content__nav__item}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 26 32" fill="none">
                        <path d="M22.3677 18.9391V9.86768C22.3677 4.70215 18.1655 0.5 13 0.5C7.83447 0.5 3.63232 4.70215 3.63232 9.86768V18.9397C1.96704 19.4224 0.738281 20.9544 0.738281 22.8374C0.738281 25.0386 2.5293 26.8296 4.73096 26.8296H8.37696V26.877C8.37695 29.4263 10.4507 31.5 13 31.5C15.5493 31.5 17.6231 29.4263 17.6231 26.8769V26.8296H21.2691C23.4707 26.8296 25.2617 25.0386 25.2617 22.7583C25.2617 20.9406 24.033 19.4198 22.3677 18.9391ZM6.63232 9.86768C6.63232 6.35645 9.48877 3.5 13 3.5C16.5112 3.5 19.3677 6.35645 19.3677 9.86768V18.7661H6.63232V9.86768ZM14.6231 26.8769C14.6231 27.772 13.895 28.5 13 28.5C12.105 28.5 11.377 27.772 11.377 26.8769V26.8296H14.623V26.8769H14.6231ZM21.269 23.8296H4.73096C4.1836 23.8296 3.73828 23.3843 3.73828 22.7583C3.73828 22.2114 4.18359 21.7661 4.73096 21.7661H21.2691C21.8164 21.7661 22.2617 22.2114 22.2617 22.8374C22.2617 23.3843 21.8164 23.8296 21.269 23.8296Z" fill="#A098AE"/>
                    </svg>
                </div>
                <div className={styles.frame2__content__nav__item}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M12.2627 2.66675L11.4163 6.46623C10.935 6.69787 10.4748 6.96466 10.0335 7.26571L6.31999 6.09644L2.58301 12.5704L5.39811 15.1485C5.28813 15.9649 5.33794 16.3673 5.39811 16.8516L2.58301 19.4298L6.31999 25.9037L10.0335 24.7345C10.4748 25.0355 10.935 25.3023 11.4163 25.5339L12.2627 29.3334H19.7367L20.583 25.5339C21.0644 25.3023 21.5245 25.0355 21.9658 24.7345L25.6794 25.9037L29.4163 19.4298L26.6012 16.8516C26.6242 16.5682 26.6661 16.2846 26.6663 16.0001C26.6674 15.7069 26.6212 15.4109 26.6012 15.1485L29.4163 12.5704L25.6794 6.09644L21.9658 7.26571C21.5245 6.96466 21.0644 6.69787 20.583 6.46623L19.7367 2.66675H12.2627ZM14.4033 5.33341H17.596L18.2549 8.29175L18.9163 8.55217C19.6646 8.84519 20.364 9.24854 20.9919 9.75008L21.5492 10.1928L24.4398 9.28394L26.0361 12.0496L23.8018 14.099L23.9085 14.8022C24.0342 15.5798 24.0098 16.4746 23.9085 17.198L23.8018 17.9011L26.0361 19.9506L24.4398 22.7162L21.5492 21.8074L20.9919 22.2501C20.364 22.7516 19.6646 23.155 18.9163 23.448L18.2549 23.7084L17.596 26.6667H14.4033L13.7445 23.7084L13.083 23.448C12.3348 23.155 11.6353 22.7516 11.0075 22.2501L10.4502 21.8074L7.55957 22.7162L5.96322 19.9506L8.19759 17.9011L8.09082 17.198C7.96059 16.4047 7.98058 15.4968 8.09082 14.8022L8.19759 14.099L5.96322 12.0496L7.55957 9.28394L10.4502 10.1928L11.0075 9.75008C11.6353 9.24854 12.3348 8.84519 13.083 8.55217L13.7445 8.29175L14.4033 5.33341ZM15.9997 10.6667C13.0699 10.6667 10.6663 13.0704 10.6663 16.0001C10.6663 18.9298 13.0699 21.3334 15.9997 21.3334C18.9294 21.3334 21.333 18.9298 21.333 16.0001C21.333 13.0704 18.9294 10.6667 15.9997 10.6667ZM15.9997 13.3334C17.4882 13.3334 18.6663 14.5115 18.6663 16.0001C18.6663 17.4886 17.4882 18.6667 15.9997 18.6667C14.5111 18.6667 13.333 17.4886 13.333 16.0001C13.333 14.5115 14.5111 13.3334 15.9997 13.3334Z" fill="#A098AE"/>
                    </svg>
                </div>
                <div className={styles.frame2__content__nav__text}>
                    <h6>Nabila A</h6>
                    <p className={styles.frame2__content__nav__text__paragraph}>Admin</p>
                </div>
                <div className={styles.frame2__content__nav__avatar}>

                </div>
            </div>
            <Child1/>
            <div className={styles.frame2__content__image}>
                <div className={styles.frame2__content__image__orange}>
                </div>
                <div className={styles.frame2__content__image__yellow}>
                </div>
            </div>
            <div className={styles.frame2__content__activity}>
                <h4 className={styles.frame2__content__activity__title}>Lastest Activity</h4>
                <div className={styles.frame2__content__activity__item}>
                    <div className={styles.frame2__content__activity__item__border}>
                        <div className={styles.frame2__content__activity__item__border__circle}>
                        </div>
                        <span className={styles.frame2__content__activity__item__border__span}>

                        </span>
                    </div>
                    <div className={styles.frame2__content__activity__item__text}>
                        <p className={styles.frame2__content__activity__item__text__item1}>Karen Hope moved task “User Research“ from On Progress to Done</p>
                        <p className={styles.frame2__content__activity__item__text__item2}>2 March 2021, 13:45 PM</p>
                    </div>
                </div>
                <div className={styles.frame2__content__activity__item}>
                    <div className={styles.frame2__content__activity__item__border}>
                        <div className={styles.frame2__content__activity__item__border__circle}>
                        </div>
                        <span className={styles.frame2__content__activity__item__border__span}>

                        </span>
                    </div>
                    <div className={styles.frame2__content__activity__item__text}>
                        <p className={styles.frame2__content__activity__item__text__item1}>Samantha William add new 4 attached files on task “Photo&apos;s Assets“</p>
                        <p className={styles.frame2__content__activity__item__text__item2}>2 March 2021, 13:45 PM</p>
                    </div>
                </div>
                <div className={styles.frame2__content__activity__item}>
                    <div className={styles.frame2__content__activity__item__border}>
                        <div className={styles.frame2__content__activity__item__border__circle}>
                        </div>
                        <span className={styles.frame2__content__activity__item__border__span}>

                        </span>
                    </div>
                    <div className={styles.frame2__content__activity__item__text}>
                        <p className={styles.frame2__content__activity__item__text__item1}>Tony Soap invite you in task “Wireframing“ and “Hi-fidelity“</p>
                        <p className={styles.frame2__content__activity__item__text__item2}>2 March 2021, 13:45 PM</p>
                    </div>
                </div>
                <div className={styles.frame2__content__activity__item}>
                    <div className={styles.frame2__content__activity__item__border}>
                        <div className={styles.frame2__content__activity__item__border__circle}>
                        </div>
                        
                    </div>
                    <div className={styles.frame2__content__activity__item__text}>
                        <p className={styles.frame2__content__activity__item__text__item1}>Samantha William created new Task</p>
                        <p className={styles.frame2__content__activity__item__text__item2}>2 March 2021, 13:45 PM</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Frame2;