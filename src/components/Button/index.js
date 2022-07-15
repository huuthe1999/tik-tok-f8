import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);

const Button = React.forwardRef(
	(
		{
			primary,
			secondary,
			to,
			href,
			icon,
			outline,
			rounded,
			iconBtn,
			badge,
			onClick,
			children,
			className,
			...restProps
		},
		ref,
	) => {
		let Component = 'button';
		const styles = cx('wrapper', {
			primary,
			secondary,
			outline,
			rounded,
			iconBtn,
			[className]: className,
		});
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
		} else if (iconBtn && !icon) {
			Component = 'div';
		}
		return (
			<Component className={styles} ref={ref} {...props}>
				{icon && <ion-icon name={icon}></ion-icon>}
				{!iconBtn && <span>{children}</span>}
				{badge && <sup className={cx('badge')}>{badge}</sup>}
			</Component>
		);
	},
);
Button.propTypes = {
	primary: PropTypes.bool,
	secondary: PropTypes.bool,
	to: PropTypes.string,
	href: PropTypes.string,
	icon: PropTypes.string,
	outline: PropTypes.bool,
	rounded: PropTypes.bool,
	iconBtn: PropTypes.bool,
	badge: PropTypes.number,
	onClick: PropTypes.func,
	children: PropTypes.node,
	className: PropTypes.string,
};
export default Button;
