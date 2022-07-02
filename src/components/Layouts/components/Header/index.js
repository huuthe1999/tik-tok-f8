import { LogoIcon } from '@/assets/icons';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);
const Header = () => {
	const handlerSubmit = e => {
		e.preventDefault();
	};
	return (
		<header className={cx('wrapper')}>
			<div className={cx('inner')}>
				<Link to='/'>
					<LogoIcon />
				</Link>
				<div className={cx('search')}>
					<form
						className={cx('search-form')}
						onSubmit={handlerSubmit}>
						<input
							className={cx('search-input')}
							type='text'
							placeholder='Tìm kiếm tài khoản và video'
							spellCheck={false}
						/>
						<div className={cx('search-clear-button')}>
							<ion-icon name='close-circle'></ion-icon>
							{/* <ion-icon name='reload-circle-outline'></ion-icon> */}
						</div>
						<span className={cx('search-splitter')}></span>
						<button className={cx('search-button')}>
							<ion-icon name='search'></ion-icon>
						</button>
					</form>
				</div>
				<div className={cx('action')}></div>
			</div>
		</header>
	);
};

export default Header;
