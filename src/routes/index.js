import ROUTES from '@/configs/Routes';
import DefaultLayout from '@/layouts';
import Following from '@/pages/Following';
import Home from '@/pages/Home';
import Profile from '@/pages/Profile';
const publicRoutes = [
	{
		path: ROUTES.HOME_BASE,
		element: <DefaultLayout />,
		children: [
			{ index: true, element: <Home /> },
			{
				path: ROUTES.PROFILE,
				element: <Profile />,
			},
			{
				path: ROUTES.FOLLOWING,
				element: <Following />,
				children: [{ path: ROUTES.ME, element: <div>Me</div> }],
			},
			{ path: ROUTES.NOTFOUND, element: <div>404</div> },
		],
	},
];

const protectedRoutes = [];

export { publicRoutes, protectedRoutes };
