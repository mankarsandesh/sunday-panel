import React, { Component } from 'react'
import Chart from 'react-apexcharts'

class SimpleDonut extends Component {
	constructor(props) {
		super(props)

		this.state = {
			series: [44, 55],
			options: {
				theme: {
					mode: 'light',
					monochrome: {
						enabled: true,
						color: '#255aee',
						shadeTo: 'light',
						shadeIntensity: 0.65,
					},
				},
				plotOptions: {
					donut: {
						valu: {
							show: false,
						},
					},
				},
				chart: {
					type: 'donut',
				},
				dataLabels: {
					enabled: false,
				},
				responsive: [
					{
						breakpoint: 480,
						options: {
							chart: {
								width: 200,
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

export default SimpleDonut
