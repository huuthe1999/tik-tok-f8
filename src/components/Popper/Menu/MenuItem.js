import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
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
MenuItem.propTypes = {
	icon: PropTypes.string,
	content: PropTypes.string,
};
export default MenuItem;
