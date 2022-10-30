const people = [
	{
		name: 'Lindsay Walton',
		title: 'Front-end Developer',
		department: 'Optimization',
		email: 'lindsay.walton@example.com',
		role: 'Member',
		image:
			'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
	{
		name: 'Lindsay Walton',
		title: 'Front-end Developer',
		department: 'Optimization',
		email: 'lindsay.walton@example.com',
		role: 'Member',
		image:
			'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
	{
		name: 'Lindsay Walton',
		title: 'Front-end Developer',
		department: 'Optimization',
		email: 'lindsay.walton@example.com',
		role: 'Member',
		image:
			'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
	{
		name: 'Lindsay Walton',
		title: 'Front-end Developer',
		department: 'Optimization',
		email: 'lindsay.walton@example.com',
		role: 'Member',
		image:
			'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
	{
		name: 'Lindsay Walton',
		title: 'Front-end Developer',
		department: 'Optimization',
		email: 'lindsay.walton@example.com',
		role: 'Member',
		image:
			'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
	{
		name: 'Lindsay Walton',
		title: 'Front-end Developer',
		department: 'Optimization',
		email: 'lindsay.walton@example.com',
		role: 'Member',
		image:
			'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
	{
		name: 'Lindsay Walton',
		title: 'Front-end Developer',
		department: 'Optimization',
		email: 'lindsay.walton@example.com',
		role: 'Member',
		image:
			'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
	{
		name: 'Lindsay Walton',
		title: 'Front-end Developer',
		department: 'Optimization',
		email: 'lindsay.walton@example.com',
		role: 'Member',
		image:
			'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
	{
		name: 'Lindsay Walton',
		title: 'Front-end Developer',
		department: 'Optimization',
		email: 'lindsay.walton@example.com',
		role: 'Member',
		image:
			'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
	// More people...
]

import {
	StarIcon,
	PencilSquareIcon,
	TrashIcon,
} from '@heroicons/react/20/solid'
export default function TopSelling() {
	return (
		<>
			<table className="min-w-full divide-y divide-gray-300 border-spacing-4">
				<thead className="bg-gray-50">
					<tr>
						<th
							scope="col"
							className="py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-6 flex items-center"
						>
							<input
								id="default-checkbox"
								type="checkbox"
								value=""
								class=" mr-2 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
							/>
							Invoice Id
						</th>
						<th
							scope="col"
							className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
						>
							Name
						</th>
						<th
							scope="col"
							className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
						>
							Email
						</th>
						<th
							scope="col"
							className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
						>
							Date
						</th>
						<th
							scope="col"
							className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
						>
							Status
						</th>

						<th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
							<span className="sr-only">Edit</span>
						</th>
					</tr>
				</thead>
				<tbody className="divide-y divide-gray-200 border-2 bg-white border-red-600">
					{people.map((person, index) => (
						<tr key={person.email}>
							<td className="whitespace-nowrap py-3.5 pl-6  text-sm text-gray-800">
								<input
									id="default-checkbox"
									type="checkbox"
									value=""
									class=" mr-2 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								#{index}33341
							</td>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
								<div className="flex items-center">
									<div className="h-10 w-10 flex-shrink-0">
										<img
											className="h-10 w-10 rounded-full"
											src={person.image}
											alt=""
										/>
									</div>
									<div className="ml-4">
										<div className="font-medium text-gray-900 flex item-center">
											{person.name}

											<StarIcon className=" text-yellow-300 ml-4   h-6 w-6 " />
										</div>
									</div>
								</div>
							</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
								<div className="text-gray-500">{person.email}</div>
							</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
								2022-12-20
							</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
								<span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
									Active
								</span>
							</td>

							<td className="relative whitespace-nowrap py-6  text-center text-sm font-medium flex items-center">
								<PencilSquareIcon className="text-indigo-400 hover:text-indigo-600 w-6 h-6 cursor-pointer" />
								<TrashIcon className="text-red-400 hover:text-red-600 w-6 h-6 cursor-pointer" />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	)
}
