import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'
function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}
import MainLayout from '@/components/Layout/MainLayout'
import Board from '@/components/Task/Board'
const tabs = [
	{ name: 'List', href: '#', current: false },
	{ name: 'Board', href: '#', current: true },
	{ name: 'Timeline', href: '#', current: false },
]
const PageHeader = () => {
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
									className={classNames(
										tab.current
											? 'bg-indigo-700 text-white'
											: 'bg-white text-gray-500 hover:text-gray-700',

										'px-6 py-3 font-medium text-sm first:rounded-l-lg last:rounded-r-lg'
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
						<div className="border rounded-xl mt-2 items-center p-2 bg-white w-60">
							<input
								type="text"
								name="search"
								id="price"
								className="block w-full rounded-xl text-gray-600  bg-white px-2 py-1 focus:outline-0 focus:ring-indigo-500 sm:text-sm"
								placeholder="Search"
								aria-describedby="price-currency"
							/>
							<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"></div>
						</div>
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
