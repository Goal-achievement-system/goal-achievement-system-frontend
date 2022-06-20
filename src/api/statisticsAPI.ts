import client from './client';

export const loadGoalCount = () => {
	return client.get(`/api/statistics/total`);
};

export default loadGoalCount;
