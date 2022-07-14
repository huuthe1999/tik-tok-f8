import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);

const AccountItem = ({ user, isNavItem }) => {
	return (
		<Link
			to={`@${user.nickname}`}
			className={cx('wrapper', {
				'nav-item': isNavItem,
			})}>
			<span className={cx('avatar')}>
				<img
					src={
						user.avatar ??
						'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/041325642c723a72ceb1e81a221468f6.jpeg?x-expires=1657983600&x-signature=YAv7XzlZI9TI%2BHApo66YxiHD9%2Fg%3D'
					}
					alt={user.full_name}
				/>
			</span>
			<div className={cx('content')}>
				<h4>
					{user.full_name}
					{user.tick && <ion-icon name='checkmark-circle'></ion-icon>}
				</h4>
				<p>{user.nickname}</p>
			</div>
		</Link>
	);
};

AccountItem.propTypes = {
	user: PropTypes.object.isRequired,
	isNavItem: PropTypes.bool,
};
export default AccountItem;
