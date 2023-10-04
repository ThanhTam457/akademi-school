import styles from '../../../../../../styles/event.module.scss';
import type { Subject } from './ClassList';
import ClassList from './ClassList';

const listSubject : Subject[] = [
    {name: 'Basic Algorithm', descrip: 'Algorithm', date: 'March 20, 2021', time: '09.00 - 10.00 AM'},
    {name: 'Basic Art', descrip: 'Art', date: 'March 20, 2021', time: '09.00 - 10.00 AM'},
    {name: 'HTML & CSS Class', descrip: 'Programming', date: 'March 20, 2021', time: '09.00 - 10.00 AM'},
    {name: 'Simple Past Tense', descrip: 'English', date: 'March 20, 2021', time: '09.00 - 10.00 AM'},
];

const Child2 = () => {
    return (  
        <div className={styles. child2__content}>
            <div className={styles.child2__content__item}>
                <h5 className={styles.child2__content__item__title}>Schedule Details</h5>
                <p className={styles.child2__content__item__date}>Thursday, 10th April , 2021</p>
            </div>
            <ClassList subjects={listSubject}/>
            <button className={styles.child2__content__button}>View more</button>
        </div>
    );
}
 
export default Child2;