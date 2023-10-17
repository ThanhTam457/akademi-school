'use client'
import styles from '../../../../../../../styles/dashboard.module.scss';
import Chart from "chart.js/auto";
import { CategoryScale, ScriptableContext } from "chart.js";
import { useState } from 'react';
import { Data2 } from '../../../../../../../data/data'; 
import { BarChart } from '../../../../../../../chart/Chart';
Chart.register(CategoryScale);


const Child2 = () => {
    const [chartData2, setChartData2] = useState({
        labels: Data2.map((data) => data.date),
        datasets: [
            {
                label: "Last week",
                data: Data2.map((data) => data.Lastweek),
                backgroundColor: "#FB7D5B",
                borderRadius: 8,
                //barThickness: 10,
                barPercentage: 0.8,
                
            },
            {
                label: "This week",
                data: Data2.map((data) => data.Thisweek),
                backgroundColor: "#FCC43E",
                borderRadius: 8,
                //barThickness: 10,
                barPercentage: 0.8,
            },
        ]
    });
    return (  
        <div className={styles. frame1__content__left__child3__child2}>
            <div className={styles.frame1__content__left__child3__child2__title}>
                <h5>School Finance</h5>
                <BarChart chartData={chartData2} />
            </div>
        </div>
    );
}
 
export default Child2;