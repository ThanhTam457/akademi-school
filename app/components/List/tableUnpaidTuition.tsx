import styles from '../../styles/list.module.scss';
import UserIcon from '../Logo/userIcon';

interface IUnpaidStudentIntuition {
    name: string,
    id: string,
    class: string,
    cost: string,
}

interface Props {
    unpaidStudent: IUnpaidStudentIntuition[];
}

const TableUnpaidTuition = ({unpaidStudent}: Props) => {
    return (  
        <table className={styles.table__container}>
                    <tbody className={styles.table__container__body}>
                        {unpaidStudent.map((student, index) => (
                            <tr className={styles.table__container__body__row} key={index}>
                                <td className={styles.table__container__body__row__item}>
                                    <div className={styles.table__container__body__row__item__avatar}>
                                        
                                    </div>
                                </td>
                                <td className={styles.table__container__body__row__item}>
                                    <h6>{student.name}</h6>
                                </td>
                                <td className={styles.table__container__body__row__item}>
                                    <h6 className={styles.table__container__body__row__item__id}>ID {student.id}</h6>
                                </td>
                                <td className={styles.table__container__body__row__item}>
                                    <div className={styles.table__container__body__row__item__container1}>
                                        <div className={styles.table__container__body__row__item__container1__icon}>
                                            <UserIcon />
                                        </div>
                                        <div className={styles.table__container__body__row__item__container1__text}>
                                            <p>Class</p>
                                            <h6>{student.class}</h6>
                                        </div>
                                    </div>
                                </td>
                                <td className={styles.table__container__body__row__item}>
                                    <h6>{student.cost}</h6>
                                </td>
                                <td className={styles.table__container__body__row__item}>
                                    <button className={styles.table__container__body__row__item__button}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M12.0012 9.36C11.6543 9.36 11.3109 9.42832 10.9904 9.56105C10.67 9.69378 10.3788 9.88833 10.1335 10.1336C9.88829 10.3788 9.69374 10.67 9.56101 10.9905C9.42828 11.3109 9.35996 11.6544 9.35996 12.0012C9.35996 12.348 9.42828 12.6915 9.56101 13.0119C9.69374 13.3324 9.88829 13.6236 10.1335 13.8688C10.3788 14.1141 10.67 14.3086 10.9904 14.4414C11.3109 14.5741 11.6543 14.6424 12.0012 14.6424C12.7017 14.6422 13.3734 14.3638 13.8686 13.8684C14.3638 13.373 14.6419 12.7011 14.6418 12.0006C14.6416 11.3001 14.3632 10.6284 13.8677 10.1332C13.3723 9.63796 12.7004 9.35984 12 9.36H12.0012ZM3.60116 9.36C3.25431 9.36 2.91086 9.42832 2.59042 9.56105C2.26997 9.69378 1.97881 9.88833 1.73355 10.1336C1.48829 10.3788 1.29374 10.67 1.16101 10.9905C1.02828 11.3109 0.959961 11.6544 0.959961 12.0012C0.959961 12.348 1.02828 12.6915 1.16101 13.0119C1.29374 13.3324 1.48829 13.6236 1.73355 13.8688C1.97881 14.1141 2.26997 14.3086 2.59042 14.4414C2.91086 14.5741 3.25431 14.6424 3.60116 14.6424C4.30165 14.6422 4.97339 14.3638 5.4686 13.8684C5.9638 13.373 6.24192 12.7011 6.24176 12.0006C6.2416 11.3001 5.96318 10.6284 5.46775 10.1332C4.97231 9.63796 4.30045 9.35984 3.59996 9.36H3.60116ZM20.4012 9.36C20.0543 9.36 19.7109 9.42832 19.3904 9.56105C19.07 9.69378 18.7788 9.88833 18.5336 10.1336C18.2883 10.3788 18.0937 10.67 17.961 10.9905C17.8283 11.3109 17.76 11.6544 17.76 12.0012C17.76 12.348 17.8283 12.6915 17.961 13.0119C18.0937 13.3324 18.2883 13.6236 18.5336 13.8688C18.7788 14.1141 19.07 14.3086 19.3904 14.4414C19.7109 14.5741 20.0543 14.6424 20.4012 14.6424C21.1017 14.6422 21.7734 14.3638 22.2686 13.8684C22.7638 13.373 23.0419 12.7011 23.0418 12.0006C23.0416 11.3001 22.7632 10.6284 22.2677 10.1332C21.7723 9.63796 21.1005 9.35984 20.4 9.36H20.4012Z" fill="#A098AE"/>
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
    );
}
 
export default TableUnpaidTuition;