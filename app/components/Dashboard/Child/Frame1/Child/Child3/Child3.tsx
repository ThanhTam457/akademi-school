import styles from '../../../../../../styles/dashboard.module.scss';
import Child1 from './Child_Child/Child1'
import Child2 from './Child_Child/Child2';

const Child3 = () => {
    return (  
        <div className={styles.frame1__content__left__child3}>
            <Child1 />
            <Child2 />
        </div>
    );
}
 
export default Child3;