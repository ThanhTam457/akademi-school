import styles from '../../../styles/finance.module.scss';
import Child1 from './Child/Child1';
import Child2 from './Child/Child2';

const Frame4 = () => {
    return (  
        <div className={styles.frame4__content}>
            <Child1 />
            <Child2 />
        </div>
    );
}
 
export default Frame4;