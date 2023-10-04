import styles from '../../styles/chat.module.scss';
import Frame1 from './Child/Frame1/Frame1';
import Frame2 from './Child/Frame2/Frame2';

const Chat = () => {
    return ( 
        <div className={styles.container}>
            <Frame1/>
            <Frame2/>
        </div>
    );
}
 
export default Chat;