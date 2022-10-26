import { Bars3BottomLeftIcon, BellIcon } from '@heroicons/react/24/outline'

import Table from '../components/Table'
import TopSelling from '@/components/Product/TopSelling'
import MainLayout from '@/components/Layout/MainLayout'
import Invoice from '../components/Product/Invoice'

const PageHeader = () => {
	return (
		<>
			<div className="mx-auto  px-4 sm:px-6 md:px-8">
				<div className="sm:flex sm:items-center">
					<div className="sm:flex-auto">
						<h1 className="text-xl font-semibold text-gray-900">
							Invoice List
						</h1>
						<p className="mt-2 text-sm text-gray-700">
							A list of all the users in your account including their name,
							title, email and role.
						</p>
					</div>
					<div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none flex">
						<div className="border  rounded-full mr-3">
							<input
								type="text"
								name="search"
								id="price"
								className="block w-full  border-gray-300 px-4 py-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
								placeholder="Search"
								aria-describedby="price-currency"
							/>
							<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"></div>
						</div>
						<button
							type="button"
							className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
						>
							+ Add New
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default function BlankPage() {
	return (
		<>
			<MainLayout PageHeader={PageHeader}>
				<div className="mx-auto  px-4 py-4 sm:px-6 md:px-8 grid md:grid-cols-1 grid-cols-1  ">
					<Invoice />
				</div>
			</MainLayout>
		</>
	)
}
