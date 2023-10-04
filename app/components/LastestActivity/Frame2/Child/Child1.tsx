import styles from '../../../../styles/lastest_activity.module.scss';

interface IActivity {
    date: string,
    sentence: string,
    file ?: number,
}

interface Props {
    activity: IActivity[],
}

const Child1 = ({activity}: Props): React.ReactNode => {
    return (  
        <>
            {activity.map((item, index) => {
                return (
                    <div className={styles.frame2__content__listAct} key={index}>
                        <div className={styles.frame2__content__listAct__left}>
                            <div className={styles.frame2__content__listAct__left__circles}>
                                <div className={styles.frame2__content__listAct__left__circles__circle1}></div>
                                <div className={styles.frame2__content__listAct__left__circles__circle2}></div>
                            </div>
                            <span className={`${index === activity.length-1 ? styles.frame2__content__listAct__left__span__none : styles.frame2__content__listAct__left__span}`}>
                            </span>
                        </div>
                        <div className={styles.frame2__content__listAct__right}>
                            <p className={styles.frame2__content__listAct__right__date}>{item.date}</p>
                            <h6 className={styles.frame2__content__listAct__right__sentence}>{item.sentence}</h6>
                            <div className={`${item.file ? styles.frame2__content__listAct__right__image : styles.frame2__content__listAct__right__image__none}`}>
                                {item.file && Array(item.file).fill(null).map((_, i) => (
                                    <div className={styles.frame2__content__listAct__right__image__item} key={i}></div>
                                ))}
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    );
}
 
export default Child1;