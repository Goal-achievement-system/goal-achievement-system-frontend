import { ComponentMeta } from '@storybook/react';
import React from 'react';
import ObtionButton from './ObtionButton';

export default {
	component: ObtionButton,
	title: 'Component/Button/ObtionButton',
} as ComponentMeta<typeof ObtionButton>;
export function selectedLarge() {
	return <ObtionButton onClick={() => {}} label="골키퍼 전용머니" isSelected size="large" />;
}

export function notSelectedLarge() {
	return <ObtionButton onClick={() => {}} label="계좌이체" isSelected={false} size="large" />;
}
export function selectedMedium() {
	return (
		<ObtionButton onClick={() => {}} isSelected size="medium">
			<>
				<span className="text-primaryWhite">목표인증텍스트</span>
				<span className="text-primaryWhite">4.1</span>
			</>
		</ObtionButton>
	);
}

export function notSelectedMedium() {
	return (
		<ObtionButton onClick={() => {}} isSelected={false} size="medium">
			<>
				<span className="text-primaryOrange-200">목표인증텍스트</span>
				<span className="text-primaryOrange-200">4.1</span>
			</>
		</ObtionButton>
	);
}
export function selectedSmall() {
	return <ObtionButton onClick={() => {}} label="#운동" isSelected size="small" />;
}

export function notSelectedSmall() {
	return <ObtionButton onClick={() => {}} label="#운동" isSelected={false} size="small" />;
}
