import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Fragment, useState } from 'react'
function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}
import MainLayout from '@/components/Layout/MainLayout'
import Board from '@/components/Task/Board'
import Search from '@/components/Search'

const PageHeader = () => {
	const tabs = [
		{ name: 'List', href: '#' },
		{ name: 'Board', href: '#' },
		{ name: 'Timeline', href: '#' },
	]
	const [activeTab, SetActiveTab] = useState('Board')
	const updateTabsValue = (tabName) => {
		SetActiveTab(tabName)
	}
	return (
		<>
			<div className="mx-auto  px-4 sm:px-6 md:px-8">
				<div className="sm:flex sm:items-center">
					<div className="sm:flex-auto">
						<h1 className="text-xl font-semibold text-gray-900">Task View</h1>

						<nav className="flex  mt-4 " aria-label="Tabs">
							{tabs.map((tab) => (
								<a
									key={tab.name}
									href={tab.href}
									onClick={() => updateTabsValue(tab.name)}
									className={classNames(
										tab.name === activeTab
											? 'bg-indigo-700 text-white'
											: 'bg-white text-gray-500 hover:text-gray-700',

										'px-6 py-3 font-medium text-sm first:rounded-l-lg last:rounded-r-lg w-30'
									)}
									aria-current={tab.current ? 'page' : undefined}
								>
									{tab.name}
								</a>
							))}
						</nav>
					</div>
					<div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none flex flex-col">
						<Menu as="div" className="relative inline-block text-right w-100">
							<div>
								<Menu.Button className="inline-flex w-100 justify-center rounded-md border border-gray-300 bg-indigo-800 px-4 py-2 text-sm font-medium text-white shadow-sm  focus:outline-none focus:ring-2 focus:text-white focus:ring-indigo-900 focus:ring-offset-2">
									Filter
									<ChevronDownIcon
										className="-mr-1 ml-2 h-5 w-5"
										aria-hidden="true"
									/>
								</Menu.Button>
							</div>

							<Transition
								as={Fragment}
								enter="transition ease-out duration-100"
								enterFrom="transform opacity-0 scale-95"
								enterTo="transform opacity-100 scale-100"
								leave="transition ease-in duration-75"
								leaveFrom="transform opacity-100 scale-100"
								leaveTo="transform opacity-0 scale-95"
							>
								<Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
									<div className="py-1">
										<Menu.Item>
											{({ active }) => (
												<a
													href="#"
													className={classNames(
														active
															? 'bg-gray-100 text-gray-900'
															: 'text-gray-700',
														'block px-4 py-2 text-sm'
													)}
												>
													Account settings
												</a>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
												<a
													href="#"
													className={classNames(
														active
															? 'bg-gray-100 text-gray-900'
															: 'text-gray-700',
														'block px-4 py-2 text-sm'
													)}
												>
													Support
												</a>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
												<a
													href="#"
													className={classNames(
														active
															? 'bg-gray-100 text-gray-900'
															: 'text-gray-700',
														'block px-4 py-2 text-sm'
													)}
												>
													License
												</a>
											)}
										</Menu.Item>
										<form method="POST" action="#">
											<Menu.Item>
												{({ active }) => (
													<button
														type="submit"
														className={classNames(
															active
																? 'bg-gray-100 text-gray-900'
																: 'text-gray-700',
															'block w-full px-4 py-2 text-left text-sm'
														)}
													>
														Sign out
													</button>
												)}
											</Menu.Item>
										</form>
									</div>
								</Menu.Items>
							</Transition>
						</Menu>
						<Search />
					</div>
				</div>
			</div>
		</>
	)
}

export default function TaskView() {
	return (
		<>
			<MainLayout PageHeader={PageHeader}>
				<div className="flex space-x-4 p-6">
					<div className=" w-1/4 ">
						<div className="text-2xl text-gray-600">Todo</div>
						<Board image="true" />
						<Board />
						<Board />
						<Board />
					</div>
					<div className=" w-1/4 ">
						<div className="text-2xl text-gray-600">In Progress</div>
						<Board image="true" />
						<Board image="true" />
						<Board />
						<Board />
					</div>
					<div className=" w-1/4 ">
						<div className="text-2xl text-gray-600">In Review</div>
						<Board />

						<Board />
						<Board image="true" />
					</div>
					<div className=" w-1/4 ">
						<div className="text-2xl text-gray-600">Done</div>
						<Board />
						<Board image="true" />
					</div>
				</div>
			</MainLayout>
		</>
	)
}
