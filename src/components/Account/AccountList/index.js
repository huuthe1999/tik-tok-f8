import classNames from 'classnames/bind';
import AccountItem from '../AccountItem';
import styles from './AccountList.module.scss';
const cx = classNames.bind(styles);

const AccountList = () => {
	return (
		<>
			<div className={cx('title')}>Tài khoản</div>
			{Array(5)
				.fill(null)
				.map((_, i) => (
					<AccountItem key={i} />
				))}
		</>
	);
};

export default AccountList;
