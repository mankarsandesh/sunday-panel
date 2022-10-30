import Logo from '@/components/Logo'

export default function ForgotPassword() {
	return (
		<div class="h-full bg-gray-50">
			<div class="h-full  bg-gray-50 p-10">
				<div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8  my-20 bg-indigo-500 w-1/3 mx-auto rounded-md">
					<div className="sm:mx-auto sm:w-full sm:max-w-md  text-center">
						<Logo className="mx-auto" />
						<h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
							Recover your Account
						</h2>
					</div>

					<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
						<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
							<form className="space-y-6" action="#" method="POST">
								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium text-gray-700"
									>
										Email address
									</label>
									<div className="mt-1">
										<input
											id="email"
											name="email"
											type="email"
											autoComplete="email"
											required
											className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
										/>
									</div>
								</div>

								<div className="flex items-center justify-between">
									<div className="text-sm">
										<a
											href="#"
											className="font-medium text-indigo-600 hover:text-indigo-500"
										>
											Back to Sign in
										</a>
									</div>
								</div>

								<div>
									<button
										type="submit"
										className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
									>
										Send to email
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
