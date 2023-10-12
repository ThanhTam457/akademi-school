import styles from '../../styles/student_detail.module.scss';
import Frame1 from './Child/Frame1/Frame1';
import Frame2 from './Child/Frame2/Frame2';

const StudentDetail = () => {
    return (  
        <div className={styles.container}>
            <Frame1 />
            <Frame2 />
        </div>
    );
}
 
export default StudentDetail;