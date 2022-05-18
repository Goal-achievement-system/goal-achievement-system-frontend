import { ComponentMeta } from '@storybook/react';
import React from 'react';
import OutlineButton from './OutlineButton';

export default {
	component: OutlineButton,
	title: 'Component/Button/OutlineButton',
} as ComponentMeta<typeof OutlineButton>;
export function Active() {
	return <OutlineButton onClick={() => {}} label="이메일 인증" btnState="active" />;
}

export function Pressed() {
	return <OutlineButton onClick={() => {}} label="이메일 인증" btnState="pressed" />;
}
