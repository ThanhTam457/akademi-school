import styles from '../../../../../../styles/event.module.scss'


interface Props {
    event: string, //event is background color or border color. If event is none, then it is a day with no event
    day: number,
    people: number, //people is the number of people in the event, if people is 0, then it is no display people
}

export const Day = (props: Props) => {

    const dayClass = `child1__content__body__dates__date--${props.event}`;

    return (
        <button className={styles[dayClass]}>
            <time className={styles.child1__content__body__dates__date__time}>{props.day}</time>
            <div className={styles.child1__content__body__dates__date__people + `${props.people === 0 ? " " + styles["child1__content__body__dates__date__people--none"]: ""}` }>
                <svg className={`${props.people > 3 ? " " + styles[`child1__content__body__dates__date__people--none`] : ""}`} xmlns="http://www.w3.org/2000/svg" width="80" height="16" viewBox="0 0 70 16" fill="none">
                    <circle cx="30" cy="8" r="8" fill="#4D44B5" />
                    <circle cx="57" cy="8" r="8" fill="#FB7D5B" />
                    <circle cx="3" cy="8" r="8" fill="#FCC43E" />
                </svg>
                {/* <div className={`${props.people > 3 ? " " + styles[`child1__content__body__dates__date__people--many`]: ""}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <circle cx="14" cy="14" r="13.5" fill="#C1BBEB" stroke="white"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <circle cx="14" cy="14" r="13.5" fill="#C1BBEB" stroke="white"/>
                    </svg>
                    <div className={styles['child1__content__body__dates__date__people--many--pp']}>
                        {props.people - 3} +
                    </div>
                </div> */}
            </div>
        </button>
    );
}

