import React from 'react';
import ReactDom from 'react-dom';
import API from './API.js';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      BTCdata: {}
    }
    this.handleGraph = this.handleGraph.bind(this);
  }

  componentDidMount() {
    API.get((data) => {
      console.log('CLIENT DATA: ', data);
      this.setState({
        BTCdata: data
      }, () => this.handleGraph())
    })
  }

  handleGraph() {
    let BTC = this.state.BTCdata.data.bpi;
    let BTCkey = [];
    let BTCval = [];
    for (let key in BTC) {
      BTCkey.push(key);
      BTCval.push(BTC[key]);
    }
    const myChartRef = document.getElementById('myChart').getContext('2d');
    new Chart(myChartRef, {
      type: 'line',
      data: {
        labels: BTCkey,
        datasets: [{
          label: 'BTC Closing Value',
          data: BTCval,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Cryptocurrency Charting Tool</h1>
        <canvas id="myChart"></canvas>
        <h6>Powered by CoinDesk</h6>
      </div >
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'))