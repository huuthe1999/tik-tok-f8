import classNames from 'classnames/bind';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);

const Button = (
	{
		primary,
		secondary,
		to,
		href,
		icon,
		outline,
		rounded,
		iconBtn,
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
		</Component>
	);
};

export default React.forwardRef(Button);
