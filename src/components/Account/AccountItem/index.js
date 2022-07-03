import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);

const AccountItem = () => {
	return (
		<div className={cx('wrapper')}>
			<span className={cx('avatar')}>
				<img
					src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/3fda2cca3e9257c62e6fb3b8e9710184~c5_300x300.webp?x-expires=1656990000&x-signature=kgDvAi8GwJ%2BD8FLz%2BmqDSC1bvZ4%3D'
					alt='img'
				/>
			</span>
			<div className={cx('content')}>
				<h4>
					Datvila94 <ion-icon name='checkmark-circle'></ion-icon>
				</h4>
				<p>🔥Đạt Villa🔥</p>
			</div>
		</div>
	);
};

export default AccountItem;
