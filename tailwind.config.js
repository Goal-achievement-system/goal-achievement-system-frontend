module.exports = {
	content: ['./src/**/*.tsx', './public/index.html'],
	theme: {
		fontFamily: {
			appleSDGothicNeo: ['AppleSDGothicNeo', 'Noto Sans KR', 'sans - serif'],
		},
		extend: {
			screens: {
				pc: '768px',
			},
			colors: {
				primaryOrange: {
					100: '#FFEEDB',
					200: '#FF8A00',
					300: '#E47B00',
				},
				primaryBlack: {
					100: '#E7E7E7',
					200: '#C1C1C1',
					300: '#A6A6A6',
					400: '#8B8B8B',
					500: '#000000',
				},
				primaryGray: {
					100: '#E6E6E6',
					200: '#898989',
				},
				primaryWhite: '#FFFFFF',
				buttonBlack: {
					100: '#F4F4F4',
					200: '#FF1523',
				},
				buttonOrange: {
					100: '#FFEEDB',
					200: '#FF1523',
				},
				buttonRed: {
					100: '#FFE8E8',
					200: '#FF6B6B',
				},
				buttonGray: {
					100: '#E8E8E8',
					200: '#949494',
				},
				borderGray: '#E7E7E7',
				borderOrange: '#FF8A00',
				statesRed: '#FF1523',
				statesOrange: '#FF8A00',
				modalGray: '#FAFAFA',
				alarmGray: '#F9F9F9',
			},
		},
	},
	/* eslint-disable global-require */
	plugins: [require('@tailwindcss/line-clamp')],
};
