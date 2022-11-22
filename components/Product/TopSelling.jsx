const data = [
	{
		name: 'NIKE Shoes Black Pattern',
		price: '$322',
		role: 'Member',
	},
	{
		name: 'NIKE Shoes Black Pattern',
		price: '$322',
		role: 'Member',
	},
	{
		name: 'NIKE Shoes Black Pattern',
		price: '$322',
		role: 'Member',
	},
	{
		name: 'NIKE Shoes Black Pattern',
		price: '$322',
		role: 'Member',
	},
	{
		name: 'NIKE Shoes Black Pattern',
		price: '$322',
		role: 'Member',
	},
	// More people...
]
function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}
const reviews = { href: '#', average: 4, totalCount: 117 }
import { StarIcon } from '@heroicons/react/20/solid'
export default function TopSelling() {
	return (
		<>
			{data.map((person) => (
				<div className="flex flex-row items-center p-4" key={person.name}>
					<img
						className="h-20 w-auto bg-blue-200 rounded-md p-4"
						src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300"
					/>
					<div className="ml-4">
						<h1 className="text-lg">{person.name}</h1>
						<div className="flex items-center">
							<div className="flex items-center">
								{[0, 1, 2, 3, 4].map((rating) => (
									<StarIcon
										key={rating}
										className={classNames(
											reviews.average > rating
												? 'text-yellow-600'
												: 'text-gray-200',
											'h-5 w-5 flex-shrink-0'
										)}
										aria-hidden="true"
									/>
								))}
							</div>
							<p className="sr-only">{reviews.average} out of 5 stars</p>
							<a
								href={reviews.href}
								className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
							>
								{reviews.totalCount} reviews
							</a>
						</div>
						<span>{person.price}</span>
					</div>
				</div>
			))}
		</>
	)
}
