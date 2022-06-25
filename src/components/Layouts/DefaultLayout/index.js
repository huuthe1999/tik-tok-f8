import useDefaultLayout from '@/hooks/useDefaultLayout';
import { Link, Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
const DefaultLayout = () => {
	// Hidden Sidebar when it matches the following page
	const hiddenSidebar = useDefaultLayout('/following');
	return (
		<>
			<nav>
				<Link to='/'>Home</Link> |{' '}
				<Link to='/following'>Following</Link> |{' '}
				<Link to='/following/me'>me</Link>
			</nav>
			<Header />
			<div className='container'>
				{!hiddenSidebar && <Sidebar />}
				<Outlet />
			</div>
		</>
	);
};

export default DefaultLayout;
