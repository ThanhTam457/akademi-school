import styles from '../../../styles/dashboard.module.scss';

const Frame1 = () => {
    return ( 
        <div className={styles.frame1__content}>
            <h3>Dashboard</h3>
            <input type="text" placeholder='Search here...' className={styles.frame1__content__input}/>
        </div>
     );
}
 
export default Frame1;