/* eslint-disable func-names */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Notice from './AnnouncementsView';

export default {
	title: 'Pages/Notice',
	component: Notice,
} as ComponentMeta<typeof Notice>;

const Template: ComponentStory<typeof Notice> = function () {
	/* eslint-disable-next-line react/jsx-props-no-spreading */
	return <Notice />;
};

export const Primary = Template.bind({});
Primary.args = {
	member: null,
};
