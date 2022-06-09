import { LoadGoalParam, RegisterGoalParam } from 'store/sagas/goalSaga';
import client from './client';

export const loadGoaliLst = (params: LoadGoalParam) => {
	return client.get(`goals/${params.category}/list/${params.status}/${params.page}`);
};

export const registerGoal = (params: RegisterGoalParam) => {
	return client.post(`goals`, { ...params });
};

export default loadGoaliLst;
