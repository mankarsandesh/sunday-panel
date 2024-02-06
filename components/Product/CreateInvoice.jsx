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
import {
	CameraIcon,
	PlusIcon,
	CalendarDaysIcon,
} from '@heroicons/react/20/solid'
export default function CreateInvoice() {
	return (
		<div className="bg-white w-1/2 rounded-xl mx-6 p-5">
			<div className="text-2xl font-bold ml-3">Create New Invoice</div>
			<div className="mx-auto h-28 w-28 rounded-full bg-gray-100 text-center flex items-center mt-4 ">
				<CameraIcon className="text-gray-600 h-10 w-10  cursor-pointer mx-auto " />
			</div>
			<div className="flex mt-6">
				<div className="w-1/2 px-4">
					<label
						htmlFor="email"
						className="block text-sm font-medium text-gray-700"
					>
						Invoice iD
					</label>
					<div className="mt-1 bg-indigo-50 p-2 rounded-lg">
						<input
							type="email"
							name="email"
							id="email"
							className="block w-full   focus:outline-none focus:ring-indigo-50  sm:text-sm p-2 bg-indigo-50"
							placeholder="#1232323"
						/>
					</div>
				</div>
				<div className="w-1/2 px-4">
					<label
						htmlFor="email"
						className="block text-sm font-medium text-gray-700"
					>
						Date
					</label>
					<div className=" relative mt-1 bg-indigo-50 p-2 rounded-lg">
						<input
							type="email"
							name="email"
							id="email"
							className="block w-full   focus:outline-none focus:ring-indigo-50  sm:text-sm p-2 bg-indigo-50"
							placeholder="#1232323"
						/>
						<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
							<CalendarDaysIcon
								className="h-5 w-5 text-indigo-400"
								aria-hidden="true"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="flex mt-6">
				<div className="w-full px-4">
					<label
						htmlFor="email"
						className="block text-sm font-medium text-gray-700"
					>
						Name
					</label>
					<div className="mt-1 bg-indigo-50 p-2 rounded-lg">
						<input
							type="email"
							name="email"
							id="email"
							className="block w-full   focus:outline-none focus:ring-indigo-50  sm:text-sm p-2 bg-indigo-50"
							placeholder="Sandesh Mankar"
						/>
					</div>
				</div>
			</div>
			<div className="flex mt-6">
				<div className="w-1/2 px-4">
					<label
						htmlFor="email"
						className="block text-sm font-medium text-gray-700"
					>
						Email
					</label>
					<div className="mt-1 bg-indigo-50 p-2 rounded-lg">
						<input
							type="email"
							name="email"
							id="email"
							className="block w-full   focus:outline-none focus:ring-indigo-50  sm:text-sm p-2 bg-indigo-50"
							placeholder="#1232323"
						/>
					</div>
				</div>
				<div className="w-1/2 px-4">
					<label
						htmlFor="email"
						className="block text-sm font-medium text-gray-700"
					>
						Address
					</label>
					<div className="mt-1 bg-indigo-50 p-2 rounded-lg">
						<input
							type="email"
							name="email"
							id="email"
							className="block w-full   focus:outline-none focus:ring-indigo-50  sm:text-sm p-2 bg-indigo-50"
							placeholder="#1232323"
						/>
					</div>
				</div>
			</div>
			<div className="mt-4 ">
				<div className="flex px-4 justify-between">
					<label>Product Descriptions</label>
					<PlusIcon className="text-white h-8 w-8  cursor-pointer  bg-indigo-600 rounded-md" />
				</div>

				<div className="px-4 mt-8 flex flex-col sm:-mx-6 md:mx-0">
					<table className="min-w-full divide-y divide-gray-300">
						<thead>
							<tr>
								<th
									scope="col"
									className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0"
								>
									Project
								</th>

								<th
									scope="col"
									className="hidden py-3.5 px-3 text-right text-sm font-semibold text-gray-900 sm:table-cell"
								>
									Rate
								</th>
								<th
									scope="col"
									className="hidden py-3.5 px-3 text-right text-sm font-semibold text-gray-900 sm:table-cell"
								>
									Quntity
								</th>
								<th
									scope="col"
									className="py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6 md:pr-0"
								>
									Price
								</th>
							</tr>
						</thead>
						<tbody>
							{projects.map((project) => (
								<tr key={project.id} className="border-b border-gray-200">
									<td className="py-4 pl-4 pr-3 text-md sm:pl-6 md:pl-0">
										<div className=" text-indigo-600">{project.name}</div>
									</td>

									<td className="hidden py-4 px-3 text-right text-sm text-gray-800 sm:table-cell">
										${project.rate}
									</td>
									<td className="hidden py-4 px-3 text-right text-sm text-gray-800 sm:table-cell">
										{project.quntity} pcs
									</td>
									<td className="py-4 pl-3 pr-4 text-right text-sm text-green-500 sm:pr-6 md:pr-0">
										${project.rate * project.quntity}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
			<div className="mt-4 flex ">
				<button
					type="button"
					className="w-1/2  mx-4 rounded-md border border-transparent border-indigo-100 text-indigo-600 px-4 py-2 text-lg  shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 text-center hover:text-white"
				>
					Send Invoice
				</button>
				<button
					type="button"
					className="w-1/2 mx-4  rounded-md border border-transparent bg-indigo-600 px-4 py-2  text-lg  text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
				>
					Create Invoice
				</button>
			</div>
		</div>
	)
}
