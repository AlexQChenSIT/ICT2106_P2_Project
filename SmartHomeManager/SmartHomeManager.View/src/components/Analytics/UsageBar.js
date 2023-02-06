import React from 'react'
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const labels = ["January", "February", "March", "April", "May", "June"];
    const data = {
      labels: labels,
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: [27, 10, 5, 2, 20, 30, 45],
        },
      ],
    };
function UsageBar() {
    

    return (
        <Bar data={data} />
    )
  }

  
  export default UsageBar