import client from './client';

export const loadGoalCount = () => {
	return client.get(`/statistics/total`);
};

export default loadGoalCount;
