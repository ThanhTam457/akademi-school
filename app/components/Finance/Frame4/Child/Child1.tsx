'use client'
import TableUnpaidTuition from '@/app/components/List/tableUnpaidTuition';
import styles from '../../../../styles/finance.module.scss';
import UserIcon from '@/app/components/Logo/userIcon';
import Paginate from '@/app/components/Paginate/Paginate';
import { useState } from 'react';

const Child1 = () => {
    const [totalPage, setTotalPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    function handlePageClick(event: {selected: number}) {
        setCurrentPage(event.selected)
    }
    
    interface IUnpaidStudentIntuition {
        name: string,
        id: string,
        class: string,
        cost: string,
    }
    
    const unpaidStudent : IUnpaidStudentIntuition[] = [
        {name: 'Samantha W.', id: '123456789', class: 'VII A', cost: '$ 50,036'},
        {name: 'Tony Soap', id: '123456789', class: 'VII A', cost: '$ 50,036'},
        {name: 'Jordan Nico', id: '123456789', class: 'VII A', cost: '$ 50,036'},
        {name: 'Karen Hope', id: '123456789', class: 'VII A', cost: '$ 50,036'},
        {name: 'Nadila Adja', id: '123456789', class: 'VII A', cost: '$ 50,036'},
    ];

    return (  
        <div className={styles.frame4__content__child1}>
            <h5 className={styles.frame4__content__child1__title}>Unpaid Student Intuition</h5>
            <div className={styles.frame4__content__child1__container}>
                <TableUnpaidTuition unpaidStudent={unpaidStudent}/>
                <div className={styles.frame4__content__child1__container__footer}>
                    <p>Showing 1-5 from 100 data</p>
                    <div className={styles.frame4__content__child1__container__footer__paginate}>
                        <Paginate handlePageClick={handlePageClick} pageCount={3} currentPage={0}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Child1;