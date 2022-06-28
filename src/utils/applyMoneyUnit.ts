// eslint-disable-next-line import/prefer-default-export
export const applyMoneyUnit = (text: string): string => {
	const regex = /[^0-9]/g;
	const number = Number(text.replace(regex, ''));
	if (number > 1000) return '1000';
	return number.toString();
};
