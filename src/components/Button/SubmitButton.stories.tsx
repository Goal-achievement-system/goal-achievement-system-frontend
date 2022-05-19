import { ComponentMeta } from '@storybook/react';
import React from 'react';
import SubmitButton from './SubmitButton';

export default {
	component: SubmitButton,
	title: 'Component/Button/SubmitButton',
} as ComponentMeta<typeof SubmitButton>;
export function Active() {
	return <SubmitButton onClick={() => {}} label="이메일 인증" btnState="active" />;
}

export function InActive() {
	return <SubmitButton onClick={() => {}} label="이메일 인증" btnState="inactive" />;
}

export function Pressed() {
	return <SubmitButton onClick={() => {}} label="이메일 인증" btnState="pressed" />;
}
