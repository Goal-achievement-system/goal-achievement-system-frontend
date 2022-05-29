import client from './client';

const getMember = async () => {
	const res = await client.get('/members/myinfo');
	return res.data;
};

export default getMember;
