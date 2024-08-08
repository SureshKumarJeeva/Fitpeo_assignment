import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import { color } from 'chart.js/helpers';


var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function BarChart() {
    const options = {
        theme: "dark2",
        animationEnabled: true,
        animatoinDuration: 1200,
        title: { 
            text: "Activity",
            textColor: '#FFFFFF'
        },
        height:'250',
        backgroundColor: "#282c34",
        data: [
        {
            // Change type to "doughnut", "line", "splineArea", etc.
            type: "column",
            dataPoints: [
                { x: 1, y: 10 },
                { x: 2, y: 15 },
                { x: 3, y: 25 },
                { x: 4, y: 30 },
                { x: 5, y: 28 },
                { x: 6, y: 10 },
                { x: 7, y: 15 },
                { x: 8, y: 25 },
                { x: 9, y: 30 },
                { x: 10, y: 28 },
                { x: 11, y: 10 },
                { x: 12, y: 15 },
                { x: 13, y: 25 },
                { x: 14, y: 30 },
                { x: 15, y: 28 },
                { x: 16, y: 10 },
                { x: 17, y: 15 },
                { x: 20, y: 25 },
                { x: 21, y: 30 },
                { x: 25, y: 28 },
                { x: 26, y: 10 },
                { x: 27, y: 15 },
                { x: 28, y: 25 },
                { x: 30, y: 30 },
                { x: 40, y: 28 }
            ],
            backgroundColor: 'orange',
            borderRadius: 20,
        }
        ]
    }
    return (
        <div className="card">
            <CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
        </div>
    );
}