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

// eslint-disable-next-line consistent-return
export const successCertGoal = async (goalID: number) => {
	try {
		const response = await client.put(`/goals/cert/success/${goalID}`);
		return response;
	} catch (err) {
		// 임시
		alert('재접속 후 다시 시도해주세요');
	}
};

export const failCertGoal = (goalID: number) => {
	return client.put(`/goals/cert/fail/${goalID}`);
};

export const postGoal = (body: RegisterGoalBody) => {
	return client.post(`goals`, { ...body });
};

export default loadGoaliLst;
