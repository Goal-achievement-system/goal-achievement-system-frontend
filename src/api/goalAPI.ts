import { LoadGoalParam, RegisterGoalParam } from 'store/sagas/goalSaga';
import { LoadCertGoalParam } from 'store/sagas/certificationSaga';
import client from './client';

export const loadGoaliLst = (params: LoadGoalParam) => {
	return client.get(`goals/${params.category}/list/${params.status}/${params.page}`);
};

export const successCertGoal = (goalID: number) => {
	return client.put(`/goals/cert/success/${goalID}`);
};

export const failCertGoal = (goalID: number) => {
	return client.put(`/goals/cert/fail/${goalID}`);
};

export const registerGoal = (params: RegisterGoalParam) => {
	return client.post(`goals`, { ...params });
};

export const loadCertGoalList = (params: LoadCertGoalParam) => {
	return client.get(`goals/${params.category}/list/oncertification/${params.page}`);
};

export default loadGoaliLst;
