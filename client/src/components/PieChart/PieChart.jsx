import React from 'react'
import { Pie, defaults  } from "react-chartjs-2"
import './PieChart.scss'


function PieChart({ data }) {
    const peopleAffected = () => {
        console.log(data)
    }
    return (
        <div className="pie">
            <Pie
                data={{
                    labels: ['Email', 'Network', 'others'],
                    datasets: [{
                        label: "Breaches",
                        strokeColor: "rgba(255,255,255,1)",
                        fillColor: "rgba(50,182,93,0.5)",
                        
                        data: [data.email.length, data.networkServer.length, data.others.length],
                        backgroundColor: [
                            'rgba(255, 99, 132, 10)',
                            'rgba(229, 198, 70, 10)',
                            'rgba(0, 96, 151, 10)',
                        ],
                        fontColor: 'rgba(0, 96, 151, 10)',
                    },
                    ]
                }}
                
                options={{

                    scales: {
                        yAxes: [
                          {
                            ticks: {
                              beginAtZero: true,
                            },
                          },
                        ],
                      },
            
                        legend: {
                            labels: {
                                fontSize: 10,
                                fontColor: "white", 
                            }
                        }
                }}
            />
            <h5 style={{ padding: "2.4rem" }}>Pie Chart</h5>
        </div>
    )
}

export default PieChart
