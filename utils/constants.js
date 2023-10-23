import {
	HeartIcon,
	TvIcon,
	SquaresPlusIcon,
	ShoppingBagIcon,
	Bars3BottomLeftIcon,
	BellIcon,
	CalendarIcon,
	ChartBarIcon,
	FolderIcon,
	HomeIcon,
	InboxIcon,
	UsersIcon,
	InboxStackIcon,
	XMarkIcon,
	DocumentPlusIcon,
	BellAlertIcon,
	RectangleStackIcon,
	ChartBarSquareIcon,
	UserCircleIcon,
	UserGroupIcon,
	DocumentTextIcon,
} from '@heroicons/react/24/outline'

export const LOGO_URL =
	'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'

export const navigation = [
	{ name: 'Dashboard', href: '/', icon: HomeIcon, current: true },
	{
		name: 'Analytics',
		href: '/analytics',
		icon: ChartBarSquareIcon,
		current: false,
	},
	{
		name: 'Invoice',
		href: '/invoice',
		icon: InboxStackIcon,
		current: false,
	},
	{
		name: 'Schedule',
		href: '/schedule',
		icon: DocumentTextIcon,
		current: false,
	},
	{
		name: 'Calendar',
		href: '/calendar',
		icon: CalendarIcon,
		current: false,
	},
	{
		name: 'Task View',
		href: '/task-view',
		icon: RectangleStackIcon,
		current: false,
	},
	{ name: 'Messages', href: '/messages', icon: InboxIcon, current: false },
	{
		name: 'Notification',
		href: '/notifications',
		icon: BellAlertIcon,
		current: false,
	},
	{
		name: 'Settings',
		href: '/settings',
		icon: ChartBarIcon,
		current: false,
	},
	{
		name: 'Blank Page',
		href: '/blank-page',
		icon: DocumentPlusIcon,
		current: false,
	},
	{
		name: 'Authentication',
		icon: UserCircleIcon,
		current: false,
		children: [
			{
				name: 'Login',
				href: '/login',
				current: false,
			},
			{
				name: 'Register',
				href: '/register',
				current: false,
			},
			{
				name: 'Forgot Password',
				href: '/forgot-password',
				current: false,
			},
		],
	},
]

export const DashboardCards = [
	{ name: 'Save Products', number: '3321+', icon: HeartIcon, color: 'indigo' },
	{ name: 'Stock Products', number: '3321+', icon: TvIcon, color: 'green' },
	{
		name: 'Sales Products',
		number: '3321+',
		icon: SquaresPlusIcon,
		color: 'indigo',
	},
	{
		name: 'Job Application',
		number: '3321+',
		icon: ShoppingBagIcon,
		color: 'indigo',
	},
]
