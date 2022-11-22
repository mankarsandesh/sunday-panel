import React, { Component } from 'react'
import Chart from 'react-apexcharts'

class Bar extends Component {
	constructor(props) {
		super(props)

		this.state = {
			options: {
				chart: {
					height: '50',
					id: 'basic-bar',
					toolbar: {
						tools: {
							download: false,
						},
					},
				},
				xaxis: {
					categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
				},
			},

			series: [
				{
					data: [11, 21, 31, 30, 30, 45, 20, 28],
				},
				{
					data: [20, 29, 37, 36, 44, 45, 50, 58],
				},
			],
			yaxis: [
				{
					title: {
						text: 'Series A',
					},
				},
				{
					opposite: true,
					title: {
						text: 'Series B',
					},
				},
			],
		}
	}

	render() {
		return (
			<div id="chart">
				<Chart
					options={this.state.options}
					series={this.state.series}
					type="bar"
				/>
			</div>
		)
	}
}

export default Bar
