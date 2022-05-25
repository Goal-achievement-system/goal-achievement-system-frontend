import React, { useEffect, useState } from 'react';

const useDetectClose = (element: any, initialState: any) => {
	const [isOpen, setIsOpen] = useState(initialState);

	useEffect(() => {
		const onClick = (e: MouseEvent) => {
			const { current } = element;
			// 동일한 녀석이 아니고 elementent 가 포함하고 있다면? 즉 메뉴를 클릭했다면 그냥 return 해주자. 닫지말고
			if (current !== null && !current.contains(e.target)) {
				setIsOpen((currentState: boolean[]) => {
					const newIsOpen = currentState.map(() => false);
					return newIsOpen;
				});
			}
		};
		if (isOpen) {
			window.addEventListener('click', onClick);
		}

		return () => {
			window.removeEventListener('click', onClick);
		};
	}, [element, isOpen]);
	return [isOpen, setIsOpen];
};

export default useDetectClose;
