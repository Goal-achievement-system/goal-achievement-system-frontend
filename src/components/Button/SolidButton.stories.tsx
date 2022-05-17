import { ComponentMeta } from '@storybook/react';
import React from 'react';
import SolidButton from './SolidButton';

export default {
	component: SolidButton,
	title: 'Component/Button/SolidButton',
} as ComponentMeta<typeof SolidButton>;
export function Active() {
	return <SolidButton onClick={() => {}} label="이메일 인증" state="active" />;
}

export function InActive() {
	return <SolidButton onClick={() => {}} label="이메일 인증" state="inactive" />;
}

export function Pressed() {
	return <SolidButton onClick={() => {}} label="이메일 인증" state="pressed" />;
}
