import { Bars3BottomLeftIcon, BellIcon } from '@heroicons/react/24/outline'

import Header from '@/components/Header'
import TopHeader from '@/components/TopHeader'
export default function MainLayout({ PageHeader, children }) {
	return (
		<>
			<div className="bg-indigo-100">
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
						{<PageHeader />}
						<div className="py-6 h-full">{children}</div>
					</main>
				</div>
			</div>
		</>
	)
}
