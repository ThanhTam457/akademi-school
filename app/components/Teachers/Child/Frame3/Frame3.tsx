'use client'
import { useState } from 'react';
import styles from '../../../../styles/teachers.module.scss';
import Paginate from '@/app/components/Paginate/Paginate';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Frame3 = () => {
    interface ITeacher {
        name: string,
        subject: string,
    }

    const teachers : ITeacher[] = [
        {name: 'Dimitres Vigan', subject: 'Mathematics'},
        {name: 'Tom Housenburg', subject: 'Science'},
        {name: 'Dana Benevista', subject: 'Art'},
        {name: 'Salvadore Morbeau', subject: 'Biology'},
        {name: 'Maria Historia', subject: 'History'},
        {name: 'Jack Sally', subject: 'Physics'},
        {name: 'Lula Beatrice', subject: 'Algorithm'},
        {name: 'Nella Vita', subject: 'Engilsh'},
        {name: 'Nadia Laravela', subject: 'Programming'},
        {name: 'Dakota Farral', subject: 'Science'},
        {name: 'Miranda Adila', subject: 'Art'},
        {name: 'Indiana Barker', subject: 'Biology'},
        {name: 'Jack Sally', subject: 'Physics'},
        {name: 'Lula Beatrice', subject: 'Algorithm'},
        {name: 'Nella Vita', subject: 'Engilsh'},

    ];


    const [totalPage, setTotalPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    function handlePageClick(event: {selected: number}) {
        setCurrentPage(event.selected)
    }

    return (  
        <div className={styles.frame3__content}>
            {teachers.map((teacher, index) => (
                <Link style={{textDecoration: "none"}} href={`/teachers/${index}`} key={index}>
                    <div key={index} className={styles.frame3__content__card}>
                        <div className={styles.frame3__content__card__action}>...</div>
                        <div className={styles.frame3__content__card__avatar}></div>
                        <div className={styles.frame3__content__card__name}>{teacher.name}</div>
                        <div className={styles.frame3__content__card__subject}>{teacher.subject}</div>
                        <div className={styles.frame3__content__card__buttons}>
                            <button className={styles.frame3__content__card__buttons__button}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M19.4401 13C19.2201 13 18.9901 12.93 18.7701 12.88C18.3246 12.7818 17.8868 12.6515 17.4601 12.49C16.9962 12.3212 16.4862 12.33 16.0284 12.5146C15.5706 12.6992 15.1972 13.0466 14.9801 13.49L14.7601 13.94C13.7861 13.3982 12.8911 12.7252 12.1001 11.94C11.3149 11.149 10.6419 10.254 10.1001 9.27999L10.5201 8.99999C10.9635 8.78291 11.3109 8.40952 11.4955 7.95168C11.6801 7.49384 11.6889 6.9839 11.5201 6.51999C11.3613 6.09241 11.231 5.65479 11.1301 5.20999C11.0801 4.98999 11.0401 4.75999 11.0101 4.52999C10.8887 3.82561 10.5197 3.18773 9.96972 2.73123C9.41972 2.27473 8.7248 2.0296 8.0101 2.03999H5.0101C4.57913 2.03594 4.15235 2.1248 3.75881 2.30052C3.36527 2.47624 3.01421 2.73469 2.72953 3.05827C2.44485 3.38186 2.23324 3.76298 2.10909 4.1757C1.98494 4.58842 1.95118 5.02305 2.0101 5.44999C2.54284 9.63937 4.45613 13.5319 7.44775 16.5126C10.4394 19.4934 14.3388 21.3925 18.5301 21.91H18.9101C19.6475 21.9111 20.3595 21.6405 20.9101 21.15C21.2265 20.867 21.4792 20.5202 21.6516 20.1323C21.8239 19.7444 21.9121 19.3244 21.9101 18.9V15.9C21.8979 15.2054 21.6449 14.5365 21.1944 14.0077C20.744 13.4788 20.1239 13.1226 19.4401 13ZM19.9401 19C19.9399 19.142 19.9095 19.2823 19.8509 19.4116C19.7923 19.5409 19.7068 19.6563 19.6001 19.75C19.4884 19.8465 19.3577 19.9185 19.2165 19.9616C19.0753 20.0046 18.9267 20.0177 18.7801 20C15.035 19.5198 11.5563 17.8065 8.89282 15.1303C6.2293 12.4541 4.53251 8.96733 4.0701 5.21999C4.05419 5.07351 4.06813 4.92532 4.1111 4.78438C4.15407 4.64344 4.22517 4.51268 4.3201 4.39999C4.41381 4.29332 4.52916 4.20783 4.65848 4.14921C4.7878 4.09058 4.92812 4.06017 5.0701 4.05999H8.0701C8.30265 4.05482 8.52972 4.13087 8.71224 4.27506C8.89476 4.41925 9.02131 4.62256 9.0701 4.84999C9.1101 5.12332 9.1601 5.39332 9.2201 5.65999C9.33562 6.18713 9.48936 6.70517 9.6801 7.20999L8.2801 7.85999C8.1604 7.91491 8.05272 7.99294 7.96326 8.08959C7.87379 8.18623 7.8043 8.2996 7.75877 8.42318C7.71324 8.54677 7.69257 8.67812 7.69795 8.80971C7.70332 8.9413 7.73464 9.07054 7.7901 9.18999C9.2293 12.2727 11.7073 14.7508 14.7901 16.19C15.0336 16.29 15.3066 16.29 15.5501 16.19C15.6748 16.1454 15.7894 16.0764 15.8873 15.9872C15.9851 15.8979 16.0643 15.7901 16.1201 15.67L16.7401 14.27C17.2571 14.4549 17.7847 14.6085 18.3201 14.73C18.5868 14.79 18.8568 14.84 19.1301 14.88C19.3575 14.9288 19.5608 15.0553 19.705 15.2378C19.8492 15.4204 19.9253 15.6474 19.9201 15.88L19.9401 19Z" fill="white"/>
                                </svg>
                            </button>
                            <button className={styles.frame3__content__card__buttons__button}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M20 4H4C3.20435 4 2.44129 4.31607 1.87868 4.87868C1.31607 5.44129 1 6.20435 1 7V17C1 17.7956 1.31607 18.5587 1.87868 19.1213C2.44129 19.6839 3.20435 20 4 20H20C20.7956 20 21.5587 19.6839 22.1213 19.1213C22.6839 18.5587 23 17.7956 23 17V7C23 6.20435 22.6839 5.44129 22.1213 4.87868C21.5587 4.31607 20.7956 4 20 4ZM21 16.75L16.1 12.35L21 8.92V16.75ZM3 8.92L7.9 12.35L3 16.75V8.92ZM9.58 13.53L11.43 14.82C11.5974 14.9361 11.7963 14.9984 12 14.9984C12.2037 14.9984 12.4026 14.9361 12.57 14.82L14.42 13.53L19.42 18H4.6L9.58 13.53ZM4 6H20C20.1857 6.00149 20.3674 6.05467 20.5245 6.15358C20.6817 6.25249 20.8083 6.39322 20.89 6.56L12 12.78L3.11 6.56C3.19171 6.39322 3.31826 6.25249 3.47545 6.15358C3.63265 6.05467 3.81428 6.00149 4 6Z" fill="white"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </Link>
            ))}
            <p className={styles.frame3__content__data}>
                Showing 1-5 from 100 data
            </p>
            <div className={styles.frame3__content__paginate}>
                <Paginate handlePageClick={handlePageClick} pageCount={3} currentPage={0}/>
            </div>
        </div>
    );
}
 
export default Frame3;