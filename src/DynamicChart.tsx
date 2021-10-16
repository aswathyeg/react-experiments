import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2';
import type * as Chart from 'chart.js';
//import { LinearTickOptions } from 'chart.tsx';

const DynamicChart = () => {
    const [chartData, setChartData] = useState<any>({});
   // React.useState<IProductItem[] | undefined>()
    const [employeeSalary, setEmployeeSalary] = useState([]);
    const [employeeAge, setEmployeeAge] = useState([]);

    const barchartOptions={
      responsive: true,
    title: { text: "THICCNESS SCALE", display: true },
    scales: {
      yAxes: [
        {
          ticks: {
            autoSkip: true,
            maxTicksLimit: 10,
            beginAtZero: true,
            
          },
          gridLines: {
            display: false
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            display: false
          }
        }
      ]},}
    const Chart = () => {
        let studentClassId = [];
        let studentsCount = [];
        

        axios.get("http://localhost:8080/dashboards")
            .then(res => {
                console.log(res);
                for (const dataObj of res.data.data) {
                    studentClassId.push(parseInt(dataObj.ClassId));
                    studentsCount.push(parseInt(dataObj.StudentCount));

                }
                setChartData({
                    labels: studentClassId,
                    datasets: [{
                        label: 'level of thicceness',
                        data: studentsCount,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                        ],
                        borderWidth: 1
                    }]
                });
            })
            .catch(err => {
                console.log(err);
            })
           // console.log(studentClassId,studentsCount)
    }
    useEffect(() => {
        Chart();
    }, []);

    return (
        <div>
            <h1>Bar Chart</h1>
            <div>
              {typeof chartData!=='undefined'&& chartData.length!== 0 ? 
                <Bar type="bar" data={chartData} options={barchartOptions} height={300}/>
                                
                :""}
            </div>
        </div>
    )
}

export default DynamicChart;