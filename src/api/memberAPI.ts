import { Member } from 'types/member';
import client from './client';

export const getMember = () => {
	return client.get('/members/myinfo');
};

export const replceMember = ({ email, password, nickName, sex, age, money }: Member) => {
	return client.put('/members/myinfo', { email, password, nickName, sex, age, money });
};

export const confirmOverlapEmail = (email: string | undefined) => {
	return client.get(`/members/${email}`);
};

export const getNotifications = () => {
	return client.get('/myinfo/notifications');
};
export default getMember;
