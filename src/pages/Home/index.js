import { ToTopIcon } from '@/assets/icons';
import Button from '@/components/Button';
import ItemContainer from '@/components/ItemContainer';
import { useScrollToTop } from '@/hooks';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
const cx = classNames.bind(styles);

const Home = () => {
	const { visible, scrollToTop } = useScrollToTop();
	return (
		<div className={cx('wrapper')}>
			<div className={cx('list-item')}>
				{[...Array(5)].map((_, i) => (
					<ItemContainer key={i} />
				))}
			</div>
			<div
				className={cx('bottom', {
					'visible-button-down': visible,
				})}>
				<div className={cx('bottom-button')}>
					<Button
						secondary
						outline
						rounded
						className={cx('bottom-buttonDown')}>
						Tải ứng dụng
					</Button>
				</div>
				<button
					className={cx('bottom-buttonToTop')}
					onClick={scrollToTop}>
					<ToTopIcon />
				</button>
			</div>
		</div>
	);
};

export default Home;
