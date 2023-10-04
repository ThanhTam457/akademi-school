import styles from '../../../styles/lastest_activity.module.scss';
import Child1 from './Child/Child1';

const Frame2 = () => {
    interface IActivity {
        date: string,
        sentence: string,
        file ?: number,
    }

    const today: IActivity[] = [
        {
            date: "Monday, June 31 2020",
            sentence: "Karen Hope has created new task at HIstory Lesson",
        },
        {
            date: "Monday, June 31 2020",
            sentence: "[REMINDER] Due date of Science Homework task will be coming",
        },
        {
            date: "Monday, June 31 2020",
            sentence: "Tony Soap commented at Science Homework",
        },
        {
            date: "Monday, June 31 2020",
            sentence: "Samantha William add 4 files on Art Class",
            file: 4,
        },
        {
            date: "Monday, June 31 2020",
            sentence: "You has moved “Biology Homework” task to Done",
        },
    ];

    const yesterday: IActivity[] = [
        {
            date: "Sunday, June 30 2020",
            sentence: "Johnny Ahmad mentioned you at Art Class Homework",
        },
        {
            date: "Sunday, June 30 2020",
            sentence: "Nadila Adja mentioned you at Programming Homework",
        },
    ];

    return (  
        <div className={styles.frame2__content}>
            <div className={styles.frame2__content__nav}>
                <h5 className={styles.frame2__content__nav__title}>Today</h5>
            </div>
            <div className={styles.frame2__content__today}>
                <Child1 activity={today}/>
            </div>
            <div className={styles.frame2__content__nav}>
                <h5 className={styles.frame2__content__nav__title}>Yesterday</h5>
            </div>
            <div className={styles.frame2__content__today}>
                <Child1 activity={yesterday}/>
            </div>
        </div>
    );
}
 
export default Frame2;