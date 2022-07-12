import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Dropdown.module.scss';
const cx = classNames.bind(styles);
const DropdownItem = ({
	icon,
	href,
	content,
	to,
	className,
	isMenuItem = false,
	isMenuHeader = false,
	separator = false,
	onBack,
	onClick,
	...restProps
}) => {
	let Component = 'div';
	const props = {
		onClick,
		...restProps,
	};
	if (to) {
		props.to = to;
		Component = Link;
	} else if (href) {
		props.href = href;
		Component = 'a';
	}
	console.log(restProps);
	const [headerHeight, setHeaderHeight] = useState(null);
	const headerRef = useRef(null);

	useEffect(() => {
		setHeaderHeight(headerRef.current?.firstChild.offsetHeight);
	}, []);

	return (
		<Component
			onClick={onClick}
			style={{ height: isMenuHeader ? headerHeight : null }}
			className={cx('wrapper', {
				'wrapper-menu': isMenuItem,
				'wrapper-header': isMenuHeader,
				separator,
				[className]: className,
			})}
			{...props}>
			{icon || isMenuHeader ? (
				<div
					className={cx('wrapper-icon', {
						'wrapper-menu-icon': isMenuItem,
					})}>
					{icon ? (
						<ion-icon name={icon}></ion-icon>
					) : (
						<ion-icon
							onClick={onBack}
							name='chevron-back-outline'></ion-icon>
					)}
				</div>
			) : null}

			<div
				ref={headerRef}
				className={cx('wrapper-content', {
					'wrapper-header-content': isMenuHeader,
				})}>
				<h4>{content}</h4>
			</div>
		</Component>
	);
};

export default DropdownItem;
