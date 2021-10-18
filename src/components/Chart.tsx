import React,{Component} from 'react';
import { Bar,Line,Pie } from 'react-chartjs-2';
 interface Props {
    chartData:any

 }
 interface State {
    chartData:any
    

 }

export default class Chart extends Component <State,Props>{
    constructor(props){
        super(props);
        this.state={
            chartData:{
            labels:['fdhfghfghj',
                'sdsa','gdshgdf','hfuew','iutyito','uytijfdkg','cnxnj']
            ,
            dataSets:[
                {
                    label:'population',
                    data:[
                        54787,
                        787689,
                        2432,
                        6765,
                        98706,
                        435667
                    ],
                    backgroundColor:[
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                    ]
                }
            ]

        }
    }}
    
    render(){
        
        return(
            
            <div className="chart">
                
                <Bar
                data={this.state.chartData}
                
                options={{maintainAspectRatio: false}}
                />
            </div>
        )
    }
}