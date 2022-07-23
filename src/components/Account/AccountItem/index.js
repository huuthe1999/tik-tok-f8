import { fallbackAvatar, initialAvatar } from '@/assets/images';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import ReactImageFallback from 'react-image-fallback';
import { Link } from 'react-router-dom';
import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);

const AccountItem = forwardRef(({ user, isNavItem }, ref) => {
	return (
		<Link
			to={`@${user.nickname}`}
			ref={ref}
			className={cx('wrapper', {
				'nav-item': isNavItem,
			})}>
			<span className={cx('avatar')}>
				<ReactImageFallback
					src={user.avatar}
					fallbackImage={fallbackAvatar}
					initialImage={initialAvatar}
					alt={user.full_name}
				/>
				{/* <img src={user.avatar ?? defaultAvatar} alt={user.full_name} /> */}
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
});

AccountItem.propTypes = {
	user: PropTypes.object.isRequired,
	isNavItem: PropTypes.bool,
};
export default AccountItem;
