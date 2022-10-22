import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
	Bars3BottomLeftIcon,
	BellIcon,
	CalendarIcon,
	ChartBarIcon,
	FolderIcon,
	HomeIcon,
	InboxIcon,
	UsersIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline'

import Header from '../components/Header'
import TopHeader from '../components/TopHeader'
import Table from '../components/Table'

export default function Home() {
	return (
		<>
			<div className="bg-gray-200">
				<Header />
				<div className="flex flex-1 flex-col md:pl-64">
					<div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
						<button
							type="button"
							className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
							onClick={() => setSidebarOpen(true)}
						>
							<span className="sr-only">Open sidebar</span>
							<Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
						</button>
						<TopHeader />
					</div>

					<main>
						<div className="py-6">
							<div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
								<h1 className="text-2xl font-semibold text-gray-900">
									Dashboard
								</h1>
							</div>
							<div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 md:px-8 grid md:grid-cols-4 grid-cols-2 gap-4 ">
								{/* Replace with your content */}
								<div className="p-4 rounded-md bg-white flex">
									<BellIcon
										className="mr-3 h-10 w-10 flex-shrink-0 text-indigo-800 bg-blue-100 rounded-full p-2"
										aria-hidden="true"
									/>
									<span>
										<h1 className="text-lg font-bold">178+</h1>
										<h1 className="text-sm">Save products</h1>
									</span>
								</div>
								<div className="p-4 rounded-md bg-white flex">
									<BellIcon
										className="mr-3 h-10 w-10 flex-shrink-0 text-indigo-800 bg-blue-100 rounded-full p-2"
										aria-hidden="true"
									/>
									<span>
										<h1 className="text-lg font-bold">178+</h1>
										<h1 className="text-sm">Save products</h1>
									</span>
								</div>
								<div className="p-4 rounded-md bg-white flex">
									<BellIcon
										className="mr-3 h-10 w-10 flex-shrink-0 text-indigo-800 bg-blue-100 rounded-full p-2"
										aria-hidden="true"
									/>
									<span>
										<h1 className="text-lg font-bold">178+</h1>
										<h1 className="text-sm">Save products</h1>
									</span>
								</div>
								<div className="p-4 rounded-md bg-white flex">
									<BellIcon
										className="mr-3 h-10 w-10 flex-shrink-0 text-indigo-800 bg-blue-100 rounded-full p-2"
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
									<div className="flex flex-row items-center py-4">
										<img
											className="h-16 w-auto bg-blue-200 rounded-md p-4"
											src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300"
										/>
										<div className="ml-4">
											<h1 className="text-lg">NIKE Shoes Black Pattern</h1>
											<span></span>
											<span>$657</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</main>
				</div>
			</div>
		</>
	)
}
