import { LoadGoalParam } from 'store/sagas/goalSaga';
import client from './client';

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

export interface LoadCertGoalParam {
	category: string;
	page: number;
}

export const loadGoaliLst = (params: LoadGoalParam) => {
	return client.get(`goals/${params.category}/list/${params.status}/${params.page}`);
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

export const registerGoal = (body: RegisterGoalBody) => {
	return client.post(`goals`, { ...body });
};

export const loadCertGoalList = ({ category, page }: LoadCertGoalParam) => {
	return client.get(`goals/${category}/list/oncertification/${page}`);
};

export default loadGoaliLst;
