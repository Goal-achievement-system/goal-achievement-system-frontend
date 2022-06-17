import { ComponentMeta } from '@storybook/react';
import React from 'react';
import SideMenu from './Sidemenu';

export default {
	name: 'Component/SideMenu',
	component: SideMenu,
} as ComponentMeta<typeof SideMenu>;

const template = () => {};

export const beforeLogin = template.bind({});

export const afterLogin = template.bind({});
