import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Charts extends Component {

  constructor(props) {
    super(props);

    this.state = {
          
      series: [50, 50],
      options: {
        chart: {
          width: 380,
          type: 'pie',
        },
        labels: ['Team A1', 'Team B'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }],
        colors:['#F44336', '#008ffb']
        
      },
      
    
    
    };
  }

  render() {

    return (
      <div className="donut">
        <Chart options={this.state.options} series={this.state.series} type="pie" width={380} />
      </div>
    );
  }
}

export default Charts;