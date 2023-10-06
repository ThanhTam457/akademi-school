'use client'
import { useState } from 'react';
import styles from '../../../../styles/finance.module.scss';
import Paginate from '@/app/components/Paginate/Paginate';

const Child2 = () => {
    const [totalPage, setTotalPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    function handlePageClick(event: {selected: number}) {
        setCurrentPage(event.selected)
    }

    interface ISchoolExpense {
        id: string,
        date: string,
        cost: string,
        status: string,
    }

    const schoolExpense : ISchoolExpense[] = [
        {id: '123456789', date: '2 March 2021, 13:45 PM', cost: '$ 50,036', status: 'completed'},
        {id: '123456789', date: '2 March 2021, 13:45 PM', cost: '$ 50,036', status: 'pending'},
        {id: '123456789', date: '2 March 2021, 13:45 PM', cost: '$ 50,036', status: 'cancelled'},
        {id: '123456789', date: '2 March 2021, 13:45 PM', cost: '$ 50,036', status: 'completed'},
        {id: '123456789', date: '2 March 2021, 13:45 PM', cost: '$ 50,036', status: 'completed'},
        {id: '123456789', date: '2 March 2021, 13:45 PM', cost: '$ 50,036', status: 'completed'},
    ];

    
    return (  
        <div className={styles.frame4__content__child2}>
            <h5 className={styles.frame4__content__child2__title}>School Expense</h5>
            <div className={styles.frame4__content__child2__container}>
                <table className={styles.frame4__content__child2__container__table}>
                    <tbody className={styles.frame4__content__child2__container__table__body}>
                        {schoolExpense.map((expense, index) => (
                            <tr className={styles.frame4__content__child2__container__table__body__row} key={index}>
                                <td className={styles.frame4__content__child2__container__table__body__row__item}>
                                    <div className={styles.frame4__content__child2__container__table__body__row__item__container1}>
                                        <div className={styles.frame4__content__child2__container__table__body__row__item__container1__icon}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                <g clip-path="url(#clip0_20_16)">
                                                    <path d="M28.0004 9.33333C28.013 9.24043 28.013 9.14624 28.0004 9.05333C27.9888 8.97505 27.9664 8.89877 27.9337 8.82667C27.8985 8.7615 27.8584 8.6991 27.8137 8.64C27.763 8.55567 27.7001 8.47929 27.6271 8.41333L27.4671 8.32C27.3901 8.26261 27.3046 8.21762 27.2137 8.18667H26.9471C26.8658 8.10799 26.7709 8.04474 26.6671 8H20.0004C19.6468 8 19.3076 8.14048 19.0576 8.39052C18.8075 8.64057 18.6671 8.97971 18.6671 9.33333C18.6671 9.68696 18.8075 10.0261 19.0576 10.2761C19.3076 10.5262 19.6468 10.6667 20.0004 10.6667H23.7737L18.4404 16.9467L12.6804 13.52C12.4076 13.3577 12.0858 13.2981 11.773 13.3519C11.4601 13.4057 11.1767 13.5693 10.9737 13.8133L4.30706 21.8133C4.19479 21.9481 4.1102 22.1036 4.05815 22.2711C4.00609 22.4386 3.98758 22.6147 4.00368 22.7893C4.01978 22.9639 4.07017 23.1337 4.15198 23.2888C4.23378 23.4439 4.34538 23.5814 4.48039 23.6933C4.72028 23.8921 5.02219 24.0006 5.33373 24C5.52961 24.0003 5.72315 23.9575 5.9006 23.8745C6.07804 23.7915 6.23503 23.6705 6.36039 23.52L12.2937 16.4L17.9871 19.8133C18.2571 19.9735 18.575 20.0332 18.8848 19.982C19.1945 19.9308 19.4763 19.7719 19.6804 19.5333L25.3337 12.9333V16C25.3337 16.3536 25.4742 16.6928 25.7242 16.9428C25.9743 17.1929 26.3134 17.3333 26.6671 17.3333C27.0207 17.3333 27.3598 17.1929 27.6099 16.9428C27.8599 16.6928 28.0004 16.3536 28.0004 16V9.33333Z" fill="#FCFCFC"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_20_16">
                                                    <rect width="32" height="32" fill="white"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className={styles.frame4__content__child2__container__table__body__row__item__container1__text}>
                                            <h6>#{expense.id}</h6>
                                            <p>{expense.date}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className={styles.frame4__content__child2__container__table__body__row__item}>
                                    <h6>{expense.cost}</h6>
                                </td>
                                <td className={styles.frame4__content__child2__container__table__body__row__item}>
                                    {expense.status === 'completed' ? (<h6 className={styles['frame4__content__child2__container__table__body__row__item--green']}>Completed</h6>) : expense.status === 'pending' ? (<h6 className={styles['frame4__content__child2__container__table__body__row__item--grey']}>Pending</h6>) : (<h6 className={styles['frame4__content__child2__container__table__body__row__item--red']}>Cancelled</h6>)}
                                </td>
                            </tr>
                        ))}

                    </tbody>

                </table>
                <div className={styles.frame4__content__child2__container__footer}>
                    <p>Showing 1-5 from 100 data</p>
                    <div className={styles.frame4__content__child2__container__footer__paginate}>
                        <Paginate handlePageClick={handlePageClick} pageCount={3} currentPage={0}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Child2;