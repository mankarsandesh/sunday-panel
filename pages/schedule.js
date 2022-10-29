import Table from '../components/Table'
import ScheduleList from '@/components/Product/ScheduleList'
import MainLayout from '@/components/Layout/MainLayout'
import Invoice from '../components/Product/Invoice'
import {
	EnvelopeIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
} from '@heroicons/react/20/solid'

const days = [
	{ date: '2021-12-27' },
	{ date: '2021-12-28' },
	{ date: '2021-12-29' },
	{ date: '2021-12-30' },
	{ date: '2021-12-31' },
	{ date: '2022-01-01', isCurrentMonth: true },
	{ date: '2022-01-02', isCurrentMonth: true },
	{ date: '2022-01-03', isCurrentMonth: true },
	{ date: '2022-01-04', isCurrentMonth: true },
	{ date: '2022-01-05', isCurrentMonth: true },
	{ date: '2022-01-06', isCurrentMonth: true },
	{ date: '2022-01-07', isCurrentMonth: true },
	{ date: '2022-01-08', isCurrentMonth: true },
	{ date: '2022-01-09', isCurrentMonth: true },
	{ date: '2022-01-10', isCurrentMonth: true },
	{ date: '2022-01-11', isCurrentMonth: true },
	{ date: '2022-01-12', isCurrentMonth: true, isToday: true },
	{ date: '2022-01-13', isCurrentMonth: true },
	{ date: '2022-01-14', isCurrentMonth: true },
	{ date: '2022-01-15', isCurrentMonth: true },
	{ date: '2022-01-16', isCurrentMonth: true },
	{ date: '2022-01-17', isCurrentMonth: true },
	{ date: '2022-01-18', isCurrentMonth: true },
	{ date: '2022-01-19', isCurrentMonth: true },
	{ date: '2022-01-20', isCurrentMonth: true },
	{ date: '2022-01-21', isCurrentMonth: true },
	{ date: '2022-01-22', isCurrentMonth: true, isSelected: true },
	{ date: '2022-01-23', isCurrentMonth: true },
	{ date: '2022-01-24', isCurrentMonth: true },
	{ date: '2022-01-25', isCurrentMonth: true },
	{ date: '2022-01-26', isCurrentMonth: true },
	{ date: '2022-01-27', isCurrentMonth: true },
	{ date: '2022-01-28', isCurrentMonth: true },
	{ date: '2022-01-29', isCurrentMonth: true },
	{ date: '2022-01-30', isCurrentMonth: true },
	{ date: '2022-01-31', isCurrentMonth: true },
	{ date: '2022-02-01' },
	{ date: '2022-02-02' },
	{ date: '2022-02-03' },
	{ date: '2022-02-04' },
	{ date: '2022-02-05' },
	{ date: '2022-02-06' },
]

const directory = {
	A: [
		{
			id: 1,
			name: 'Leslie Abbott',
			role: 'Co-Founder / CEO',
			imageUrl:
				'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
			id: 2,
			name: 'Hector Adams',
			role: 'VP, Marketing',
			imageUrl:
				'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
			id: 3,
			name: 'Blake Alexander',
			role: 'Account Coordinator',
			imageUrl:
				'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
			id: 4,
			name: 'Fabricio Andrews',
			role: 'Senior Art Director',
			imageUrl:
				'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	],
	B: [
		{
			id: 5,
			name: 'Angela Beaver',
			role: 'Chief Strategy Officer',
			imageUrl:
				'https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
			id: 6,
			name: 'Yvette Blanchard',
			role: 'Studio Artist',
			imageUrl:
				'https://images.unsplash.com/photo-1506980595904-70325b7fdd90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
			id: 7,
			name: 'Lawrence Brooks',
			role: 'Content Specialist',
			imageUrl:
				'https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	],
	C: [
		{
			id: 8,
			name: 'Jeffrey Clark',
			role: 'Senior Art Director',
			imageUrl:
				'https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
			id: 9,
			name: 'Kathryn Cooper',
			role: 'Associate Creative Director',
			imageUrl:
				'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	],
	E: [
		{
			id: 10,
			name: 'Alicia Edwards',
			role: 'Junior Copywriter',
			imageUrl:
				'https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
			id: 11,
			name: 'Benjamin Emerson',
			role: 'Director, Print Operations',
			imageUrl:
				'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
			id: 12,
			name: 'Jillian Erics',
			role: 'Designer',
			imageUrl:
				'https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
			id: 13,
			name: 'Chelsea Evans',
			role: 'Human Resources Manager',
			imageUrl:
				'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	],
	G: [
		{
			id: 14,
			name: 'Michael Gillard',
			role: 'Co-Founder / CTO',
			imageUrl:
				'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
			id: 15,
			name: 'Dries Giuessepe',
			role: 'Manager, Business Relations',
			imageUrl:
				'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	],
	M: [
		{
			id: 16,
			name: 'Jenny Harrison',
			role: 'Studio Artist',
			imageUrl:
				'https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
			id: 17,
			name: 'Lindsay Hatley',
			role: 'Front-end Developer',
			imageUrl:
				'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
			id: 18,
			name: 'Anna Hill',
			role: 'Partner, Creative',
			imageUrl:
				'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	],
	S: [
		{
			id: 19,
			name: 'Courtney Samuels',
			role: 'Designer',
			imageUrl:
				'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
			id: 20,
			name: 'Tom Simpson',
			role: 'Director, Product Development',
			imageUrl:
				'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	],
	T: [
		{
			id: 21,
			name: 'Floyd Thompson',
			role: 'Principal Designer',
			imageUrl:
				'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
			id: 22,
			name: 'Leonard Timmons',
			role: 'Senior Designer',
			imageUrl:
				'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
			id: 23,
			name: 'Whitney Trudeau',
			role: 'Copywriter',
			imageUrl:
				'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	],
	W: [
		{
			id: 24,
			name: 'Kristin Watson',
			role: 'VP, Human Resources',
			imageUrl:
				'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
			id: 25,
			name: 'Emily Wilson',
			role: 'VP, User Experience',
			imageUrl:
				'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	],
	Y: [
		{
			id: 26,
			name: 'Emma Young',
			role: 'Senior Front-end Developer',
			imageUrl:
				'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	],
}
const PageHeader = () => {
	return (
		<>
			<div className="mx-auto  px-4 sm:px-6 md:px-8">
				<div className="sm:flex sm:items-center">
					<div className="sm:flex-auto">
						<h1 className="text-xl font-semibold text-gray-900">
							Schedule List
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
function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}
export default function Schedule() {
	return (
		<>
			<MainLayout PageHeader={PageHeader}>
				<div className="flex  ">
					<div className="bg-white w-1/4  rounded-xl mx-4 p-5">
						<button
							type="button"
							className="w-full text-center items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
						>
							{/* <EnvelopeIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" /> */}
							+ Create Schedule
						</button>
						<div className="flex items-center text-gray-700 text-center mt-4">
							<button
								type="button"
								className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
							>
								<span className="sr-only">Previous month</span>
								<ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
							</button>
							<div className="flex-auto font-semibold">January</div>
							<button
								type="button"
								className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
							>
								<span className="sr-only">Next month</span>
								<ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
							</button>
						</div>
						<div className="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
							<div>M</div>
							<div>T</div>
							<div>W</div>
							<div>T</div>
							<div>F</div>
							<div>S</div>
							<div>S</div>
						</div>
						<div className="isolate mt-4 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
							{days.map((day, dayIdx) => (
								<button
									key={day.date}
									type="button"
									className={classNames(
										'py-1.5 hover:bg-gray-100 focus:z-10',
										day.isCurrentMonth ? 'bg-white' : 'bg-gray-50',
										(day.isSelected || day.isToday) && 'font-semibold',
										day.isSelected && 'text-white',
										!day.isSelected &&
											day.isCurrentMonth &&
											!day.isToday &&
											'text-gray-900',
										!day.isSelected &&
											!day.isCurrentMonth &&
											!day.isToday &&
											'text-gray-400',
										day.isToday && !day.isSelected && 'text-indigo-600',
										dayIdx === 0 && 'rounded-tl-lg',
										dayIdx === 6 && 'rounded-tr-lg',
										dayIdx === days.length - 7 && 'rounded-bl-lg',
										dayIdx === days.length - 1 && 'rounded-br-lg'
									)}
								>
									<time
										dateTime={day.date}
										className={classNames(
											'mx-auto flex h-7 w-7 items-center justify-center rounded-full',
											day.isSelected && day.isToday && 'bg-indigo-600',
											day.isSelected && !day.isToday && 'bg-gray-900'
										)}
									>
										{day.date.split('-').pop().replace(/^0/, '')}
									</time>
								</button>
							))}
						</div>
						<div className="mt-4  py-2">
							<div className="text-gray-700">Coummunity</div>
							<div className="border rounded-xl mt-2 items-center p-2 bg-gray-200">
								<input
									type="text"
									name="search"
									id="price"
									className="block w-full rounded-xl text-gray-600  bg-gray-200 px-2 py-1 focus:outline-0 focus:ring-indigo-500 sm:text-sm"
									placeholder="Search for people"
									aria-describedby="price-currency"
								/>
								<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"></div>
							</div>
							<div className="mt-2 overflow-auto h-80">
								{Object.keys(directory).map((letter) => (
									<div key={letter} className="relative">
										<div className="sticky top-0 z-10 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
											<h3>{letter}</h3>
										</div>
										<ul
											role="list"
											className="relative z-0 divide-y divide-gray-200"
										>
											{directory[letter].map((person) => (
												<li key={person.id}>
													<div className="relative flex items-center space-x-3 px-6 py-5 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500 hover:bg-gray-50">
														<div className="flex-shrink-0">
															<img
																className="h-10 w-10 rounded-full"
																src={person.imageUrl}
																alt=""
															/>
														</div>
														<div className="min-w-0 flex-1">
															<a href="#" className="focus:outline-none">
																{/* Extend touch target to entire panel */}
																<span
																	className="absolute inset-0"
																	aria-hidden="true"
																/>
																<p className="text-sm font-medium text-gray-900">
																	{person.name}
																</p>
																<p className="truncate text-sm text-gray-500">
																	{person.role}
																</p>
															</a>
														</div>
													</div>
												</li>
											))}
										</ul>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className=" w-3/4  border mr-4 ">
						<ScheduleList />
					</div>
				</div>
			</MainLayout>
		</>
	)
}
