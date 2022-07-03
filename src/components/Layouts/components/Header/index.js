import { LogoIcon } from '@/assets/icons';
import { AccountList } from '@/components/Account';
import { Wrapper as PopperWrapper } from '@/components/Popper';
import SuggestItem from '@/components/SuggestItem';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);
const TEST = 'test';
const Header = () => {
	const [visible, setVisible] = useState(false);
	const show = () => setVisible(true);
	const hide = () => setVisible(false);
	const handlerSubmit = e => {
		e.preventDefault();
	};
	return (
		<header className={cx('wrapper')}>
			<div className={cx('inner')}>
				<Link to='/'>
					<LogoIcon />
				</Link>
				<Tippy
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
										<SuggestItem key={i} />
									))}
								<AccountList />
								<div className={cx('search-sug-more')}>
									<p>Xem tất cả kết quả dành cho "{TEST}"</p>
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
				</Tippy>
				<div className={cx('action')}></div>
			</div>
		</header>
	);
};

export default Header;
