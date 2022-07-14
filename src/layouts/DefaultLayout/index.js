// import useDefaultLayout from '@/hooks/useDefaultLayout';
import classNames from 'classnames/bind';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import styles from './DefaultLayout.module.scss';
const cx = classNames.bind(styles);
const DefaultLayout = () => {
	// Hidden Sidebar when it matches the following page
	// const hiddenSidebar = useDefaultLayout('/following');
	return (
		<div className={cx('wrapper')}>
			<Header />
			<div className={cx('container')}>
				{/* {!hiddenSidebar && (
					<div className={cx('sidebar')}>
						<Sidebar />
					</div>
				)} */}
				<aside className={cx('sidebar')}>
					<Sidebar />
				</aside>
				<div className={cx('content')}>
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default DefaultLayout;
