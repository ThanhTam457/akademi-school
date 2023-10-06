import ListContact from '@/app/components/List/listContact';
import styles from '../../../../../styles/dashboard.module.scss';
import ListPeople from '@/app/components/List/ListPeople';

const Child1 = () => {
    interface IContact {
        name: string,
        class: string,
        mail: boolean,
    }

    const contact: IContact[] = [
        {name: 'Samantha William', class: 'Class VII-A', mail: false},
        {name: 'Tony Soap', class: 'Class VII-A', mail: true},
        {name: 'Karen Hope', class: 'Class VII-A', mail: false},
        {name: 'Jordan Nico', class: 'Class VII-B', mail: false},
        {name: 'Nadila Adja', class: 'Class VII-B', mail: false},
    ];

    return (  
        <div className={styles.frame2__content__child1}>
            <div className={styles. frame2__content__child1__title}>
                <div className={styles.frame2__content__child1__title__left}>
                    <h5>Recent Students</h5>
                    <p>You have 456 students</p>
                </div>
                <button className={styles.frame2__content__child1__title__right}>
                    +
                </button>
            </div>
            <ListContact contact={contact} />
            <button className={styles.frame2__content__child1__button}>
                View more
            </button>
        </div>
    );
}
 
export default Child1;