/* eslint-disable func-names */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import PushNoticeBox, { Props } from './PushNoticeBox';

export default {
	title: 'Component/Box/PushNoticeBox',
	component: PushNoticeBox,
} as ComponentMeta<typeof PushNoticeBox>;

const Template: ComponentStory<typeof PushNoticeBox> = function (args: Props) {
	/* eslint-disable-next-line react/jsx-props-no-spreading */
	return <PushNoticeBox {...args} />;
};

export const Have = Template.bind({});

Have.args = {
	pushNoticeList: [
		{
			notificationId: 6,
			content: '목표달성에 성공했습니다. 상금이 지급되었습니다.',
			memberEmail: 'nini@nini.com',
			date: new Date(),
			url: 'GET /api/members/myinfo',
			read: false,
			category: '카테고리 : 목표검증',
		},
	],
};

export const NotHave = Template.bind({});
NotHave.args = {};
