'use client'
import styles from '../../../styles/finance.module.scss';
import Chart from "chart.js/auto";
import { CategoryScale, ScriptableContext } from "chart.js";
import { useState } from 'react';
import { Data1 } from '../../../data/data'; 
import {LineChart} from '../../../chart/Chart';
Chart.register(CategoryScale);

const Frame3 = () => {
    const [chartData1, setChartData1] = useState({
        labels: Data1.map((data) => data.month),
        datasets: [
            {
                label: "Income",
                data: Data1.map((data) => data.Income),
                backgroundColor: [
                    "#fff",
                    "#FB7D5B",
                    
                ],
                borderColor: "#FB7D5B",
                borderWidth: 5,
                pointStyle: "circle",
                pointBorderColor: 'rgba(0, 0, 0, 0)',
                pointBackgroundColor: 'rgba(0, 0, 0, 0)',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#FB7D5B',
                pointHoverRadius: 7,
                pointHoverBorderWidth: 5,
                tension: 0.35,
                fill: {
                    target: 'origin',
                    above:  (context: ScriptableContext<"line">) => { const ctx = context.chart.ctx; const gradient = ctx.createLinearGradient(0, 0, 0, 200); gradient.addColorStop(0, "rgba(251, 125, 91, 1)"); gradient.addColorStop(1, "rgba(251, 125, 91, 0)"); return gradient; },
                },
                
            },
            {
                label: "Expense",
                data: Data1.map((data) => data.Expense),
                backgroundColor: "#fff",
                borderColor: "#FCC43E",
                borderWidth: 5,
                pointStyle: "circle",
                pointBorderColor: 'rgba(0, 0, 0, 0)',
                pointBackgroundColor: 'rgba(0, 0, 0, 0)',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#FCC43E',
                pointHoverRadius: 7,
                pointHoverBorderWidth: 5,
                tension: 0.35,
                fill: {
                    target: 'origin',
                    above:  (context: ScriptableContext<"line">) => { const ctx = context.chart.ctx; const gradient = ctx.createLinearGradient(0, 0, 0, 200); gradient.addColorStop(0, "rgba(252, 196, 62, 1)"); gradient.addColorStop(1, "rgba(252, 196, 62, 0)"); return gradient; },
                },
            },
        ]
    });

    return (  
        <div className={styles.frame3__content}>
            <div className={styles.frame3__content__title}>
                <h5>Balance Analytics</h5>
                <LineChart chartData={chartData1} />
            </div>
        </div>
    );
}
 
export default Frame3;
