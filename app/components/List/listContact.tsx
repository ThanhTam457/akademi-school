import styles from '../../styles/list.module.scss';

interface IContact {
    name: string,
    class: string,
    mail: boolean,
}

interface Props {
    contact: IContact[];
}

const ListContact = ({contact}: Props): React.ReactNode => {
    return (
        <>
            {contact.map((item, index) => {
                return (
                    <div className={styles.listContact} key={index}>
                        <div className={styles.listContact__left}>
                            <div className={styles.listContact__left__avatar}></div>
                            <div className={styles.listContact__left__text}>
                                <h6 className={styles.listContact__left__text__name}>{item.name}</h6>
                                <p className={styles.listContact__left__text__class}>{item.class}</p>
                            </div>
                        </div>
                        <button className={styles.listContact__button + `${item.mail === true ? " " + styles['listContact__button--active']: ""}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32" fill="none">
                                <path d="M26.6666 5.33325H5.33325C4.27239 5.33325 3.25497 5.75468 2.50482 6.50482C1.75468 7.25497 1.33325 8.27239 1.33325 9.33325V22.6666C1.33325 23.7274 1.75468 24.7449 2.50482 25.495C3.25497 26.2452 4.27239 26.6666 5.33325 26.6666H26.6666C27.7274 26.6666 28.7449 26.2452 29.495 25.495C30.2452 24.7449 30.6666 23.7274 30.6666 22.6666V9.33325C30.6666 8.27239 30.2452 7.25497 29.495 6.50482C28.7449 5.75468 27.7274 5.33325 26.6666 5.33325ZM27.9999 22.3333L21.4666 16.4666L27.9999 11.8933V22.3333ZM3.99992 11.8933L10.5333 16.4666L3.99992 22.3333V11.8933ZM12.7733 18.0399L15.2399 19.7599C15.4631 19.9148 15.7283 19.9977 15.9999 19.9977C16.2716 19.9977 16.5367 19.9148 16.7599 19.7599L19.2266 18.0399L25.8932 23.9999H6.13325L12.7733 18.0399ZM5.33325 7.99992H26.6666C26.9142 8.0019 27.1564 8.07281 27.366 8.20469C27.5756 8.33657 27.7443 8.52421 27.8532 8.74658L15.9999 17.0399L4.14658 8.74658C4.25553 8.52421 4.42426 8.33657 4.63385 8.20469C4.84345 8.07281 5.08563 8.0019 5.33325 7.99992Z" fill="#A098AE"/>
                            </svg>
                        </button>
                    </div>
                );
                
            })}
        </>
    )
}


    
 
export default ListContact;