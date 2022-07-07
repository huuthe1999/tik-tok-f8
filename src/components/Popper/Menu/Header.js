import classNames from 'classnames/bind';
import styles from './MenuItem.module.scss';
const cx = classNames.bind(styles);

const Header = ({ onBack, title }) => {
	return (
		<header
			className={cx('wrapper', {
				header: true,
			})}>
			<div className={cx('wrapper-icon')} onback={onBack}>
				<ion-icon name='chevron-back-outline'></ion-icon>
			</div>
			<div className={cx('wrapper-content')}>
				<h4>{title}</h4>
			</div>
		</header>
	);
};

export default Header;
