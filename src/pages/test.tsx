import React, { useState } from 'react';
import useModal from 'hooks/useModal';
import BaseTemplate from './BaseTemplate';

export default function Test() {
	const [openModal, closeModal] = useModal();
	return (
		<BaseTemplate>
			<button type="button" onClick={() => openModal({ name: 'GoalModal', props: { id: 1 } })}>
				모달오픈
			</button>
			<button type="button" onClick={() => openModal({ name: 'GoalAddModal' })}>
				모달오픈
			</button>
		</BaseTemplate>
	);
}
