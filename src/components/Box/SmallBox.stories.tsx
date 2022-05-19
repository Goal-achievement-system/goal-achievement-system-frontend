import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Goal } from 'types/goal';
import SmallBox from './SmallBox';

const tempData = {
	goalId: 1,
	memberEmail: '',
	category: '작업',
	goalName: 'Box Component 완성',
	content: '골키퍼 Box Component UI UX 구현하기',
	limitDate: new Date(2022, 4, 25),
	money: 10000,
	reward: 'high',
};

export default {
	component: SmallBox,
	title: 'Component/Box/SmallBox',
	argTypes: {
		goal: { control: 'object' },
	},
} as ComponentMeta<typeof SmallBox>;

const Template: ComponentStory<typeof SmallBox> = (args) => {
	return <SmallBox onClick={() => {}} goal={{ ...args.goal }} />;
};

export const Success = Template.bind({});
Success.args = { goal: { ...tempData, verificationResult: 'success' } };

export const Fail = Template.bind({});
Fail.args = { goal: { ...tempData, verificationResult: 'fail' } };

export const Hold = Template.bind({});
Hold.args = { goal: { ...tempData, verificationResult: 'hold' } };

export const Ongoing = Template.bind({});
Ongoing.args = { goal: { ...tempData, verificationResult: 'ongoing' } };
