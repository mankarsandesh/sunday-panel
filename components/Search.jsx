import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

export default function Search() {
	return (
		<div className="border  rounded-lg mt-4 flex bg-white border-gray-300 pl-6 pr-4 py-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 w-80">
			<input
				type="text"
				name="search"
				id="price"
				className="block w-full  focus:outline-none text-md"
				placeholder="Search"
				aria-describedby="price-currency"
			/>
			<MagnifyingGlassIcon className="text-gray-500 h-6 w-6 pt-1 cursor-pointer" />
		</div>
	)
}
