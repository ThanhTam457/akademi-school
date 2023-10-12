import ClassList from '@/app/components/Event/Child/Frame2/Child/Child2/ClassList';
import styles from '../../../../styles/student_detail.module.scss';
import type { Subject } from '../../../Event/Child/Frame2/Child/Child2/ClassList';

const Child2 = () => {
    const listSubject : Subject[] = [
        {name: 'Basic Algorithm', descrip: 'Algorithm', date: 'March 20, 2021', time: '09.00 - 10.00 AM'},
        {name: 'Basic Art', descrip: 'Art', date: 'March 20, 2021', time: '09.00 - 10.00 AM'},
        {name: 'HTML & CSS Class', descrip: 'Programming', date: 'March 20, 2021', time: '09.00 - 10.00 AM'},
        {name: 'Simple Past Tense', descrip: 'English', date: 'March 20, 2021', time: '09.00 - 10.00 AM'},
    ];

    return (  
        <div className={styles.frame2__content__child2}>
            <div className={styles.frame2__content__child2__item}>
                <h5 className={styles.frame2__content__child2__item__title}>Schedule Details</h5>
                <p className={styles.frame2__content__child2__item__date}>Thursday, 10th April , 2021</p>
            </div>
            <ClassList subjects={listSubject}/>
            <button className={styles.frame2__content__child2__button}>View more</button>
        </div>
    );
}
 
export default Child2;