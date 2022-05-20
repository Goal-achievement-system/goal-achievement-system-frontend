import { ComponentMeta } from '@storybook/react';
import React from 'react';
import LargeBox from './LargeBox';

const tempData = {
	goalId: 1,
	memberEmail: '',
	category: '작업',
	goalName: 'Box Component 완성',
	content: '골키퍼 Box Component UI UX 구현하기',
	limitDate: new Date(2022, 5, 25),
	money: 10000,
	reward: 'high',
};

export default {
	component: LargeBox,
	title: 'Component/Box/LargeBox',
	argTypes: {
		goal: { control: 'object' },
	},
} as ComponentMeta<typeof LargeBox>;

export function Default() {
	return <LargeBox goal={{ ...tempData, verificationResult: 'success' }} />;
}
