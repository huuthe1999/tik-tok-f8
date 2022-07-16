const convertNumber = number =>
	new Intl.NumberFormat('en-US', {
		notation: 'compact',
		compactDisplay: 'short',
		maximumFractionDigits: 1,
		roundingIncrement: 5,
	}).format(number);

export default convertNumber;
