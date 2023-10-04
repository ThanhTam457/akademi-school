import styles from '../../../../../../styles/chat.module.scss';
import ListPeople from '../../../../../List/ListPeople';
import type { IPeople } from '../../../../../List/ListPeople';

const listGroup : IPeople[] = [
    {name: 'Class History VII-A', description: 'Lorem ipsum dolor sit amet...', color: 'purple', time: '12:45 PM', noti: 2},
    {name: 'Class VII-A', description: 'Lorem ipsum dolor sit amet...', color: 'orange', time: '12:45 PM', noti: 2},
    {name: 'All Student VII', description: 'Lorem ipsum dolor sit amet...', color: 'yellow', time: '12:45 PM', noti: 0},
];

const listChat : IPeople[] = [
    {name: 'Samantha William', description: 'Lorem ipsum dolor sit amet...', color: 'grey', time: '12:45 PM', noti: 2},
    {name: 'Tony Soap', description: 'Lorem ipsum dolor sit amet...', color: 'grey', time: '12:45 PM', noti: 2},
    {name: 'Karen Hope', description: 'Lorem ipsum dolor sit amet...', color: 'grey', time: '12:45 PM', noti: 0},
];


const Child1 = () => {
    return (  
        <div className={styles.child1__content}>
            <h4 className={styles.child1__content__title}>Messages</h4>
            <input className={styles.child1__content__input} type="text" placeholder='Search here...' />
            <p className={styles.child1__content__paragraph}>Groups</p>
            <div className={styles.child1__content__listgroups}>
                <ListPeople people={listGroup} />
            </div>
            <p className={styles.child1__content__paragraph}>Chats</p>
            <div className={styles.child1__content__listchats}>
                <ListPeople people={listChat} />
            </div>
            <button className={styles.child1__content__button}>View More</button>
        </div>
    );
}
 
export default Child1;