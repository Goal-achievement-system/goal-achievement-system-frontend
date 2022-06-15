import React, { LazyExoticComponent } from 'react';

type LazyImportComponent = LazyExoticComponent<({ props }: any) => JSX.Element>;

export type ModalIndex = {
	name: string;
	component?: LazyImportComponent;
};
