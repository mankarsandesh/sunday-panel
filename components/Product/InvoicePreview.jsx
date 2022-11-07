const projects = [
	{
		id: 1,
		name: 'New Advertising Campaign',
		quntity: '12.0',
		rate: '75.00',
		price: '900.00',
	},
	{
		id: 1,
		name: 'New Advertising Campaign',
		quntity: '12.0',
		rate: '725.00',
		price: '2221.00',
	},
	{
		id: 1,
		name: 'New Advertising Campaign',
		quntity: '12.0',
		rate: '733.00',
		price: '900.00',
	},
	// More projects...
]

import { ArrowDownTrayIcon, PrinterIcon } from '@heroicons/react/20/solid'
export default function InvoicePreview() {
	return (
		<div className=" w-1/2 bg-white rounded-xl border mr-4 p-5">
			<div className="flex justify-between">
				<label className="text-2xl font-bold">Preview</label>
				<div className="flex">
					<ArrowDownTrayIcon className="text-indigo-600 h-6 w-6  cursor-pointer mr-5 " />
					<PrinterIcon className="text-indigo-600 h-6 w-6  cursor-pointer mx-auto " />
				</div>
			</div>
			<div className="bg-gray-100 p-4 mt-5 rounded-sm">
				<div className="flex justify-between">
					<div className="">
						<div>
							<img
								className="h-8 w-auto"
								src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300"
								alt="Your Company"
							/>
						</div>
						<div className="mt-10">RECIPENT</div>
						<div>
							<div className="w-32 text-sm text-gray-600 mt-6">
								JOHN SMITH 4304 libery Avenue 92680 Tustin CA, VAT no. 1234567
							</div>
							<div className="w-40 text-sm text-gray-600 mt-6">
								<div>@ sandsh@gmail.com</div>
								<div>m +91 980332211</div>
							</div>
						</div>
					</div>
					<div className="text-right">
						<div className="text-sm">@ sandesh@gmail.com</div>
						<div className="text-sm">m +2232,32323</div>
						<div className="mt-5 flex flex-col">
							<label className="text-3xl">Invoice</label>
							<label className="text-sm mt-4">invoice no</label>
							<label className="text-sm text-gray-400">001/-211</label>
							<label className="text-sm mt-4">Invoice Date</label>
							<label className="text-sm text-gray-400">Janvery 01 2022</label>

							<div className="text-gray-300"></div>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-4 ">
				<div className="px-4 mt-8 flex flex-col sm:-mx-6 md:mx-0">
					<table className="min-w-full divide-y divide-gray-300">
						<thead>
							<tr>
								<th
									scope="col"
									className="py-3.5 pl-4 pr-3 text-left text-sm  text-gray-300 sm:pl-6 md:pl-0"
								>
									TASK DESCRIPTION
								</th>

								<th
									scope="col"
									className="hidden py-3.5 px-3 text-right text-sm  text-gray-300 sm:table-cell"
								>
									Rate
								</th>
								<th
									scope="col"
									className="hidden py-3.5 px-3 text-right text-sm  text-gray-300 sm:table-cell"
								>
									Quntity
								</th>
								<th
									scope="col"
									className="py-3.5 pl-3 pr-4 text-right text-sm  text-gray-300 sm:pr-6 md:pr-0"
								>
									Price
								</th>
							</tr>
						</thead>
						<tbody>
							{projects.map((project) => (
								<tr key={project.id} className="border-b border-gray-200">
									<td className="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
										<div className=" text-gray-600">{project.name}</div>
									</td>

									<td className="hidden py-4 px-3 text-right text-sm text-gray-800 sm:table-cell">
										${project.rate}
									</td>
									<td className="hidden py-4 px-3 text-right text-sm text-gray-800 sm:table-cell">
										{project.quntity} pcs
									</td>
									<td className="py-4 pl-3 pr-4 text-right text-sm text-gray-800 sm:pr-6 md:pr-0">
										${project.rate * project.quntity}
									</td>
								</tr>
							))}
						</tbody>
						<tfoot>
							<tr>
								<th
									scope="row"
									colSpan={3}
									className="hidden pl-6 pr-3 pt-6 text-right text-sm font-normal text-gray-500 sm:table-cell md:pl-0"
								>
									Subtotal
								</th>
								<th
									scope="row"
									className="pl-4 pr-3 pt-6 text-left text-sm font-normal text-gray-500 sm:hidden"
								>
									Subtotal
								</th>
								<td className="pl-3 pr-4 pt-6 text-right text-sm text-gray-500 sm:pr-6 md:pr-0">
									$3,900.00
								</td>
							</tr>
							<tr>
								<th
									scope="row"
									colSpan={3}
									className="hidden pl-6 pr-3 pt-4 text-right text-sm font-normal text-gray-500 sm:table-cell md:pl-0"
								>
									Tax
								</th>
								<th
									scope="row"
									className="pl-4 pr-3 pt-4 text-left text-sm font-normal text-gray-500 sm:hidden"
								>
									Tax
								</th>
								<td className="pl-3 pr-4 pt-4 text-right text-sm text-gray-500 sm:pr-6 md:pr-0">
									$585.00
								</td>
							</tr>
							<tr>
								<th
									scope="row"
									colSpan={3}
									className="hidden pl-6 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell md:pl-0"
								>
									Total
								</th>
								<th
									scope="row"
									className="pl-4 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden"
								>
									TOTAL
								</th>
								<td className="pl-3 pr-4 pt-4 text-right text-sm  text-indigo-900 sm:pr-6 md:pr-0">
									$4,485.00
								</td>
							</tr>
						</tfoot>
					</table>
					<p className="text-gray-500 text-sm text-right mt-4">
						to the business below . Please include invoice nubers on you check
					</p>
					<span className="mt-4">NOTES</span>
					<div className="text-gray-400 text-sm mt-2 border-b pb-10">
						to the business below . Please include invoice nubers on you checkto
						the business below . Please include invoice nubers on you checkto
						the business below . Please include invoice nubers on you check
						<div className="mt-2">
							{' '}
							Thank you for you confidence in my work.
						</div>
						<div>Signature</div>
					</div>
				</div>
			</div>
		</div>
	)
}
