import { ComponentMeta } from '@storybook/react';
import React from 'react';
import MiddleButton from './MiddleButton';

export default {
	component: MiddleButton,
	title: 'Component/Button/MiddleButton',
} as ComponentMeta<typeof MiddleButton>;
export function Default() {
	return <MiddleButton onClick={() => {}} label="Button" />;
}
