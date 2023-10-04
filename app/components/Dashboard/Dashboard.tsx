import styles from '../../styles/dashboard.module.scss'
import Frame1 from './Child/Frame1';
import Frame2 from './Child/Frame2';

const Dashboard = () => {
    return ( 
        <div className={styles.container}>
            <Frame1 />
            <Frame2 />
        </div>
     );
}
 
export default Dashboard;