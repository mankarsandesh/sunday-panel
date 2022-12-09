import { Bars3BottomLeftIcon, BellIcon } from '@heroicons/react/24/outline'

import Header from '@/components/Header'
import TopHeader from '@/components/TopHeader'
export default function MainLayout({ PageHeader, children }) {
	return (
		<>
			<div className="bg-indigo-100">
				<Header />
				<div className="flex flex-1 flex-col md:pl-60">
					<main className="pt-5">
						{<PageHeader />}

						<div className="py-6 h-full ">{children}</div>
					</main>
				</div>
			</div>
		</>
	)
}
