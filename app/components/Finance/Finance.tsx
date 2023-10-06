import styles from '../../styles/finance.module.scss';
import Frame1 from './Frame1/Frame1';
import Frame2 from './Frame2/Frame2';
import Frame3 from './Frame3/Frame3';
import Frame4 from './Frame4/Frame4';

const Finance = () => {
    return (  
        <div className={styles.container}>
            <Frame1 /> 
            <Frame2 />
            <Frame3 />
            <Frame4 />
        </div>
    );
}
 
export default Finance;