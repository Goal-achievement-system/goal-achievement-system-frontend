import React from 'react';
import GoalAddPopUp from 'components/Modal/GoalAddModal';
import GoalPopUp from 'components/Modal/GoalModal';
import { Goal } from 'types/goal';
import BaseTemplate from './BaseTemplate';

function Home() {
	const goal: Goal = {
		goalId: 1,
		memberEmail: '',
		category: '취미',
		goalName: '목표인증 텍스트',
		content: '목표 내용',
		limitDate: new Date(2022, 5, 25),
		money: 10000,
		reward: 'high',
		verificationResult: 'ongoing',
	};
	return (
		<BaseTemplate Modal={<GoalPopUp goal={goal} />}>
			<div>children</div>
		</BaseTemplate>
	);
}

export default Home;
