import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Path from 'utils/path';
import Home from 'pages/Home/HomeContainer';
import Login from 'pages/Login/LoginContainer';
import SignUp from 'pages/SignUp/SignUpContainer';
import Certifications from 'pages/Certifications/CertificationsContainer';
import Notice from 'pages/Notice/NoticeContainer';
import NotFound from 'pages/NotFound';
import Layout from 'components/Layout';

/*
routes
home : "/"
login : "/login"
sign-up : "/sign-up"
certificacations:"/certifications"
*/

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path={Path.login} element={<Login />} />
					<Route path={Path.signUp} element={<SignUp />} />
					<Route path="/*" element={<Layout />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Router>
		</div>
	);
}
export default App;
