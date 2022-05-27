// /* eslint-disable react/jsx-props-no-spreading */
// /* eslint-disable func-names */
// import React from 'react';

// import { ComponentMeta, ComponentStory } from '@storybook/react';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import { Member } from 'types/member';
// // import Popup from 'components/Popup/Popup';
// import Header from './Header';

// export default {
// 	title: 'Component/Header',
// 	component: Header,
// 	argTypes: {},
// } as ComponentMeta<typeof Header>;

// const member: Member = {
// 	email: 'test01@gmail.com',
// 	password: '123456',
// 	nickName: 'test',
// 	sex: 'MALE',
// 	age: 25,
// 	money: 10000,
// };

// const Template: ComponentStory<typeof Header> = function (args) {
// 	return (
// 		<Router>
// 			<Routes>
// 				<Route
// 					path="*"
// 					element={
// 						<Header {...args}>
// 							<Popup title="유령" isLogin />
// 						</Header>
// 					}
// 				/>
// 			</Routes>
// 		</Router>
// 	);

// 	// return <Header {...args} />;
// };
// export const Primary = Template.bind({});
// Primary.args = {
// 	menuList: [
// 		{
// 			id: 'profile',
// 			title: '공지사항',
// 		},
// 		{
// 			id: 'profile',
// 			title: '목표등록',
// 		},
// 		{
// 			id: 'profile',
// 			title: '목표인증',
// 		},
// 		{
// 			id: 'profile',
// 			title: '내 정보',
// 		},
// 	],
// 	member,
// };
