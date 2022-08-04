import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Path from 'utils/path';
import Layout from 'components/Layout';

const AnnouncementsDetail = lazy(() => import('pages/Announcements/AnnouncementsDetail'));
const Login = lazy(() => import('pages/Login/LoginContainer'));
const SignUp = lazy(() => import('pages/SignUp/SignUpContainer'));
const Setting = lazy(() => import('pages/Setting/SettingContainer'));
const NotFound = lazy(() => import('pages/NotFound'));

function App() {
	return (
		<div className="App">
			<Router>
				<Suspense fallback={<div>Loading..</div>}>
					<Routes>
						<Route path="/*" element={<Layout />} />
						<Route path={Path.announcementsDetail} element={<AnnouncementsDetail />} />
						<Route path={Path.login} element={<Login />} />
						<Route path={Path.signUp} element={<SignUp />} />
						<Route path={Path.setting} element={<Setting />} />

						<Route path="*" element={<NotFound />} />
					</Routes>
				</Suspense>
			</Router>
		</div>
	);
}
export default App;

/*

*/
