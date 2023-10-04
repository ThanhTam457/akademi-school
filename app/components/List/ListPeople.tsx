import styles from '../../styles/list.module.scss';

export type IPeople = {
    name: string,
    description: string,
    color: string,
    time: string,
    noti: number,
}

interface props {
    people: IPeople[],
    border? : string,
}

const ListPeople = ({people, border}: props): React.ReactNode => {
    return (
        <>
            {people.map((item, index) => {
                return (
                    <div className={styles.listItem + `${border ? " " + styles["listItem--bordernone"]: " "}`} key={index}>
                        <div className={styles.listItem__left}>
                            {/* <div className={styles[`listItem__left__avatar`] + " " + styles[`${item.color}`]}></div> */}
                            <div className={styles[`listItem__left__avatar`] + " " + styles[`listItem__left__avatar--${item.color}`]}></div>
                            <div className={styles.listItem__left__text}>
                                <h6 className={styles.listItem__left__text__name}>{item.name}</h6>
                                <p className={styles.listItem__left__text__description}>{item.description}</p>
                            </div>
                        </div>
                        <div className={styles.listItem__right}>
                            <p className={styles.listItem__right__time}>{item.time}</p>
                            <div className={styles.listItem__right__noti + `${0 === item.noti ? " " + styles["listItem__right__noti--none"]: ""}`}>{item.noti}</div>
                        </div>
                    </div>
                );
            })}
        </>
    );
};


 
export default ListPeople;