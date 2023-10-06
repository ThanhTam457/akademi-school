import styles from '../../styles/list.module.scss';

interface IContent {
    logo: React.ReactNode,
    name: string,
    number: string,
    rate: number,
    color: string,
    chart ? : React.ReactNode,
}

interface Props {
    content: IContent[],
}

const ListContent = ({content}: Props): React.ReactNode => {
    return (  
        <>
            {content.map((item, index) => {
                return (
                    <div className={styles.listContent} key={index}>
                        <div className={styles[`listContent__logo--${item.color}`]}>
                            {item.logo}
                        </div>
                        <div className={styles.listContent__data}>
                            <p className={styles.listContent__data__title}>{item.name}</p>
                            <h3 className={styles.listContent__data__number}>{item.number}</h3>
                            <p className={styles.listContent__data__rate}><span className={`${item.rate <= 0 ? " " + styles["listContent__data__rate--red"]: styles["listContent__data__rate--green"]}`}>{item.rate}%</span> than last month</p>
                        </div>
                        <div className={`${item.chart ? " " + styles.listContent__data__chart : styles["listContent__data__chart--none"]}`}>
                            {item.chart}
                        </div>
                    </div>
                )
            })}
        </>
    );
}
 
export default ListContent;