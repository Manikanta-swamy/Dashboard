import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import "./Widget.css";

function Card({ dataObj}) {
  const chartRef = useRef(null);
  let chartInstance = useRef(null);

  useEffect(() => {

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    if (chartRef && chartRef.current) {
      chartInstance.current = new Chart(chartRef.current, {
        type: dataObj.data.type,  // Ensure this is 'doughnut'
        data: {
          labels: dataObj.data.labels,
          datasets: [{
            backgroundColor: dataObj.data.datasets[0].backgroundColor,
            data: dataObj.data.datasets[0].data
          }]
        },
        options: {
          plugins: {
            legend: {
              display: true,
              position: 'right',
              labels: {
                padding: 10,
                boxWidth: 20,
                font: {
                  size: 12
                },
                flow:"none"
              }
            }
          },
          layout: {
            padding: 10
          },
          cutout: '60%',
          responsive: true,
          maintainAspectRatio: false
        }
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [dataObj]);

  return (
    <div className='d-flex card p-2 m-2 pb-5'>
      <h6>{dataObj.widgetName}</h6>
      <canvas className='align-self-center' ref={chartRef} ></canvas>
      <span id='cross'>
        <button style={{border:"none"}} >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
          </svg>
        </button>
      </span>
    </div>
  );
}

export default Card;
