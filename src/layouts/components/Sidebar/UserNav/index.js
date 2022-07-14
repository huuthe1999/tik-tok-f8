import { AccountItem as RecommendedItem } from '@/components/Account';
import classNames from 'classnames/bind';
import { PropTypes } from 'prop-types';
import { useState } from 'react';
import './UserNav.module.scss';
import styles from './UserNav.module.scss';
const cx = classNames.bind(styles);

const UserNav = ({ title, recommendList, loadMoreList }) => {
	const [userRecommendedList, setUserRecommendedList] =
		useState(recommendList);
	const [showMore, setShowMore] = useState(true);
	const handleLoadMore = () => {
		setUserRecommendedList([...userRecommendedList, ...loadMoreList]);
		setShowMore(false);
	};
	const handleHideMore = () => {
		setUserRecommendedList(recommendList);
		setShowMore(true);
	};
	return (
		<div
			className={cx('user', {
				recommend: true,
			})}>
			<p className={cx('user-title')}>{title}</p>
			{userRecommendedList.map((user, index) => (
				<RecommendedItem key={index} isNavItem user={user} />
			))}
			<div
				onClick={showMore ? handleLoadMore : handleHideMore}
				className={cx('user-showMore')}>
				{showMore ? <p>Xem tất cả</p> : <p>Ẩn bớt</p>}
			</div>
		</div>
	);
};

UserNav.propTypes = {
	title: PropTypes.string.isRequired,
	recommendList: PropTypes.array,
	loadMoreList: PropTypes.array,
};
export default UserNav;
