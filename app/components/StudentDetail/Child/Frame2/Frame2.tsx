import styles from '../../../../styles/student_detail.module.scss';
import Child1 from './Child1';
import Child2 from './Child2';
import Child3 from './Child3';

const Frame2 = () => {
    return (  
        <div className={styles.frame2__content}>
            <div className={styles.frame2__content__left}>
                <Child1 />
                <Child3 />
            </div>
            <Child2 />
        </div>
    );
}
 
export default Frame2;