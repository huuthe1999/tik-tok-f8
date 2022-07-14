import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Dropdown.module.scss';
const cx = classNames.bind(styles);
const DropdownItem = ({
	icon,
	iconComponent,
	href,
	content,
	to,
	className,
	isNavItem = false,
	isMenuItem = false,
	isMenuHeader = false,
	separator = false,
	onBack,
	onClick,
	...restProps
}) => {
	let Component = isMenuHeader ? 'header' : 'div';
	const props = {
		onClick,
		...restProps,
	};
	if (to || isNavItem) {
		if (isNavItem) {
			Component = NavLink;
		} else {
			Component = Link;
		}
		props.to = to;
	} else if (href) {
		props.href = href;
		Component = 'a';
	}

	const [headerHeight, setHeaderHeight] = useState(null);
	const headerRef = useRef(null);

	useEffect(() => {
		setHeaderHeight(headerRef.current?.firstChild.offsetHeight);
	}, []);

	return (
		<Component
			onClick={onClick}
			style={{
				height: isMenuHeader ? headerHeight : null,
			}}
			// end={isNavItem ? 'end' : null}
			className={
				isNavItem
					? nav =>
							cx('wrapper', {
								'wrapper-menu': isMenuItem,
								'wrapper-header': isMenuHeader,
								active: nav.isActive ? true : false,
								separator,
								[className]: className,
							})
					: cx('wrapper', {
							'wrapper-menu': isMenuItem,
							'wrapper-header': isMenuHeader,
							separator,
							[className]: className,
					  })
			}
			{...props}>
			{iconComponent ? (
				<div
					className={cx('wrapper-icon', {
						'wrapper-menu-icon': isMenuItem,
					})}>
					{iconComponent}
				</div>
			) : icon || isMenuHeader ? (
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

DropdownItem.propTypes = {
	icon: PropTypes.string,
	iconComponent: PropTypes.element,
	isNavItem: PropTypes.bool,
	href: PropTypes.string,
	content: PropTypes.string.isRequired,
	to: PropTypes.string,
	className: PropTypes.string,
	isMenuItem: PropTypes.bool,
	isMenuHeader: PropTypes.bool,
	separator: PropTypes.bool,
	onBack: PropTypes.func,
	onClick: PropTypes.func,
};
export default DropdownItem;
