import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { useRouter } from 'next/router'
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
;<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	strokeWidth={1.5}
	stroke="currentColor"
	className="w-6 h-6"
>
	<path
		strokeLinecap="round"
		strokeLinejoin="round"
		d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
	/>
</svg>

import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
const navigation = [
	{ name: 'Dashboard', href: '/', icon: HomeIcon, current: true },
	{ name: 'Analytics', href: '/analytics', icon: UsersIcon, current: false },
	{ name: 'Invoice', href: '/invoice', icon: UsersIcon, current: false },
	{
		name: 'Schedule',
		href: '/Schedule',
		icon: Bars3BottomLeftIcon,
		current: false,
	},
	{ name: 'Calendar', href: '/calendar', icon: CalendarIcon, current: false },
	{ name: 'Messages', href: '/messages', icon: InboxIcon, current: false },
	{
		name: 'Notification',
		href: '/notifications',
		icon: FolderIcon,
		current: false,
	},
	{ name: 'Settings', href: '/settings', icon: ChartBarIcon, current: false },
	{
		name: 'Blank Page',
		href: '/blank-page',
		icon: ChartBarIcon,
		current: false,
	},
]
function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function Header() {
	const router = useRouter()
	const [sidebarOpen, setSidebarOpen] = useState(false)
	return (
		<>
			<Transition.Root show={sidebarOpen} as={Fragment}>
				<Dialog
					as="div"
					className="relative z-40 md:hidden"
					onClose={setSidebarOpen}
				>
					<Transition.Child
						as={Fragment}
						enter="transition-opacity ease-linear duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity ease-linear duration-300"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
					</Transition.Child>

					<div className="fixed inset-0 z-40 flex">
						<Transition.Child
							as={Fragment}
							enter="transition ease-in-out duration-300 transform"
							enterFrom="-translate-x-full"
							enterTo="translate-x-0"
							leave="transition ease-in-out duration-300 transform"
							leaveFrom="translate-x-0"
							leaveTo="-translate-x-full"
						>
							<Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-indigo-700 pt-5 pb-4">
								<Transition.Child
									as={Fragment}
									enter="ease-in-out duration-300"
									enterFrom="opacity-0"
									enterTo="opacity-100"
									leave="ease-in-out duration-300"
									leaveFrom="opacity-100"
									leaveTo="opacity-0"
								>
									<div className="absolute top-0 right-0 -mr-12 pt-2">
										<button
											type="button"
											className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
											onClick={() => setSidebarOpen(false)}
										>
											<span className="sr-only">Close sidebar</span>
											<XMarkIcon
												className="h-6 w-6 text-white"
												aria-hidden="true"
											/>
										</button>
									</div>
								</Transition.Child>
								<div className="flex flex-shrink-0 items-center px-4">
									<img
										className="h-8 w-auto"
										src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300"
										alt="Your Company"
									/>
									<h2>Sunday</h2>
								</div>
								<div className="mt-5 h-0 flex-1 overflow-y-auto">
									<nav className="space-y-1 px-2">
										{navigation.map((item) => (
											<a
												key={item.name}
												href={item.href}
												className={classNames(
													router.pathname === item.href
														? 'bg-indigo-800 text-white'
														: 'text-indigo-100 hover:bg-indigo-600',
													'group flex items-center px-2 py-2 text-base font-medium rounded-md'
												)}
											>
												<item.icon
													className="mr-4 h-6 w-6 flex-shrink-0 text-indigo-300"
													aria-hidden="true"
												/>
												{item.name}
											</a>
										))}
									</nav>
								</div>
							</Dialog.Panel>
						</Transition.Child>
						<div className="w-14 flex-shrink-0" aria-hidden="true">
							{/* Dummy element to force sidebar to shrink to fit close icon */}
						</div>
					</div>
				</Dialog>
			</Transition.Root>

			{/* Static sidebar for desktop */}
			<div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
				{/* Sidebar component, swap this element with another sidebar if you like */}
				<div className="flex flex-grow flex-col overflow-y-auto bg-indigo-700">
					<div className="flex flex-col  text-center  items-center px-4">
						<h1 className=" text-2xl mt-3 font-bold">
							<span className="text-indigo-400">SUNDAY</span>{' '}
							<span className="text-gray-300">PANEL</span>
						</h1>
					</div>

					<div className="mt-5 flex flex-1 flex-col">
						<nav className="flex-1 space-y-1  pb-4 ">
							{navigation.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className={classNames(
										router.pathname === item.href
											? ' text-indigo-600 font-bold border-2 bg-indigo-100 hover:text-indigo-800'
											: 'text-gray-300 hover:text-white ',
										'group flex items-center px-4 py-2 text-sm font-medium rounded-l-md  ml-4 '
									)}
								>
									<item.icon
										className={classNames(
											router.pathname === item.href
												? ' text-indigo-600 font-bold  bg-indigo-100'
												: 'text-white hover:text-indigo-600',
											'mr-3 h-6 w-6 flex-shrink-0 '
										)}
										aria-hidden="true"
									/>

									{item.name}
								</a>
							))}
						</nav>
					</div>
					<div className="flex flex-shrink-0 bg-gray-700 p-4">
						<a href="#" className="group block w-full flex-shrink-0">
							<div className="flex items-center   justify-between ">
								<div>
									<img
										className="inline-block h-9 w-9 rounded-full"
										src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
										alt=""
									/>
								</div>
								<div className="ml-3">
									<p className="text-sm font-medium text-white">
										Sandesh Mankar
									</p>
									<p className="text-xs font-medium text-gray-300 group-hover:text-gray-200">
										Free Account
									</p>
								</div>
								<div className="ml-4 items-center ">
									<UsersIcon
										alt="User Logout "
										className=" h-6 w-6 flex-shrink-0 text-indigo-300"
										aria-hidden="true"
									/>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</>
	)
}
