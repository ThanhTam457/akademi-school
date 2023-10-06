import ListPeople from '@/app/components/List/ListPeople';
import styles from '../../../../../styles/dashboard.module.scss';

const Child2 = () => {
    interface IPeople {
        name: string,
        description: string,
        color: string,
        time: string,
        noti: number,
    }

    const people: IPeople[] = [
        {name: 'Samantha William', description: 'Lorem ipsum dolor sit amet...', color: 'grey', time: '12:45 PM', noti: 0},
        {name: 'Tony Soap', description: 'Lorem ipsum dolor sit amet...', color: 'grey', time: '12:45 PM', noti: 0},
        {name: 'Karen Hope', description: 'Lorem ipsum dolor sit amet...', color: 'grey', time: '12:45 PM', noti: 0},
        {name: 'Jordan Nico', description: 'Lorem ipsum dolor sit amet...', color: 'grey', time: '12:45 PM', noti: 0},
        {name: 'Nadila Adja', description: 'Lorem ipsum dolor sit amet...', color: 'grey', time: '12:45 PM', noti: 0},
    ];

    return (  
        <div className={styles.frame2__content__child2}>
            <div className={styles.frame2__content__child2__title}>
                <h5>Messages</h5>
            </div>
            <ListPeople people={people} />
            <button className={styles.frame2__content__child2__button}>
                View more
            </button>
        </div>
    );
}
 
export default Child2;