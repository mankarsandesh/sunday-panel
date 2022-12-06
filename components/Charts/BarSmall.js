import React, { Component } from 'react'
import Chart from 'react-apexcharts'

class BarSmall extends Component {
	constructor(props) {
		super(props)

		this.state = {
			series: [
				{
					name: 'Inflation',
					data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
				},
			],
			options: {
				grid: {
					show: false,
				},
				chart: {
					height: 350,
					toolbar: {
						show: true,
						tools: {
							download: false, // <== line to add
						},
					},
					type: 'bar',
				},
				plotOptions: {
					bar: {
						borderRadius: 1,
						dataLabels: {
							position: 'top', // top, center, bottom
						},
					},
				},
				dataLabels: {
					enabled: false,
					formatter: function (val) {
						return val + '%'
					},
					offsetY: -20,
					style: {
						fontSize: '12px',
						colors: ['#304758'],
					},
				},

				xaxis: {
					categories: [
						'Jan',
						'Feb',
						'Mar',
						'Apr',
						'May',
						'Jun',
						'Jul',
						'Aug',
						'Sep',
						'Oct',
						'Nov',
						'Dec',
					],
					position: 'top',
					axisBorder: {
						show: false,
					},
					axisTicks: {
						show: false,
					},
					crosshairs: {
						fill: {
							type: 'gradient',
							gradient: {
								colorFrom: '#D8E3F0',
								colorTo: '#BED1E6',
								stops: [0, 100],
								opacityFrom: 0.4,
								opacityTo: 0.5,
							},
						},
					},
					tooltip: {
						enabled: true,
					},
					position: 'bottom',
				},
				yaxis: {
					axisBorder: {
						show: false,
					},
					axisTicks: {
						show: false,
					},
					labels: {
						show: false,
						formatter: function (val) {
							return val + '%'
						},
					},
				},
			},
		}
	}

	render() {
		return (
			<div id="chart ">
				<Chart
					options={this.state.options}
					series={this.state.series}
					type="bar"
				/>
			</div>
		)
	}
}

export default BarSmall
