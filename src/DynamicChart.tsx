import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2';
import type * as Chart from 'chart.js';


const DynamicChart = (props) => {
    const [chartData, setChartData] = useState<any>({});
   // React.useState<IProductItem[] | undefined>()
    const [employeeSalary, setEmployeeSalary] = useState([]);
    const [employeeAge, setEmployeeAge] = useState([]);
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
    }
    useEffect(() => {
        Chart();
    }, []);

    return (
        <div>
            <h1>Bar Chart</h1>
            <div>
                <Bar
                    data={chartData}
                    options={{
                        responsive: true,
                        //title: { text: "THICCNESS SCALE", display: true },
                        scales: {
                            yAxes: {
                                ticks: {
                                   // beginAtZero: true
                                }
                            }
                        }
                    }}
                />
            </div>
        </div>
    )
}

export default DynamicChart;