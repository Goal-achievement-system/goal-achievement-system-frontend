import client from './client';

export const getMember = () => {
	return client.get('/members/myinfo');
};

export default getMember;
