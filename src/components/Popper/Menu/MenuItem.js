import classNames from 'classnames/bind';
import styles from './MenuItem.module.scss';
const cx = classNames.bind(styles);
const MenuItem = ({ icon, content }) => {
	return (
		<div className={cx('wrapper')}>
			{icon && (
				<div className={cx('wrapper-icon')}>
					<ion-icon name={icon}></ion-icon>
				</div>
			)}
			<div className={cx('wrapper-content')}>
				<h4>{content}</h4>
			</div>
		</div>
	);
};

export default MenuItem;
