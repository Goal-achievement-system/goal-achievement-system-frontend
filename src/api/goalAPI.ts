import { LoadGoalParam } from 'store/sagas/goalSaga';
import { GoalFormState } from 'pages/Goal/GoalRegister/RegisterType';
import client from './client';

export const loadGoaliLst = (params: LoadGoalParam) => {
	return client.get(`goals/${params.category}/list/${params.status}/${params.page}`);
};

export const registerGoal = (params: GoalFormState) => {
	return client.post(`goals`, { ...params });
};

export default loadGoaliLst;
