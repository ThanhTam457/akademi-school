import DropdownIcon from '@/app/components/Logo/dropdownIcon';
import styles from '../../../../../../../styles/dashboard.module.scss';

const Child1 = () => {
    const date = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    return (  
        <div className={styles.frame1__content__left__child3__child1}>
            <div className={styles.frame1__content__left__child3__child1__title}>
                <h5>School Calendar</h5>
                <button className={styles.frame1__content__left__child3__child1__title__button}>
                    March 2021 
                    <DropdownIcon />
                </button>
            </div>
            <div className={styles.frame1__content__left__child3__child1__body}>
                <div className={styles. frame1__content__left__child3__child1__body__date}>
                    {date.map((item, index) => (
                        <p className={styles. frame1__content__left__child3__child1__body__date__text} key={index}>{item}</p>
                    ))}
                </div>
                <div className={styles. frame1__content__left__child3__child1__body__day}>
                    {Array.from({length: 31}, (_, i) => (
                        <p className={styles. frame1__content__left__child3__child1__body__day__item} key={i}>{i + 1}</p>
                    ))}             
                </div>
            </div>
        </div>
    );
}
 
export default Child1;