/* eslint-disable func-names */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Notice, { Props } from './NoticeView';

export default {
	title: 'Pages/Notice',
	component: Notice,
} as ComponentMeta<typeof Notice>;

const Template: ComponentStory<typeof Notice> = function (args: Props) {
	/* eslint-disable-next-line react/jsx-props-no-spreading */
	return <Notice {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
	member: null,
};
