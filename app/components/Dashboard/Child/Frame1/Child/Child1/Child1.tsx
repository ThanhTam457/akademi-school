import styles from '../../../../../../styles/dashboard.module.scss';
import StudentIcon from '../../../../../Logo/studentIcon';
import TeacherIcon from '../../../../../Logo/teacherIcon';
import EventIcon from '../../../../../Logo/eventIcon';
import FoodIcon from '../../../../../Logo/foodIcon';

interface IData {
    logo: React.ReactNode,
    title: string,
    number: string,
    color: string,
}
const frame1 : IData[] = [
    {logo: <StudentIcon/>, title: 'Students', number: "932", color: 'purple'},
    {logo: <TeacherIcon/>, title: 'Teachers', number: "754", color: 'orange'},
    {logo: <EventIcon/>, title: 'Events', number: "40", color: 'yellow'},
    {logo: <FoodIcon/>, title: 'Food', number: "32K", color: 'ocean'},
]

const Child1 = () => {
    return ( 
    <div className={styles.frame1__content__left__child1}>
        {frame1.map((item, index) => (
            <div className={styles.frame1__content__left__child1__item} key={`frame1-item-${index}`}>
                <div className={styles[`frame1__content__left__child1__item__logo--${item.color}`]}>
                    {item.logo}
                </div>
                <div className={styles.frame1__content__left__child1__item__data}>
                    <p className={styles.frame1__content__left__child1__item__data__title}>{item.title}</p>
                    <h3 className={styles.frame1__content__left__child1__item__data__number}>{item.number}</h3>
                </div>
            </div>
        ))}
    </div> 
    );
}
 
export default Child1;