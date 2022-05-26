/* eslint-disable func-names */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import SmallBox, { Props } from './SmallBox';

export default {
	title: 'Component/Box/SmallBox',
	component: SmallBox,
} as ComponentMeta<typeof SmallBox>;

const Template: ComponentStory<typeof SmallBox> = function (args: Props) {
	/* eslint-disable-next-line react/jsx-props-no-spreading */
	return <SmallBox {...args} />;
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

export const Success = Template.bind({});
/* eslint-disable-next-line  @typescript-eslint/no-non-null-assertion */
Success.args = { goal: { ...Primary.args.goal!, verificationResult: 'success' } };

export const Fail = Template.bind({});
/* eslint-disable-next-line  @typescript-eslint/no-non-null-assertion */
Fail.args = { goal: { ...Primary.args.goal!, verificationResult: 'fail' } };

export const Hold = Template.bind({});
/* eslint-disable-next-line  @typescript-eslint/no-non-null-assertion */
Hold.args = { goal: { ...Primary.args.goal!, verificationResult: 'hold' } };
