import { ComponentMeta } from '@storybook/react';
import React from 'react';
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
} as ComponentMeta<typeof SmallBox>;

export function Success() {
	return <SmallBox onClick={() => {}} goal={{ ...tempData, verificationResult: 'success' }} />;
}

export function Fail() {
	return <SmallBox onClick={() => {}} goal={{ ...tempData, verificationResult: 'fail' }} />;
}

export function Hold() {
	return <SmallBox onClick={() => {}} goal={{ ...tempData, verificationResult: 'hold' }} />;
}

export function Ongoing() {
	return <SmallBox onClick={() => {}} goal={{ ...tempData, verificationResult: 'ongoing' }} />;
}
