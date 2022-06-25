import { DefaultLayout } from '@/components/Layouts';
import Following from '@/pages/Following';
import Home from '@/pages/Home';

const publicRoutes = [
	{
		path: '/',
		element: <DefaultLayout />,
		children: [
			{ index: true, element: <Home /> },
			{
				path: 'following',
				element: <Following />,
				children: [{ path: 'me', element: <div>Me</div> }],
			},
		],
	},
];

const protectedRoutes = [];

export { publicRoutes, protectedRoutes };
