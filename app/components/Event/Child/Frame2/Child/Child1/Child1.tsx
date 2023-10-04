import DropdownIcon from '@/app/components/Logo/dropdownIcon';
import styles from '../../../../../../styles/event.module.scss';
import { Day } from './Day';

const Child1 = () => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
    interface Date {
        event: string, //event is background color or border color. If event is undefined, then it is a day with no event
        day: number,
        people: number, //people is the number of people in the event, if people is 0, then it is no display people
    }

    function randomIntFromInterval() { // min and max included 
        return Math.floor(Math.random() * (10 - 1 + 1) + 1)
    } 

    const dates: Date[] = [];
    for (let i = 1; i <= 31; i++) {
        if(i==2 || i==5 || i==15 || i==18 || i==24 || i==29 ) {
            dates.push({day: i, event: 'borderText', people: randomIntFromInterval()});
            continue;
        }
        else if(i==6) {
            dates.push({day: i, event: 'bgOrange', people: 0});
            continue;
        }

        else if(i==10) {
            dates.push({day: i, event: 'bgPurple', people: 0});
            continue;
        }
        else if(i==20) {
            dates.push({day: i, event: 'borderYellow', people: randomIntFromInterval()});
            continue;
        }
        else dates.push({day: i, event: 'none', people: 0});
    }

    return (  
        <div className={styles.child1__content}>
            <div className={styles.child1__content__header}>
                <h3 className={styles.child1__content__header__text}>Calendar</h3>
                <div className={styles.child1__content__header__items}>
                    <button className={styles[`child1__content__header__items__button--outline`]}>
                        January 
                        <DropdownIcon/>
                    </button>
                    <button className={styles[`child1__content__header__items__button--outline`]}>
                        2021
                        <DropdownIcon/>
                    </button>
                    <button className={styles[`child1__content__header__items__button--filled`]}>
                        <div className={styles[`child1__content__header__items__button--add`]}>
                            +
                        </div>
                        New Student
                    </button>
                </div>
            </div>
            <div className={styles.child1__content__body}>
                <div className={styles.child1__content__body__days}>
                    {days.map((day, index) => (
                        <span key={index} className={styles.child1__content__body__days__day}>{day}</span>
                    ))}
                </div>
                <div className={styles.child1__content__body__dates}>
                    {dates.map((date, index) => (
                        <Day key={index} event={date.event} day={date.day} people={date.people}/>
                    ))}

                    
                </div>
            </div>
        </div>
    );
}
 
export default Child1;