import { HeartIcon, MessageIcon, MusicIcon, ShareIcon } from '@/assets/icons';
import Button from '@/components/Button';
import convertNumber from '@/utils/formatNumber';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './ItemContainer.module.scss';
const cx = classNames.bind(styles);
const ItemContainer = () => {
	return (
		<div className={cx('wrapper')}>
			<Link to={'/@hoaa'} className={cx('avatar')}>
				<div className={cx('avatar-content')}>
					<img
						src='https://yt3.ggpht.com/yti/APfAmoE1RN7U6uN0WBh-adwCdakQDrQ6n2LVOiPm0w=s88-c-k-c0x00ffffff-no-rj-mo'
						alt='No'
					/>
				</div>
			</Link>

			<div className={cx('content')}>
				<div className={cx('content-header')}>
					<Button className={cx('content-buttonFollow')}>
						Follow
					</Button>

					<div className={cx('content-author')}>
						<Link to={'/'} className={cx('content-author-anchor')}>
							<h3 className={cx('content-author-name')}>
								minh_minh_minh
							</h3>
							<h4 className={cx('content-author-nickname')}>
								MINHMINHMINH
							</h4>
						</Link>
					</div>

					<div className={cx('video-desc')}>
						<span className={cx('video-text')}>
							Trả lời @tnt2626 ko có Ielts nhưng có Toeic và
							Iphone 13 nhé :)))
						</span>
						<Link className={cx('video-tag')} to={'/'}>
							<strong>#LearnOnTikTok</strong>
						</Link>
						<Link className={cx('video-tag')} to={'/'}>
							<strong>#minhminhminh</strong>
						</Link>
						<Link className={cx('video-tag')} to={'/'}>
							<strong>#hoccungtiktok</strong>
						</Link>
						<Link className={cx('video-tag')} to={'/'}>
							<strong>#toeic</strong>
						</Link>
					</div>
					<h4 className={cx('video-music')}>
						<Link to={'/'} className={cx('video-link')}>
							<MusicIcon />
							Mii! - VooDoo
						</Link>
					</h4>
				</div>
				<div className={cx('content-body')}>
					<div className={cx('content-video')}></div>
					<div className={cx('content-videoAction')}>
						<button className={cx('content-videoButton')}>
							<span className={cx('content-videoButton-icon')}>
								<HeartIcon />
							</span>
							<strong className={cx('content-videoButton-text')}>
								{convertNumber(18253)}
							</strong>
						</button>
						<button className={cx('content-videoButton')}>
							<span className={cx('content-videoButton-icon')}>
								<MessageIcon />
							</span>
							<strong className={cx('content-videoButton-text')}>
								{convertNumber(1823)}
							</strong>
						</button>
						<button className={cx('content-videoButton')}>
							<span className={cx('content-videoButton-icon')}>
								<ShareIcon />
							</span>
							<strong className={cx('content-videoButton-text')}>
								{convertNumber(28323)}
							</strong>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ItemContainer;
