import styles from '../../../../styles/teacher_detail.module.scss';
import Child1 from './Child1';
import Child2 from './Child2';

const Frame2 = () => {
    return (  
        <div className={styles.frame2__content}>
            <Child1 />
            <Child2 />
        </div>
    );
}
 
export default Frame2;