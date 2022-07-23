import { HeartIcon, MessageIcon, MusicIcon, ShareIcon } from '@/assets/icons';
import { fallbackAvatar, initialAvatar } from '@/assets/images';
import Button from '@/components/Button';
import VideoItem from '@/components/VideoItem';
import convertNumber from '@/utils/formatNumber';
import classNames from 'classnames/bind';
import { useState } from 'react';
import ReactImageFallback from 'react-image-fallback';
import { Link } from 'react-router-dom';
import styles from './ItemContainer.module.scss';
const cx = classNames.bind(styles);
const ItemContainer = () => {
	const [followActive, setFollowActive] = useState(true);

	const handleFollow = () => {
		setFollowActive(!followActive);
	};
	return (
		<div className={cx('wrapper')}>
			<Link to={'/@hoaa'} className={cx('avatar')}>
				<div className={cx('avatar-content')}>
					<ReactImageFallback
						// src={}
						initialTimeout={1000}
						fallbackImage={fallbackAvatar}
						initialImage={initialAvatar}
						// alt={user.full_name}
					/>
					{/* <img src={defaultAvatar} alt='No' /> */}
				</div>
			</Link>

			<div className={cx('content')}>
				<div className={cx('content-header')}>
					{followActive ? (
						<Button
							onClick={handleFollow}
							className={cx('content-button', {
								follow: true,
							})}>
							Follow
						</Button>
					) : (
						<Button
							onClick={handleFollow}
							className={cx('content-button', {
								unFollow: true,
							})}>
							Đang Follow
						</Button>
					)}

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
					<div className={cx('content-video')}>
						<VideoItem />
					</div>
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
