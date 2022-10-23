import { Bars3BottomLeftIcon, BellIcon } from '@heroicons/react/24/outline'

import Table from '../components/Table'
import TopSelling from '@/components/Product/TopSelling'
import MainLayout from '@/components/Layout/MainLayout'

const PageHeader = () => {
	return (
		<>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
				<h1 className="text-2xl font-semibold text-gray-900">Blank Page</h1>
			</div>
		</>
	)
}

export default function BlankPage() {
	return (
		<>
			<MainLayout PageHeader={PageHeader}>
				<div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 md:px-8 grid md:grid-cols-4 grid-cols-2 gap-4 ">
					{/* Replace with your content */}
					<div className="p-6 rounded-md bg-white flex">
						<BellIcon
							className="mr-3 h-14 w-14 flex-shrink-0 text-indigo-800 bg-blue-100 rounded-full p-2"
							aria-hidden="true"
						/>
						<span>
							<h1 className="text-lg font-bold">3321+</h1>
							<h1 className="text-sm">Save products</h1>
						</span>
					</div>
					<div className="p-6 rounded-md bg-white flex">
						<BellIcon
							className="mr-3 h-14 w-14 flex-shrink-0 text-red-800 bg-red-100 rounded-full p-2"
							aria-hidden="true"
						/>
						<span>
							<h1 className="text-lg font-bold">21+</h1>
							<h1 className="text-sm">Save products</h1>
						</span>
					</div>
					<div className="p-6 rounded-md bg-white flex">
						<BellIcon
							className="mr-3 h-14 w-14 flex-shrink-0 text-yellow-800 bg-yellow-100 rounded-full p-2"
							aria-hidden="true"
						/>
						<span>
							<h1 className="text-lg font-bold">12+</h1>
							<h1 className="text-sm">Save products</h1>
						</span>
					</div>
					<div className="p-6 rounded-md bg-white flex">
						<BellIcon
							className="mr-3 h-14 w-14 flex-shrink-0 text-pink-800 bg-pink-100 rounded-full p-2"
							aria-hidden="true"
						/>
						<span>
							<h1 className="text-lg font-bold">178+</h1>
							<h1 className="text-sm">Save products</h1>
						</span>
					</div>
				</div>
				{/* Reports and Analytics */}
				<div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 md:px-8 grid md:grid-cols-3 grid-cols-1 gap-4 ">
					<div className="p-4 rounded-md bg-white flex col-span-2">
						<h1 className="text-lg">Reports</h1>
					</div>
					<div className="p-4 rounded-md bg-white flex">
						<h1 className="text-lg">Analytics</h1>
					</div>
				</div>

				{/* Order and Selling Products */}
				<div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 md:px-8 grid md:grid-cols-3 grid-cols-1 gap-4 ">
					<div className="p-4 rounded-md bg-white  col-span-2">
						<h1 className="text-lg">Recent Orders</h1>
						<Table />
					</div>
					<div className="p-4 rounded-md bg-white flex flex-col">
						<h1 className="text-lg">Top Selling Products </h1>
						<TopSelling />
					</div>
				</div>
			</MainLayout>
		</>
	)
}
