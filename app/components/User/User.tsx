import styles from  '../../styles/user.module.scss';
import Frame1 from './Frame1/Frame1';
import Frame2 from './Frame2/Frame2';

const User = () => {
    return (  
        <div className={styles.container}>
            <Frame1 />
            <Frame2 />
        </div>
    );
}
 
export default User;