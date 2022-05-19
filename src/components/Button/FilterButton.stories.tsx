import { ComponentMeta } from '@storybook/react';
import React from 'react';
import FilterButton from './FilterButton';

export default {
	component: FilterButton,
	title: 'Component/Button/FilterButton',
} as ComponentMeta<typeof FilterButton>;
export function Default() {
	return <FilterButton onClick={() => {}} label="Button" />;
}
