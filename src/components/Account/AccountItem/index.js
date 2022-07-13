import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);

const AccountItem = ({ user }) => {
	return (
		<Link to={`@${user.nickname}`} className={cx('wrapper')}>
			<span className={cx('avatar')}>
				<img
					src={
						user.avatar ||
						'https://i.picsum.photos/id/124/3504/2336.jpg?hmac=B1Avp6or9Df8vpnN4kQsGNfD66j8hH3gLtootCoTw4M'
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
};
export default AccountItem;
