import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// 경로 잘못 입력 방지를 위한 파일
import Path from 'utils/path';
import Home from 'pages/home/HomeContainer';
import Notice from 'pages/notice/NoticeContainer';
import Login from 'pages/Login';
import SignUp from 'pages/SignUp';
import NotFound from 'pages/NotFound';
/*
routes
home : "/"
login : "/login"
sign-up : "/sign-up"
*/
function App() {
	return (
		<div className="App">
			<Router>
				{
					// <Header />
					// Switch -> Routes 로 바뀐듯 합니다
				}
				<Routes>
					<Route path={Path.home} element={<Home />} />
					<Route path={Path.login} element={<Login />} />
					<Route path={Path.signUp} element={<SignUp />} />
					<Route path={Path.notice} element={<Notice />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Router>
		</div>
	);
}
export default App;
