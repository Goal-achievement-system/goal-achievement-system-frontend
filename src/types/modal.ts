import React, { LazyExoticComponent } from 'react';

export type ModalIndex = {
	name: string;
	component?: LazyExoticComponent<({ props }: any) => JSX.Element>;
};
