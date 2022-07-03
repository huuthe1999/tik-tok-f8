import classNames from 'classnames/bind';
import styles from './SuggestItem.module.scss';
const cx = classNames.bind(styles);
const SuggestItem = () => {
	return (
		<div className={cx('sug-item')}>
			<div className={cx('sug-item-icon')}>
				<ion-icon name='search'></ion-icon>
			</div>
			<div className={cx('sug-item-content')}>
				<h4>Content 1</h4>
			</div>
		</div>
	);
};

export default SuggestItem;
