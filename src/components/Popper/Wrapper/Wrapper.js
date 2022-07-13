import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Wrapper.module.scss';
const cx = classNames.bind(styles);
const Wrapper = ({ children }) => {
	return <div className={cx('wrapper')}>{children}</div>;
};
Wrapper.propTypes = {
	children: PropTypes.node,
};
export default Wrapper;
