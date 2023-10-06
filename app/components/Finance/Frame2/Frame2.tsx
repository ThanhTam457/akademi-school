import styles from '../../../styles/finance.module.scss';
import ListContent from '../../List/listContent';
import FinanceIcon from '../../Logo/financeIcon';
import StudentIcon from '../../Logo/studentIcon';
import TeacherIcon from '../../Logo/teacherIcon';

const Frame2 = () => {
    interface IContent {
        logo: React.ReactNode,
        name: string,
        number: string,
        rate: number,
        color: string,
        chart ? : React.ReactNode,
    }

    const content: IContent[] = [
        {logo: <StudentIcon/>, name: "Total Students", number: "932", rate: +10, color: "purple"},  
        {logo: <TeacherIcon/>, name: "Total Teachers", number: "754", rate: -0.5, color: "orange"},
        {logo: <FinanceIcon/>, name: "School Balance", number: "$123,456", rate: +23, color: "yellow", 
        chart: 
        <div className={styles.frame2__content__chart1}>
            <svg xmlns="http://www.w3.org/2000/svg" width="285" height="75" viewBox="0 0 285 75" fill="none">
                <path d="M2 55.9575C19.4134 55.9575 27.7877 33.0683 48.7538 31.6368C67.9618 30.3254 76.3211 73.7264 95.5077 72.191C117.28 70.4486 121.123 33.2601 142.739 30.3789C161.163 27.923 170.859 41.7006 189.492 41.7006C213.147 41.7006 216.492 5.41625 236.246 2.19464C254.213 -0.735515 265.383 30.4528 283 26.1856" stroke="#4CBC9A" stroke-width="4" stroke-linecap="round"/>
            </svg>
            <svg style={{marginTop: "-72px"}} xmlns="http://www.w3.org/2000/svg" width="281" height="83" viewBox="0 0 281 83" fill="none">
                <path d="M46.7538 29.8409C25.7877 31.2822 17.4134 54.3291 0 54.3291V83H26.4275H280.971L281 24.3522C263.383 28.6488 252.213 -2.75435 234.246 0.195981C214.492 3.43978 211.147 39.974 187.492 39.974C168.859 39.974 159.163 26.1015 140.739 28.5743C119.123 31.4754 115.28 68.9199 93.5077 70.6743C74.3211 72.2203 65.9618 28.5204 46.7538 29.8409Z" fill="url(#paint0_linear_29_2)" fill-opacity="0.25"/>
                <defs>
                    <linearGradient id="paint0_linear_29_2" x1="140.5" y1="0" x2="140.5" y2="83" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#4CBC9A"/>
                    <stop offset="1" stop-color="#4CBC9A" stop-opacity="0"/>
                    </linearGradient>
                </defs>
            </svg>
        </div>
      },
    ];

    return (  
        <div className={styles.frame2__content}>
            <ListContent content={content}/>
        </div>
    );
}
 
export default Frame2;