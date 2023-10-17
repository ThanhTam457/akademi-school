'use client'

import styles from '../../../styles/finance.module.scss';
import ListContent from '../../List/listContent';
import FinanceIcon from '../../Logo/financeIcon';
import StudentIcon from '../../Logo/studentIcon';
import TeacherIcon from '../../Logo/teacherIcon';
import Chart from "chart.js/auto";
import { CategoryScale, ScriptableContext } from "chart.js";
import { useState } from 'react';
import { Data3 } from '../../../data/data';
import {LineChart2} from '../../../chart/Chart';
Chart.register(CategoryScale);

const Frame2 = () => {
    interface IContent {
        logo: React.ReactNode,
        name: string,
        number: string,
        rate: number,
        color: string,
        chart ? : React.ReactNode,
    }

    const [chartData, setChartData] = useState({
        labels: Data3.map((data) => data.date),
        datasets: [
            {
                label: "Income",
                data: Data3.map((data) => data.Income),
                backgroundColor: "#4CBC9A",
                borderColor: "#4CBC9A",
                borderWidth: 5,
                pointStyle: "circle",
                pointBorderColor: 'rgba(0, 0, 0, 0)',
                pointBackgroundColor: 'rgba(0, 0, 0, 0)',
                tension: 0.35,
                fill: {
                    target: 'origin',
                    above:  (context: ScriptableContext<"line">) => { const ctx = context.chart.ctx; const gradient = ctx.createLinearGradient(0, 0, 0, 200); gradient.addColorStop(0, "rgba(76, 188, 154, 0.3)"); gradient.addColorStop(1, "rgba(76, 188, 154, 0)"); return gradient; },
                },
                
            },
        ]
    });
    const content: IContent[] = [
        {logo: <StudentIcon/>, name: "Total Students", number: "932", rate: +10, color: "purple"},  
        {logo: <TeacherIcon/>, name: "Total Teachers", number: "754", rate: -0.5, color: "orange"},
        {logo: <FinanceIcon/>, name: "School Balance", number: "$123,456", rate: +23, color: "yellow", 
        chart: 
        <div className={styles.frame2__content__chart1}>
            <LineChart2 chartData={chartData} />
        </div>
      },
    ];

    return (  
        <div className={styles.frame2__content}>
            <ListContent content={content}/>
        </div>
    );
}
 
export default Frame2;