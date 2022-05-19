import SmallBox from 'components/Box/SmallBox';
import React from 'react';

function Home() {
	return (
		<SmallBox
			onClick={() => console.log(1)}
			goal={{
				goalId: 2,
				memberEmail: '',
				category: '취미',
				goalName: 'Box Component 완성',
				content: '골키퍼 Box Component UI UX 구현하기',
				limitDate: new Date(2022, 4, 22),
				money: 10000,
				reward: 'high',
				verificationResult: 'success',
			}}
		/>
	);
}

export default Home;
