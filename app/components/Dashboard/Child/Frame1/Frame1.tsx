import styles from '../../../../styles/dashboard.module.scss';
import Child1 from './Child/Child1/Child1';
import Child2 from './Child/Child2/Child2';
import Child3 from './Child/Child3/Child3';
import Child4 from './Child/Child4/Child4';

const Frame1 = () => {
    return ( 
        <div className={styles.frame1__content}>
            <div className={styles.frame1__content__left}>
                <div className={styles.frame1__content__left__nav}>
                    <h3>Dashboard</h3>
                    <div className={styles.frame1__content__left__item}>
                        <input type="text" placeholder='Search here...' className={styles.frame1__content__left__item__input}/>
                    </div>
                </div>
                <Child1 />
                <Child2 />
                <Child3 />
                <Child4 />
            </div>
        </div>
     );
}
 
export default Frame1;