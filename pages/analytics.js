import {
	Bars3BottomLeftIcon,
	BellIcon,
	MagnifyingGlassIcon,
} from '@heroicons/react/24/outline'
import Search from '@/components/Search'
import Link from 'next/link'
import MainLayoutWithSide from '@/components/Layout/MainLayoutWithSide'
import Customer from '../components/Product/Customer'

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

export default function Analytics() {
	return (
		<>
			<MainLayoutWithSide PageHeader={PageHeader}>
				<div className="mx-auto  px-4 py-4 sm:px-6 md:px-8 grid md:grid-cols-1 grid-cols-1  ">
					<Customer />
				</div>
			</MainLayoutWithSide>
		</>
	)
}
