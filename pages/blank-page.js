import { Bars3BottomLeftIcon, BellIcon } from '@heroicons/react/24/outline'

import Table from '../components/Table'
import TopSelling from '@/components/Product/TopSelling'
import MainLayout from '@/components/Layout/MainLayout'

const PageHeader = () => {
	return (
		<>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
				<h1 className="text-2xl font-semibold text-gray-900">Blank Page</h1>
			</div>
		</>
	)
}

export default function BlankPage() {
	return (
		<>
			<MainLayout PageHeader={PageHeader}>
				<div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 md:px-8 grid md:grid-cols-4 grid-cols-2 gap-4 ">
					Blank Page
				</div>
			</MainLayout>
		</>
	)
}
