// ImageLineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const ImageLineChart = ({ data }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: [
        {
          type: 'linear',
          position: 'bottom',
          ticks: {
            fontSize: 14, // Set the font size for x-axis labels
          },
        },
      ],
      y: [
        {
          type: 'linear',
          position: 'left',
          ticks: {
            fontSize: 14, // Set the font size for y-axis labels
          },
        },
      ],
    },
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            return context.dataset.label || '';
          },
          title: () => '', // Disable the title
          itemSort: (a, b) => b.parsed.y - a.parsed.y, // Sort tooltips by y-value
        },
        displayColors: false,
        custom: (tooltipModel) => {
          // Customize the tooltip to display a custom div box
          const tooltipEl = document.getElementById('custom-tooltip');

          if (!tooltipEl) {
            const newTooltip = document.createElement('div');
            newTooltip.id = 'custom-tooltip';
            newTooltip.style.position = 'absolute';
            newTooltip.style.backgroundColor = 'white';
            newTooltip.style.border = '1px solid #ccc';
            newTooltip.style.padding = '10px';
            document.body.appendChild(newTooltip);
          }

          if (tooltipModel.opacity === 0) {
            document.getElementById('custom-tooltip').style.opacity = '0';
            return;
          }

          const customContent = `
            <div style="background-color: #f0f0f0; padding: 10px; font-size: 16px;">
              <h4>${tooltipModel.label}</h4>
              <p>Y-Value: ${tooltipModel.parsed.y}</p>
              <!-- Add any additional custom content here -->
            </div>
          `;

          tooltipEl.innerHTML = customContent;
          tooltipEl.style.opacity = '1';
          tooltipEl.style.left = tooltipModel.caretX + 'px';
          tooltipEl.style.top = tooltipModel.caretY + 'px';
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default ImageLineChart;
