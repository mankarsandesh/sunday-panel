import Link from 'next/link'
export default function Example() {
	return (
		<>
			<div className="min-h-full bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8 flex justify-center items-center h-screen">
				<div className="mx-auto max-w-max">
					<h1 className=" text-4xl mt-4 font-bold text-center h-20">
						<span className="text-indigo-400">SUNDAY</span>{' '}
						<span className="text-gray-300">PANEL</span>
					</h1>
					<main className="sm:flex">
						<p className="text-4xl font-bold tracking-tight text-indigo-600 sm:text-5xl">
							404
						</p>
						<div className="sm:ml-6">
							<div className="sm:border-l sm:border-gray-200 sm:pl-6">
								<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
									Page not found
								</h1>
								<p className="mt-1 text-base text-gray-500">
									Please check the URL in the address bar and try again.
								</p>
							</div>
							<div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
								<Link href="/">
									<a className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
										Go back home
									</a>
								</Link>

								<a
									href="#"
									className="inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
								>
									Contact support
								</a>
							</div>
						</div>
					</main>
				</div>
			</div>
		</>
	)
}
