import styles from '../../../../styles/chat.module.scss';
import Child1 from './Child_Frame2/Child1/Child1';
import Child2 from './Child_Frame2/Child2/Child2';

const Frame2 = () => {
    return (  
        <div className={styles.frame2__content}>
            <Child1 />
            <Child2 />
        </div>
    );
}
 
export default Frame2;