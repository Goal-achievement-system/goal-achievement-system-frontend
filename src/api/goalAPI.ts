import { Goal } from 'types/goal';
import client from './client';

export interface LoadGoalListParam {
	status: string;
	category: string;
	page: number;
}

export interface LoadGoalParam {
	goalId: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LoadGoalResponse extends Goal {}

export interface RegisterGoalBody {
	memberEmail: string;
	goalName: string;
	content: string;
	money: number;
	limitDate: Date;
	reward: 'low' | 'high';
	// 디자인 완성되면  고치기
	category: string;
}

export const loadGoaliLst = (params: LoadGoalListParam) => {
	return client.get(`goals/${params.category}/list/${params.status}/${params.page}`);
};

export const getGoal = ({ goalId }: LoadGoalParam) => {
	return client.get(`/goals/${goalId}`);
};

export const getCategories = () => {
	return client.get(`goals/categories`);
};

export const postGoal = (body: RegisterGoalBody) => {
	return client.post(`goals`, { ...body });
};

export default loadGoaliLst;
