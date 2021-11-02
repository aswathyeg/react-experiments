import axios from 'axios';
import { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2';

const ChartExample = () => {
    const [chartData, setChartData] = useState({});
    const Chart = () => {
        let classId = [];
        let noOfStudents = [];

        axios.get("http://localhost:8080/classes")
            .then(response => {
                console.log(response);

                for (const dataObj of response.data.classes) {
                    classId.push(parseInt(dataObj.class_id));
                    noOfStudents.push(parseInt(dataObj.no_of_students));

                }

                setChartData({
                    labels: noOfStudents,
                    datasets: [{

                        label: 'Bar chart',
                        data: classId,
                        backgroundColor: [
                            'pink',
                            'cyan',

                        ],
                        borderColor: [
                            'pink',
                            'cyan',

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
        <div className="App">
            <h1>Class Details</h1>
            <div>
                <Bar
                    data={chartData}
                    options={{
                        responsive: true,
                         title: { text: "Bar chart", display: true },
                        scales: {
                            yAxes: {
                                ticks: {
                                    beginAtZero: true
                                }
                            }
                        }
                    }}
                />
            </div>
        </div>
    )
}
export default ChartExample;