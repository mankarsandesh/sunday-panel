import React, { Component } from 'react'
import Chart from 'react-apexcharts'

class Bar extends Component {
	constructor(props) {
		super(props)

		this.state = {
			series: [44, 55, 41, 17, 15],
			options: {
				chart: {
					type: 'donut',
					legend: {
						position: 'bottom',
					},
				},
				responsive: [
					{
						breakpoint: 480,
						options: {
							chart: {
								width: 40,
							},
							legend: {
								position: 'bottom',
							},
						},
					},
				],
			},
		}
	}

	render() {
		return (
			<div id="chart">
				<Chart
					options={this.state.options}
					series={this.state.series}
					type="donut"
				/>
			</div>
		)
	}
}

export default Bar
