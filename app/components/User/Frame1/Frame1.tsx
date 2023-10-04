import styles from '../../../styles/user.module.scss';
import Child1 from './Child1/Child1';
import Child2 from './Child2/Child2';

const Frame1 = () => {
    return (  
        <div className={styles.frame1__content}>
            <div className={styles.frame1__content__left}>
                <div className={styles.frame1__content__left__nav}>
                    <h3>User Dashboard</h3>
                    <div className={styles.frame1__content__left__item}>
                        <input type="text" placeholder='Search here...' className={styles.frame1__content__left__item__input}/>
                    </div>
                </div>
                <Child1 />
                <div className={styles.frame1__content__left__body}>
                    <Child2 />
                </div>
            </div>
        </div>
    );
}
 
export default Frame1;