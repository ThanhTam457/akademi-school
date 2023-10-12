import DropdownIcon from '@/app/components/Logo/dropdownIcon';
import styles from '../../../../styles/students.module.scss';
import Link from 'next/link';

const Frame2 = () => {
    return (  
        <div className={styles.frame2__content}>
            <input type="text" placeholder='Search here...' className={styles.frame2__content__input}/>
            <div className={styles.frame2__content__item}>
                <button className={styles[`frame2__content__item__button--outline`]}>
                    Newest
                    <DropdownIcon/>
                </button>
                <Link href={`/students/add`} style={{textDecoration: "none"}}>
                    <button className={styles[`frame2__content__item__button--filled`]}>
                        <div className={styles[`frame2__content__item__button--add`]}>
                            +
                        </div>
                        New Student
                    </button>
                </Link>
            </div>
        </div>
    );
}
 
export default Frame2;