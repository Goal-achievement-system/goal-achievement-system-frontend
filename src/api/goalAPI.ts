import { LoadGoalParam } from 'store/sagas/goalSaga';
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

export default loadGoaliLst;
