import React, { Component } from "react";
import Chart from "react-apexcharts";

class TwitterChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="300"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TwitterChart;