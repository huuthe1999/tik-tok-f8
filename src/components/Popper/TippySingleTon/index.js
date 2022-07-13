import Tippy, { useSingleton } from '@tippyjs/react';
import PropTypes from 'prop-types';
import React from 'react';

const TippySingleTon = ({ children }) => {
	const [source, target] = useSingleton({
		overrides: ['placement'], //default: ['placement', 'animation', 'interactive']
	});

	const childrenWithProps = React.Children.map(children, child => {
		if (React.isValidElement(child)) {
			return React.cloneElement(child, { singleton: target });
		}
		return child;
	});

	return (
		<>
			<Tippy
				delay={[0, 200]}
				singleton={source}
				moveTransition='transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)'
			/>
			{childrenWithProps}
			{/* {children} */}
		</>
	);
};

TippySingleTon.propTypes = {
	children: PropTypes.node,
};
export default TippySingleTon;
