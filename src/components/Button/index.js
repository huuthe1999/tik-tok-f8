import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);

const Button = ({
	primary,
	secondary,
	to,
	href,
	icon,
	outline,
	rounded,
	onClick,
	children,
	...restProps
}) => {
	let Component = 'button';
	const styles = cx('wrapper', {
		primary,
		secondary,
		outline,
		rounded,
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
	}
	return (
		<Component className={styles} {...props}>
			{icon && <ion-icon name={icon}></ion-icon>}
			<span>{children}</span>
		</Component>
	);
};

export default Button;
