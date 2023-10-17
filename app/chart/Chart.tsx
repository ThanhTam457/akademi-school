import React from "react";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";

export const LineChart = ({chartData}: any) => {
    return (  
        <Line
            data={chartData}
            options={{
            plugins: {
                title: {
                display: false,
                text: "Income and expense"
                },
                legend: {
                    display: true,
                    align: 'end',
                    labels: {
                        boxHeight: 10,
                        boxWidth: 10,
                        useBorderRadius: true,
                        borderRadius: 5,       
                    },
                },
                tooltip: {
                    backgroundColor: "#4D44B5",
                    titleColor: "#fff",
                    titleAlign: "center",
                    displayColors: false,
                    callbacks: {
                        label: function(context) {
                            let label = '';
    
                            if (context.parsed.y !== null) {
                                label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                            }
                            return label;
                        },
                        footer: function(context) {
                            let footer = '';
    
                            if (context[0].parsed.x !== null) {
                                footer += context[0].label + ' ' + '2020';
                            }
                            return footer;
                        },
                       
                    },       
                    titleFont: {
                        size: 0,
                    },
                    padding: 10,   
                    bodyFont: {
                        weight: 'bold',
                    },   
                    footerFont: {
                        weight: '400',
                    },      
                    bodyAlign: 'center',
                    footerAlign: 'center',
                    
                }
            },
            // scales: {
            //     y: {
            //         type: 'linear',
            //         display: true,
            //         position: 'left',
            //     },
            //     y1: {
            //         type: 'linear',
            //         display: false,
            //         position: 'left',
            //         grid: {
            //             drawOnChartArea: false,
            //         },
            //     },
            // },
            responsive: true,
            maintainAspectRatio: false,
            hover: {
                intersect: false,
            },
            
            }}
        />
    );
}
 
export const BarChart = ({chartData}: any) => {
    return (
        <Bar
            data={chartData}
            options={{
            plugins: {
                title: {
                display: false,
                text: "Income and expense"
                },
                legend: {
                    display: true,
                    align: 'end',
                    labels: {
                        boxHeight: 10,
                        boxWidth: 10,
                        useBorderRadius: true,
                        borderRadius: 5,       
                    },
                },
                tooltip: {
                    backgroundColor: "#4D44B5",
                    titleColor: "#fff",
                    titleAlign: "center",
                    displayColors: false,
                    callbacks: {
                        label: function(context) {
                            let label = '';

                            if (context.parsed.y !== null) {
                                label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                            }
                            return label;
                        },
                        footer: function(context) {
                            let footer = '';

                            if (context[0].parsed.x !== null) {
                                footer += context[0].label + ' ' + '2020';
                            }
                            return footer;
                        },
                    
                    },       
                    titleFont: {
                        size: 0,
                    },
                    padding: 10,   
                    bodyFont: {
                        weight: 'bold',
                    },   
                    footerFont: {
                        weight: '400',
                    },      
                    bodyAlign: 'center',
                    footerAlign: 'center',
                },
            },
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: {
                    right: 10,
                }
            }
            }}
        />
    );
}

export const LineChart2 = ({chartData}: any) => {
    return (
        <Line
            data={chartData}
            options={{
            plugins: {
                title: {
                display: false,
                text: "Income and expense"
                },
                legend: {
                    display: false,
                    align: 'end',
                    labels: {
                        boxHeight: 10,
                        boxWidth: 10,
                        useBorderRadius: true,
                        borderRadius: 5,       
                    },
                },
                tooltip: {
                    backgroundColor: "#4D44B5",
                    titleColor: "#fff",
                    titleAlign: "center",
                    displayColors: false,
                    callbacks: {
                        label: function(context) {
                            let label = '';
    
                            if (context.parsed.y !== null) {
                                label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                            }
                            return label;
                        },
                        footer: function(context) {
                            let footer = '';
    
                            if (context[0].parsed.x !== null) {
                                footer += context[0].label + ' ' + '2020';
                            }
                            return footer;
                        },
                       
                    },       
                    titleFont: {
                        size: 0,
                    },
                    padding: 10,   
                    bodyFont: {
                        weight: 'bold',
                    },   
                    footerFont: {
                        weight: '400',
                    },      
                    bodyAlign: 'center',
                    footerAlign: 'center',
                    
                }
            },
            scales: {
                x: {
                   display: false,
                },
                y: {
                   display: false,
                }
             },
            responsive: true,
            maintainAspectRatio: false,
            hover: {
                intersect: false,
            },
            
            }}
        />
    )
}