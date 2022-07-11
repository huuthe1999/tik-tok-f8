import { DefaultLayout } from '@/components/Layouts';
import Following from '@/pages/Following';
import Home from '@/pages/Home';
import Profile from '@/pages/Profile';

const publicRoutes = [
	{
		path: '/*',
		element: <DefaultLayout />,
		children: [
			{ index: true, element: <Home /> },
			{
				path: '@:nickname',
				element: <Profile />,
			},
			{
				path: 'following',
				element: <Following />,
				children: [{ path: 'me', element: <div>Me</div> }],
			},
			{ path: '*', element: <div>404</div> },
		],
	},
];

const protectedRoutes = [];

export { publicRoutes, protectedRoutes };
