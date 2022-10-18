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
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
const navigation = [
	{ name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
	{ name: 'Analytics', href: '/analytics', icon: UsersIcon, current: false },
	{ name: 'Invoice', href: '/invoice', icon: UsersIcon, current: false },
	{ name: 'Schedule', href: '/invoice', icon: UsersIcon, current: false },
	{ name: 'Calendar', href: '#', icon: FolderIcon, current: false },
	{ name: 'Messages', href: '#', icon: FolderIcon, current: false },
	{ name: 'Notification', href: '#', icon: FolderIcon, current: false },
	{ name: 'Settings', href: '#', icon: ChartBarIcon, current: false },
]
function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function Header() {
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
													item.current
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
				<div className="flex flex-grow flex-col overflow-y-auto bg-indigo-700 pt-5">
					<div className="flex flex-col  text-center  items-center px-4">
						<img
							className="h-12 w-auto"
							src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300"
							alt="Your Company"
						/>
						<h1 className="text-white text-2xl mt-4 font-bold">
							SUNDAY <span className="text-gray-800">PANEL</span>
						</h1>
					</div>

					<div className="mt-5 flex flex-1 flex-col">
						<nav className="flex-1 space-y-1 px-2 pb-4">
							{navigation.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className={classNames(
										item.current
											? 'bg-indigo-800 text-white'
											: 'text-indigo-100 hover:bg-indigo-600',
										'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
									)}
								>
									<item.icon
										className="mr-3 h-6 w-6 flex-shrink-0 text-indigo-300"
										aria-hidden="true"
									/>
									{item.name}
								</a>
							))}
						</nav>
					</div>
				</div>
			</div>
		</>
	)
}
