import ListContact from '@/app/components/List/listContact';
import styles from '../../../../styles/user.module.scss';
import ListPeople from '@/app/components/List/ListPeople';

const Child2 = () => {
    interface IContact {
        name: string,
        class: string,
        mail: boolean,
    }

    interface IPeople {
        name: string,
        description: string,
        color: string,
        time: string,
        noti: number,
    }

    const people: IPeople[] = [
        {name: 'Samantha William', description: 'Lorem ipsum dolor sit amet...', color: 'grey', time: '12:45 PM', noti: 2},
        {name: 'Tony Soap', description: 'Lorem ipsum dolor sit amet...', color: 'grey', time: '12:45 PM', noti: 2},
        {name: 'Karen Hope', description: 'Lorem ipsum dolor sit amet...', color: 'grey', time: '12:45 PM', noti: 0},
        {name: 'Jordan Nico', description: 'Lorem ipsum dolor sit amet...', color: 'grey', time: '12:45 PM', noti: 2},
        {name: 'Nadila Adja', description: 'Lorem ipsum dolor sit amet...', color: 'grey', time: '12:45 PM', noti: 0},
    ];

    const contact: IContact[] = [
        {name: 'Samantha William', class: 'Class VII-A', mail: false},
        {name: 'Tony Soap', class: 'Class VII-A', mail: true},
        {name: 'Karen Hope', class: 'Class VII-A', mail: false},
        {name: 'Jordan Nico', class: 'Class VII-B', mail: false},
        {name: 'Nadila Adja', class: 'Class VII-B', mail: false},
    ];


    return (  
        <div className={styles.frame1__content__child2}>
            <div className={styles.frame1__content__child2__container}>
                <div className={styles.frame1__content__child2__container__head}>
                    <div className={styles.frame1__content__child2__container__head__text}>
                        <h4>Contacts</h4>
                        <p>You have 741 contacts</p>
                    </div>
                    <button className={styles.frame1__content__child2__container__head__button}>
                        +
                    </button>
                </div>
                <input type="text" placeholder='Search here...' className={styles.frame1__content__child2__container__input} />
                <div className={styles.frame1__content__child2__container__body}>
                    <ListContact contact={contact} />
                </div>
                <button className={styles.frame1__content__child2__container__button}>
                    View more
                </button>
            </div>
            <div className={styles.frame1__content__child2__container}>
                <h4>Messages</h4>
                <input type="text" placeholder='Search here...' className={styles.frame1__content__child2__container__input} />
                <div className={styles.frame1__content__child2__container__body}>
                     <ListPeople border='none' people={people}/>
                </div>
                <button className={styles.frame1__content__child2__container__button}>
                    View more
                </button>
            </div>
        </div>
    );
}
 
export default Child2;