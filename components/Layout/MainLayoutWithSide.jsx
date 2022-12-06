import {
	PhoneIcon,
	MapPinIcon,
	InboxIcon,
	EllipsisHorizontalCircleIcon,
} from '@heroicons/react/24/outline'
import dynamic from 'next/dynamic'

import Header from '@/components/Header'
import TopHeader from '@/components/TopHeader'

const BarSmall = dynamic(() => import('@/components/Charts/BarSmall'), {
	ssr: false,
})
const SimpleDonut = dynamic(() => import('@/components/Charts/SimpleDonut'), {
	ssr: false,
})

export default function MainLayoutWithSide({ PageHeader, children }) {
	return (
		<>
			<div className="flex">
				<div className="bg-indigo-100 w-3/4">
					<Header />
					<div className="flex flex-1 flex-col md:pl-60">
						{/* <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
						<button
							type="button"
							className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
							onClick={() => setSidebarOpen(true)}
						>
							<span className="sr-only">Open sidebar</span>
							<Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
						</button>
						<TopHeader />
					</div> */}

						<main className="pt-5">
							{<PageHeader />}

							<div className="py-6 h-full ">{children}</div>
						</main>
					</div>
				</div>
				<div className="w-1/4 px-4 mt-4 ">
					<div className="flex flex-col items-center border-b py-6 text-center">
						<img
							src="https://picsum.photos/200/300"
							className="rounded-full w-20 h-20"
						/>
						<div className="mt-4">
							<h1 className="text-2xl font-semibold">John Deo</h1>
							<p>Product Head</p>
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
						<div className="w-2/2">
							<SimpleDonut />
						</div>
						{/* <div>
							<SimpleDonut />
						</div> */}
					</div>
				</div>
			</div>
		</>
	)
}
