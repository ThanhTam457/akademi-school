import styles from '../../../../styles/add.module.scss';
import Child1 from './Child/Child1';
import Child2 from './Child/Child2';

const Frame2 = () => {
    return (  
        <div className={styles.frame2__content}>
            <Child1 />
            <Child2 />
            <div className={styles.frame2__content__buttons}>
                <button className={styles[`frame2__content__buttons__button--outline`]}>Save as Draft</button>
                <button className={styles[`frame2__content__buttons__button--filled`]}>Submit</button>
            </div>
        </div>
    );
}
 
export default Frame2;