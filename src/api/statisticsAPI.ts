import axios from 'axios';

export const loadGoalCount = () => {
	return axios.get(`https://www.robinjoon.xyz/api/statistics/total`);
};

export default loadGoalCount;
