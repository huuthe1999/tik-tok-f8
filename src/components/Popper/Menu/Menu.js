import { DropdownItem } from '@/components/DropdownItem';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import 'tippy.js/animations/scale.css';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);
const MENUS = [
	{ icon: 'language', content: 'Tiếng Việt' },
	{
		icon: 'help-circle-outline',
		content: 'Phản hồi và trợ giúp',
		to: '/feedback',
	},
	{ icon: 'keypad', content: 'Phím tắt trên bàn phím' },
];

// Menu consist of components like : Button, Icon, Component, ....
const Menu = ({ children }) => {
	return (
		<Tippy
			interactive
			animation='fade'
			placement='bottom-end'
			delay={[0, 400]}
			trigger='mouseenter click focus'
			render={attrs => (
				<div className={cx('wrapper')} tabIndex={-1} {...attrs}>
					{MENUS.map((item, i) => (
						<DropdownItem key={i} isMenuItem {...item} />
					))}
					<div id='arrow' data-popper-arrow></div>
				</div>
			)}>
			{children}
		</Tippy>
	);
};

export default Menu;
