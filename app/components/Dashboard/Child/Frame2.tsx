import styles from '../../../styles/dashboard.module.scss';
import StudentIcon from '../../Logo/studentIcon';
import TeacherIcon from '../../Logo/teacherIcon';
import EventIcon from '../../Logo/eventIcon';
import FoodIcon from '../../Logo/foodIcon';

interface iFrame2 {
    logo: React.ReactNode,
    title: string,
    number: string,
    color: string,
}
const frame2 : iFrame2[] = [
    {logo: <StudentIcon/>, title: 'Students', number: "932", color: 'purple'},
    {logo: <TeacherIcon/>, title: 'Teachers', number: "754", color: 'orange'},
    {logo: <EventIcon/>, title: 'Events', number: "40", color: 'yellow'},
    {logo: <FoodIcon/>, title: 'Food', number: "32K", color: 'ocean'},
]

const Frame2 = () => {
    return ( 
    <div className={styles.frame2__content}>
        {frame2.map((item, index) => (
            <div className={styles.frame2__content__item} key={`frame2-item-${index}`}>
                <div className={styles[`frame2__content__item__logo${index}`]}>
                    {item.logo}
                </div>
                <div className={styles.frame2__content__item__data}>
                    <p className={styles.frame2__content__item__data__title}>{item.title}</p>
                    <h2 className={styles.frame2__content__item__data__number}>{item.number}</h2>
                </div>
            </div>
        ))}
        {/* <div className={styles.frame2__content__item}>
            <div className={styles.frame2__content__item__logo1}>
                <StudentIcon/>
            </div>
            <div className={styles.frame2__content__item__data}>
                <p className={styles.frame2__content__item__data__title}>Students</p>
                <h2 className={styles.frame2__content__item__data__number}>932</h2>
            </div>
        </div> */}
    </div> 
    );
}
 
export default Frame2;