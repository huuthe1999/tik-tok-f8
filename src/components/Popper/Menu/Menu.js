import { DropdownItem } from '@/components/DropdownItem';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
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

// Menu consist of components like : Button, Icon, Component, ....
const Menu = ({ children }) => {
	const [menuList, setMenuList] = useState([{ data: MENUS }]);

	const currentMenu = menuList[menuList.length - 1];

	return (
		<Tippy
			interactive
			placement='bottom-end'
			delay={[0, 400]}
			trigger='mouseenter click focus'
			onHide={() => setMenuList(prev => prev.slice(0, 1))}
			render={attrs => (
				<div className={cx('wrapper')} tabIndex={-1} {...attrs}>
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
										console.log('onClick', item);
									}
								}}
								{...item}
							/>
						);
					})}
				</div>
			)}>
			{children}
		</Tippy>
	);
};

export default Menu;
