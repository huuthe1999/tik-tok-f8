import { fallbackAvatar, initialAvatar } from '@/assets/images';
import Button from '@/components/Button';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import ReactImageFallback from 'react-image-fallback';
import { Link } from 'react-router-dom';
import styles from './ItemTippy.module.scss';
const cx = classNames.bind(styles);

const ItemTippy = ({ children }) => {
	return (
		<HeadlessTippy
			interactive
			offset={[0, 8]}
			delay={[600, 0]}
			placement='bottom-start'
			zIndex={99}
			render={attrs => (
				<div className={cx('wrapper')} tabIndex={-1} {...attrs}>
					<div className={cx('header')}>
						<Link
							to={'/'}
							target='_blank'
							className={cx('header-avatar')}>
							<span className={cx('header-avatarSpan')}>
								<ReactImageFallback
									// src={user.avatar}
									fallbackImage={fallbackAvatar}
									initialImage={initialAvatar}
									// alt={ user.full_name }
									className={cx('header-avatarImg')}
								/>
								{/* <img
									className={cx('header-avatarImg')}
									src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1658034000&x-signature=YwFrhEmKMQCeULqu5jxOeRBLmjU%3D'
									alt='No'
								/> */}
							</span>
						</Link>

						<Button primary className={cx('button-follow')}>
							Theo dõi
						</Button>
					</div>
					<Link to={'/'} target='_blank' className={cx('user-title')}>
						<span>theanh28entertainment</span>
						{true && <ion-icon name='checkmark-circle'></ion-icon>}
					</Link>
					<br />
					<Link to={'/'} target='_blank' className={cx('user-name')}>
						Theanh28 Entertainment
					</Link>
					<p className={cx('user-info')}>
						<span className={cx('user-follow-count')}>6.4M</span>
						<span className={cx('user-follow')}>
							Người theo dõi
						</span>
						<span className={cx('user-like-count')}>394.8M</span>
						<span className={cx('user-like')}>Thích</span>
					</p>
				</div>
			)}>
			{children}
		</HeadlessTippy>
	);
};

export default ItemTippy;
