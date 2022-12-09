import {
	PhoneIcon,
	MapPinIcon,
	InboxIcon,
	EllipsisHorizontalCircleIcon,
} from '@heroicons/react/24/outline'
import dynamic from 'next/dynamic'

import Header from '@/components/Header'
import TopHeader from '@/components/TopHeader'

export default function MainLayoutWithSide({ PageHeader, children, SideBar }) {
	return (
		<>
			<div className="flex">
				<div className="bg-indigo-100 w-3/4">
					<Header />
					<div className="flex flex-1 flex-col md:pl-60">
						<main className="pt-5">
							{<PageHeader />}

							<div className="py-6 h-full ">{children}</div>
						</main>
					</div>
				</div>
				<SideBar />
			</div>
		</>
	)
}
