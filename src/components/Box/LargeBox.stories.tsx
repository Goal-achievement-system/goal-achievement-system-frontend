import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import LargeBox from './LargeBox';

export default {
	title: 'Component/Box/LargeBox',
	component: LargeBox,
} as ComponentMeta<typeof LargeBox>;

const Template: ComponentStory<typeof LargeBox> = function (args) {
	/* eslint-disable-next-line react/jsx-props-no-spreading */
	return <LargeBox {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
	goal: {
		goalId: 1,
		memberEmail: '',
		category: '취미',
		goalName: '목표인증 텍스트',
		content: '목표 내용',
		limitDate: new Date(2022, 5, 25),
		money: 10000,
		reward: 'high',
		verificationResult: 'ongoing',
	},
};
