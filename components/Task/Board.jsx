export default function Board(props) {
	return (
		<div className="bg-white rounded-md p-4 mt-4 w-full ">
			<div className="relative flex ">
				<div className="flex h-5 items-center flex-none  justify-between my-2">
					<input
						id="link-radio"
						type="radio"
						value=""
						class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
					></input>
					<div
						for="link-radio"
						class="ml-2 text-md font-medium text-gray-900 dark:text-gray-300"
					>
						Dashboard View
					</div>
					<div className="ml-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6 flex justify-end"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</div>
				</div>
			</div>
			<div className="mt-2 flex space-x-2">
				<div className="text-md rounded-full bg-pink-600 text-center text-white py-1 px-4">
					Low
				</div>
				<div className="text-md rounded-full bg-green-600  text-center text-white py-1 px-4">
					On Track
				</div>
				<div className="text-md rounded-full bg-indigo-600  text-center text-white py-1 px-4">
					Medium
				</div>
			</div>
			<p className="mt-4  text-sm text-gray-600">
				A list of all the users in your account including their name, title,
				email and role.
			</p>
			{props.image ? (
				<div className="mt-4 w-full flex space-x-2">
					<img
						src="https://picsum.photos/300/200"
						alt=""
						className="rounded-md border border-gray-300 w-1/2"
					/>
					<img
						src="https://picsum.photos/300/200"
						alt=""
						className="rounded-md border border-gray-300  w-1/2"
					/>
				</div>
			) : (
				''
			)}
			<div className="mt-4 flex justify-between">
				<div className="flex-space-x-1 overflow-hidden">
					<img
						className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
						src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
						alt=""
					/>
					<img
						className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
						src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
						alt=""
					/>
					<img
						className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
						src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
						alt=""
					/>
					<img
						className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
						src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
						alt=""
					/>

					<span className="inline-block h-6 w-6  rounded-full ring-2 ring-white bg-indigo-600 text-center text-white text-sm items-center ">
						+
					</span>
				</div>
				<div className="flex items-center ">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
						/>
					</svg>
					<label className="text-sm text-gray-400 mx-1">121</label>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
						/>
					</svg>
					<label className="text-sm text-gray-400 mx-1">211</label>
				</div>
			</div>
		</div>
	)
}
