import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Dropdown.module.scss';
const cx = classNames.bind(styles);
const DropdownItem = ({
	icon,
	href,
	content,
	to,
	isMenuItem,
	...restProps
}) => {
	let Component = 'div';
	const props = {
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
		<Component
			className={cx('wrapper', {
				'wrapper-menu': isMenuItem,
			})}
			{...props}>
			{icon && (
				<div
					className={cx('wrapper-icon', {
						'wrapper-icon-menu': isMenuItem,
					})}>
					<ion-icon name={icon}></ion-icon>
				</div>
			)}

			<div className={cx('wrapper-content')}>
				<h4>{content}</h4>
			</div>
		</Component>
	);
};

export default DropdownItem;
