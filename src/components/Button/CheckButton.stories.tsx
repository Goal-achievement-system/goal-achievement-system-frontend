/* eslint-disable func-names */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import CheckButton from './CheckButton';

export default {
	title: 'Component/Button/CheckButton',
	component: CheckButton,
} as ComponentMeta<typeof CheckButton>;

const Template: ComponentStory<typeof CheckButton> = function (args) {
	/* eslint-disable-next-line react/jsx-props-no-spreading */
	return <CheckButton {...args} />;
};
