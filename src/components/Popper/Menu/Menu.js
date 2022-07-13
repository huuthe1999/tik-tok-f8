import { DropdownItem } from '@/components/DropdownItem';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);
const MENUS = [
	{
		icon: 'language',
		content: 'Tiếng Việt',
		children: {
			content: 'Ngôn ngữ level 1',
			data: [
				{
					code: 'vi',
					content: 'Tiếng Việt',
					children: {
						content: 'Ngôn ngữ level 2',
						data: [
							{ code: 'vi', content: 'Tiếng Việt sub' },
							{ code: 'en', content: 'Tiếng Anh  sub' },
							{ code: 'jp', content: 'Tiếng Nhật  sub' },
						],
					},
				},
				{ code: 'en', content: 'Tiếng Anh' },
				{ code: 'jp', content: 'Tiếng Nhật' },
			],
		},
	},
	{
		icon: 'help-circle-outline',
		content: 'Phản hồi và trợ giúp',
		to: '/feedback',
	},
	{ icon: 'keypad', content: 'Phím tắt trên bàn phím' },
];

const AuthMenus = [
	{ icon: 'person-outline', content: 'Xem hồ sơ', to: '/@hoaa' },
	{ icon: 'logo-tiktok', content: 'Nhận xu', to: '/coin' },
	{ icon: 'settings-outline', content: 'Cài đặt', to: '/setting' },
	...MENUS,
	{
		icon: 'log-out-outline',
		content: 'Đăng xuất',
		to: '/logout',
		separator: true,
	},
];
// Menu consist of components like : Button, Icon, Component, ....
const Menu = ({ children, isAuth }) => {
	const [menuList, setMenuList] = useState([
		{ data: isAuth ? AuthMenus : MENUS },
	]);

	const currentMenu = menuList[menuList.length - 1];
	const handleChange = () => {
		console.log('handleChange');
	};
	return (
		<Tippy
			interactive
			placement='bottom-end'
			delay={[0, 400]}
			offset={[6, 8]}
			trigger='mouseenter click focus'
			onHide={() => setMenuList(prev => prev.slice(0, 1))}
			render={attrs => (
				<div
					className={cx('wrapper', {
						header: menuList.length > 1,
					})}
					tabIndex={-1}
					{...attrs}>
					{menuList.length > 1 && (
						<DropdownItem
							isMenuHeader
							content={currentMenu.content}
							onBack={() =>
								setMenuList(prev =>
									prev.slice(0, prev.length - 1),
								)
							}
						/>
					)}
					<div className={cx('wrapper-list')}>
						{currentMenu.data.map((item, i) => {
							const isParentMenu = !!item.children;
							return (
								<DropdownItem
									key={i}
									isMenuItem
									onClick={() => {
										if (isParentMenu) {
											setMenuList(prev => [
												...prev,
												item.children,
											]);
										} else {
											handleChange();
										}
									}}
									{...item}
								/>
							);
						})}
					</div>
				</div>
			)}>
			{children}
		</Tippy>
	);
};

Menu.propTypes = {
	children: PropTypes.node,
	isAuth: PropTypes.bool,
};
export default Menu;
