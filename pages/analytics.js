import {
	PhoneIcon,
	MapPinIcon,
	InboxIcon,
	EllipsisHorizontalCircleIcon,
} from '@heroicons/react/24/outline'
import Search from '@/components/Search'
import Link from 'next/link'
import dynamic from 'next/dynamic'

import MainLayoutWithSide from '@/components/Layout/MainLayoutWithSide'
import Customer from '../components/Product/Customer'
const BarSmall = dynamic(() => import('@/components/Charts/BarSmall'), {
	ssr: false,
})
const SimpleDonut = dynamic(() => import('@/components/Charts/SimpleDonut'), {
	ssr: false,
})
const PageHeader = () => {
	return (
		<>
			<div className="mx-auto  px-4 sm:px-6 md:px-8">
				<div className="sm:flex sm:items-center">
					<div className="sm:flex-auto">
						<h1 className="text-xl font-semibold text-gray-900">
							Customer List
						</h1>
						<p className="mt-2 text-sm text-gray-700">
							A list of all the users in your account including their name,
							title, email and role.
						</p>
					</div>
					<div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none flex">
						<button
							type="button"
							className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
						>
							<Link href="/create-invoice"> +Add Customer</Link>
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

const SideBar = () => {
	return (
		<div className="w-1/4 px-4 mt-4 ">
			<div className="flex flex-col items-center border-b py-6 text-center">
				<img
					src="https://picsum.photos/200/300"
					className="rounded-full w-20 h-20"
				/>
				<div className="mt-4">
					<h1 className="text-2xl font-semibold">Sandesh Mankar</h1>
					<p> Head of Software Development</p>
				</div>
			</div>
			<div className="flex flex-col mt-2 p-4">
				<h1 className="text-xl mb-1">Contact Info</h1>
				<div className="py-4 border-b flex flex-row ">
					<InboxIcon className="w-6 mr-4" /> mankarsandesh@gmail.com
				</div>
				<div className="py-4 border-b flex flex-row ">
					<PhoneIcon className="w-6 mr-4" /> +91 9736762732
				</div>
				<div className="py-4 border-b flex flex-row ">
					<MapPinIcon className="w-6 mr-4" /> 2239 Hog Camp Road Schaumburg
				</div>
			</div>
			<div className="p-4 border rounded-md mx-4">
				<div className="  flex flex-row justify-between">
					<h1 className="font-semibold text-2xl">Perfomance </h1>
					<EllipsisHorizontalCircleIcon className="w-6 mr-4" />
				</div>
				<BarSmall />
			</div>
			<div className="flex border mx-4 mt-4 rounded-md pt-4">
				<div className="w-full ">
					<SimpleDonut />
				</div>
				{/* <div>
							<SimpleDonut />
						</div> */}
			</div>
		</div>
	)
}

export default function Analytics() {
	return (
		<>
			<MainLayoutWithSide PageHeader={PageHeader} SideBar={SideBar}>
				<div className="mx-auto  px-4 py-4 sm:px-6 md:px-8 grid md:grid-cols-1 grid-cols-1  ">
					<Customer />
				</div>
			</MainLayoutWithSide>
		</>
	)
}
