import { LogoIcon } from '@/assets/icons';
import Button from '@/components/Button';

import { Menu as PopperMenu } from '@/components/Popper';
import TippySingleTon from '@/components/Popper/TippySingleTon';
import ROUTES from '@/configs/Routes';
import Tippy from '@tippyjs/react';

import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';
import styles from './Header.module.scss';
import Search from './Search';
const cx = classNames.bind(styles);
const Header = () => {
	const isAuth = true;
	return (
		<header className={cx('wrapper')}>
			<div className={cx('inner')}>
				<Link to={ROUTES.HOME}>
					<LogoIcon />
				</Link>
				<Search />
				<div className={cx('action')}>
					<Button
						to={ROUTES.UPLOAD}
						secondary
						icon='cloud-upload-outline'>
						Tải lên
					</Button>
					{isAuth ? (
						<>
							<TippySingleTon>
								<Tippy placement='bottom' content='Tin nhắn'>
									<Button
										to={ROUTES.MESSAGES}
										iconBtn
										badge={9}
										icon='paper-plane-outline'></Button>
								</Tippy>
								<Tippy placement='bottom' content='Hộp thư'>
									<Button
										iconBtn
										badge={12}
										icon='chatbox-ellipses-outline'></Button>
								</Tippy>
							</TippySingleTon>
							<PopperMenu isAuth>
								<Button
									iconBtn
									className={cx('avatar')}
									style={{
										padding: 0,
										backgroundImage: `url('https://yt3.ggpht.com/yti/APfAmoE1RN7U6uN0WBh-adwCdakQDrQ6n2LVOiPm0w=s88-c-k-c0x00ffffff-no-rj-mo')`,
									}}></Button>
							</PopperMenu>
						</>
					) : (
						<>
							<Button primary>Đăng nhập</Button>
							<PopperMenu>
								<ion-icon
									class={cx('action-icon-more')}
									name='ellipsis-vertical'></ion-icon>
							</PopperMenu>
						</>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
