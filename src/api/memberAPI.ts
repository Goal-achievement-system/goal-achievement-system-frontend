import { SexEng } from 'types/member';
import { VerificationResultEng } from 'types/goal';
import client from './client';

export interface ChargeMoneyBody {
	email: string;
	password: string;
	money: number;
}

export interface GetMemberGoalsBody {
	state: VerificationResultEng;
	page: number;
}

export interface GetMemberCertsBody {
	state: VerificationResultEng;
	page: number;
}

export interface ReplaceMemberBody {
	email: string;
	password: string;
	nickName: string;
	sex: SexEng;
	age: number;
	money: number;
}

export const getMember = () => {
	return client.get('/members/myinfo');
};

export const replceMember = ({ email, password, nickName, sex, age, money }: ReplaceMemberBody) => {
	return client.put('/members/myinfo', { email, password, nickName, sex, age, money });
};

export const confirmOverlapEmail = (email: string | undefined) => {
	return client.get(`/members/${email}`);
};

export const getNotifications = () => {
	return client.get('members/myinfo/notifications');
};

export const chargeMoney = ({ email, password, money }: ChargeMoneyBody) => {
	return client.put('/members/myinfo/charge', { email, password, money });
};

export const transferMoney = ({ email, password, money }: ChargeMoneyBody) => {
	return client.put('/members/myinfo/refund', { email, password, money });
};

export const getMemberGoalStatistics = () => {
	return client.get('/statistics/mine');
};

export const getMemberGoals = ({ state, page }: GetMemberGoalsBody) => {
	return client.get(`/members/myinfo/goals/${state}/${page}`);
};

export const getMemberCerts = ({ state, page }: GetMemberCertsBody) => {
	return client.get(`/members/myinfo/cert/${state}/${page}`);
};
