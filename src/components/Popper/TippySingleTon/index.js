import Tippy, { useSingleton } from '@tippyjs/react';
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

export default TippySingleTon;
