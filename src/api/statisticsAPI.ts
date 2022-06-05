import client from './client';

export const loadGoalCount = () => {
	return client.get(`https://www.robinjoon.xyz/api/statistics/total`);
};

export default loadGoalCount;
