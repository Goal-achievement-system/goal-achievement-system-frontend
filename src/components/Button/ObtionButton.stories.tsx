/* eslint-disable func-names */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import ObtionButton, { Props } from './ObtionButton';

export default {
	component: ObtionButton,
	title: 'Component/Button/ObtionButton',
} as ComponentMeta<typeof ObtionButton>;

const Template: ComponentStory<typeof ObtionButton> = function (args: Props) {
	/* eslint-disable-next-line react/jsx-props-no-spreading */
	return <ObtionButton {...args} />;
};

export const selectedLarge = Template.bind({});
selectedLarge.args = {
	onClick: () => {},
	label: '골키퍼 전용머니',
	isSelected: true,
	size: 'large',
};

export const notSelectedLarge = Template.bind({});
notSelectedLarge.args = {
	onClick: () => {},
	label: '계좌이체',
	isSelected: false,
	size: 'large',
};

export const selectedMedium = Template.bind({});
selectedMedium.args = {
	onClick: () => {},

	isSelected: true,
	size: 'medium',
	children: (
		<>
			<span className="text-primaryWhite">목표인증텍스트</span>
			<span className="text-primaryWhite">4.1</span>
		</>
	),
};

export const notSelectedMedium = Template.bind({});
notSelectedMedium.args = {
	onClick: () => {},

	isSelected: false,
	size: 'medium',
	children: (
		<>
			<span className="text-primaryOrange-200">목표인증텍스트</span>
			<span className="text-primaryOrange-200">4.1</span>
		</>
	),
};
export const selectedSmall = Template.bind({});
selectedSmall.args = {
	onClick: () => {},
	label: '#운동',
	isSelected: true,
	size: 'small',
};

export const notSelectedSmall = Template.bind({});
notSelectedSmall.args = {
	onClick: () => {},
	label: '#운동',
	isSelected: false,
	size: 'small',
};
