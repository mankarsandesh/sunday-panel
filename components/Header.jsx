import { Fragment, useState } from 'react'
import { Disclosure } from '@headlessui/react'
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
	InboxStackIcon,
	XMarkIcon,
	DocumentPlusIcon,
	BellAlertIcon,
	RectangleStackIcon,
	ChartBarSquareIcon,
	UserCircleIcon,
	UserGroupIcon,
	DocumentTextIcon,
} from '@heroicons/react/24/outline'
import Logo from '@/components/Logo'
const navigation = [
	{ name: 'Dashboard', href: '/', icon: HomeIcon, current: true },
	{
		name: 'Analytics',
		href: '/analytics',
		icon: ChartBarSquareIcon,
		current: false,
	},
	{ name: 'Invoice', href: '/invoice', icon: InboxStackIcon, current: false },
	{
		name: 'Schedule',
		href: '/schedule',
		icon: DocumentTextIcon,
		current: false,
	},
	{ name: 'Calendar', href: '/calendar', icon: CalendarIcon, current: false },
	{
		name: 'Task View',
		href: '/task-view',
		icon: RectangleStackIcon,
		current: false,
	},
	{ name: 'Messages', href: '/messages', icon: InboxIcon, current: false },
	{
		name: 'Notification',
		href: '/notifications',
		icon: BellAlertIcon,
		current: false,
	},
	{ name: 'Settings', href: '/settings', icon: ChartBarIcon, current: false },
	{
		name: 'Blank Page',
		href: '/blank-page',
		icon: DocumentPlusIcon,
		current: false,
	},
	{
		name: 'Authentication',
		icon: UserCircleIcon,
		current: false,
		children: [
			{
				name: 'Login',
				href: '/login',
				current: false,
			},
			{
				name: 'Register',
				href: '/register',
				current: false,
			},
			{
				name: 'Forgot Password',
				href: '/forgot-password',
				current: false,
			},
		],
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
									<nav className="space-y-1 px-2" aria-label="Sidebar">
										{navigation.map((item) =>
											!item.children ? (
												<div key={item.name}>
													<a
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
												</div>
											) : (
												<Disclosure
													as="div"
													key={item.name}
													className="space-y-1"
												>
													{({ open }) => (
														<>
															<Disclosure.Button
																className={classNames(
																	item.current
																		? 'bg-gray-100 text-gray-900'
																		: 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
																	'group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
																)}
															>
																<item.icon
																	className="mr-3 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
																	aria-hidden="true"
																/>
																<span className="flex-1">{item.name}</span>
																<svg
																	className={classNames(
																		open
																			? 'text-gray-400 rotate-90'
																			: 'text-gray-300',
																		'ml-3 h-5 w-5 flex-shrink-0 transform transition-colors duration-150 ease-in-out group-hover:text-gray-400'
																	)}
																	viewBox="0 0 20 20"
																	aria-hidden="true"
																>
																	<path
																		d="M6 6L14 10L6 14V6Z"
																		fill="currentColor"
																	/>
																</svg>
															</Disclosure.Button>
															<Disclosure.Panel className="space-y-1">
																{item.children.map((subItem) => (
																	<Disclosure.Button
																		key={subItem.name}
																		as="a"
																		href={subItem.href}
																		className="group flex w-full items-center rounded-md py-2 pl-11 pr-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
																	>
																		{subItem.name}
																	</Disclosure.Button>
																))}
															</Disclosure.Panel>
														</>
													)}
												</Disclosure>
											)
										)}
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
						<Logo />
					</div>

					<div className="mt-5 flex flex-1 flex-col">
						<nav className="flex-1 space-y-1  pb-4 ">
							{navigation.map((item) =>
								!item.children ? (
									<div key={item.name}>
										<a
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
														: 'text-white hover:text-white',
													'mr-3 h-6 w-6 flex-shrink-0 '
												)}
												aria-hidden="true"
											/>

											{item.name}
										</a>
									</div>
								) : (
									<Disclosure as="div" key={item.name} className="space-y-1">
										{({ open }) => (
											<>
												<Disclosure.Button
													className={classNames(
														router.pathname === item.href
															? ' text-indigo-600 font-bold border-2 bg-indigo-100 hover:text-indigo-800'
															: 'text-white hover:text-white ',
														'group flex items-center px-4 py-2 text-sm font-medium rounded-l-md  ml-4 '
													)}
												>
													<item.icon
														className="mr-3 h-6 w-6 flex-shrink-0 text-white "
														aria-hidden="true"
													/>
													<span className="flex-1">{item.name}</span>
													<svg
														className={classNames(
															open
																? 'text-gray-400 rotate-90'
																: 'text-gray-300',
															'ml-3 h-5 w-5 flex-shrink-0 transform transition-colors duration-150 ease-in-out group-hover:text-gray-400'
														)}
														viewBox="0 0 20 20"
														aria-hidden="true"
													>
														<path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
													</svg>
												</Disclosure.Button>
												<Disclosure.Panel className="space-y-1">
													{item.children.map((subItem) => (
														<Disclosure.Button
															key={subItem.name}
															as="a"
															href={subItem.href}
															className="group flex w-full items-center rounded-md py-2 pl-11 pr-2 text-sm font-medium text-gray-300 hover:text-white "
														>
															{subItem.name}
														</Disclosure.Button>
													))}
												</Disclosure.Panel>
											</>
										)}
									</Disclosure>
								)
							)}
						</nav>
					</div>
					{/* <div className="flex flex-shrink-0 bg-gray-700 p-4">
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
					</div> */}
				</div>
			</div>
		</>
	)
}
