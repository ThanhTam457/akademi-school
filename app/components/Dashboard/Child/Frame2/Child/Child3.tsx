import styles from '../../../../../styles/dashboard.module.scss';

const Child3 = () => {
    interface Food {
        name: string,
        description: string,
    }

    const foods: Food[] = [
        {name: 'Beef Steak with Fried Potato', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'},
        {name: 'Pancake with Honey', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'},
        {name: 'Japanese Beef Ramen', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'},
    ];

    return (  
        <div className={styles.frame2__content__child3}>
            <div className={styles.frame2__content__child3__title}>
                <h5>Current Foods Menu</h5>
            </div>
            {foods.map((food, index) => (
                <div className={styles.frame2__content__child3__body} key={index}>
                    <div className={styles.frame2__content__child3__body__avatar}>
                        
                    </div>
                    <h6>{food.name}</h6>
                    <p className={styles.frame2__content__child3__body__descrip}>{food.description}</p>
                </div>
            ))}
            <button className={styles.frame2__content__child3__button}>
                View more
            </button>
        </div>
    );
}
 
export default Child3;