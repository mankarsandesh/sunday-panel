import React from 'react'

const Card = ({ item }) => {
	return (
		<div className="p-8 rounded-xl bg-white flex ">
			<div
				className={`mr-4   rounded-full w-14 h-14 flex justify-center justify-items-center
					text-${item.color}-800 bg-${item.color}-100`}
			>
				<item.icon
					className=" h-8 w-8 flex-shrink-0 m-auto"
					aria-hidden="true"
				/>
			</div>
			<span>
				<h1 className="text-lg font-bold text-gray-700">{item.number}</h1>
				<h1 className="text-sm text-gray-600">{item.name}</h1>
			</span>
		</div>
	)
}

export default Card
