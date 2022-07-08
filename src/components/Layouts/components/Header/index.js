import { LogoIcon } from '@/assets/icons';
import { AccountItem } from '@/components/Account';
import Button from '@/components/Button';
import { DropdownItem as SuggestItem } from '@/components/DropdownItem';
import {
	Menu as PopperMenu,
	Wrapper as PopperWrapper,
} from '@/components/Popper';
import TippySingleTon from '@/components/Popper/TippySingleTon';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);
const Header = () => {
	const [visible, setVisible] = useState(false);
	const show = () => setVisible(true);
	const hide = () => setVisible(false);
	const handlerSubmit = e => {
		e.preventDefault();
	};
	const isAuth = true;
	return (
		<header className={cx('wrapper')}>
			<div className={cx('inner')}>
				<Link to='/'>
					<LogoIcon />
				</Link>
				<HeadlessTippy
					interactive
					visible={visible}
					onClickOutside={hide}
					render={attrs => (
						<div
							className={cx('search-sug')}
							tabIndex={-1}
							{...attrs}>
							<PopperWrapper>
								{Array(8)
									.fill(null)
									.map((_, i) => (
										<SuggestItem
											key={i}
											icon='search'
											content={`Datvila9${i}`}
										/>
									))}
								<p
									onClick={hide}
									className={cx('search-sug-titleAcc')}>
									Tài khoản
								</p>
								{Array(5)
									.fill(null)
									.map((_, i) => (
										<AccountItem key={i} />
									))}
								<div className={cx('search-sug-more')}>
									<p>Xem tất cả kết quả dành cho "{11111}"</p>
								</div>
							</PopperWrapper>
						</div>
					)}>
					<div className={cx('search')}>
						<form
							className={cx('search-form')}
							onSubmit={handlerSubmit}>
							<input
								onFocus={show}
								className={cx('search-input')}
								type='text'
								placeholder='Tìm kiếm tài khoản và video'
								spellCheck={false}
							/>
							<div className={cx('search-clear-button')}>
								<ion-icon name='close-circle'></ion-icon>
								{/* <ion-icon name='reload-circle-outline'></ion-icon> */}
							</div>
							<span className={cx('search-splitter')}></span>
							<button className={cx('search-button')}>
								<ion-icon name='search'></ion-icon>
							</button>
						</form>
					</div>
				</HeadlessTippy>
				<div className={cx('action')}>
					{isAuth ? (
						<>
							<Button
								to='/upload'
								secondary
								icon='cloud-upload-outline'>
								Tải lên
							</Button>
							<TippySingleTon>
								<Tippy placement='bottom' content='Tin nhắn'>
									<Button
										to='/messages'
										iconBtn
										icon='paper-plane-outline'></Button>
								</Tippy>
								<Tippy placement='bottom' content='Hộp thư'>
									<Button
										iconBtn
										icon='chatbox-ellipses-outline'></Button>
								</Tippy>
							</TippySingleTon>
							<PopperMenu isAuth>
								<Button
									iconBtn
									className={cx('avatar')}
									style={{
										padding: 0,
										backgroundImage: `url('https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/18eaa1f277e928c408626da7fdc38fc2~c5_100x100.jpeg?x-expires=1657418400&x-signature=sSmYpK6izqvW4Y4XHlCr8vvE5%2Bs%3D')`,
									}}></Button>
							</PopperMenu>
						</>
					) : (
						<>
							<Button
								to='/upload'
								secondary
								icon='cloud-upload-outline'>
								Tải lên
							</Button>
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
