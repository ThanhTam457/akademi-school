import styles from '../../styles/teachers.module.scss';
import Frame1 from './Child/Frame1/Frame1';
import Frame2 from './Child/Frame2/Frame2';
import Frame3 from './Child/Frame3/Frame3';

const Teachers = () => {
    return (  
        <div className={styles.container}>
            <Frame1/>
            <Frame2/>
            <Frame3/>
        </div>
    );
}
 
export default Teachers;