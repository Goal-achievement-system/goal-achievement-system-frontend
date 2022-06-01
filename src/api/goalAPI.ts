import { LoadGoalParam } from 'store/sagas/goalSaga';
import client from './client';

export const loadGoaliLst = (params: LoadGoalParam) => {
	return client.get(`https://www.robinjoon.space/api/goals/${params.category}/list/${params.status}/${params.page}`, {
		headers: {
			Authorization:
				'InR5cCI6ICJKV1QiLCAiYWxnIjogIkhTMjU2Ig==.eyJleHAiOiAyMDIyMDUyOTEyMTAxMiwiZW1haWwiOiAiMDFAZ21haWwuY29tIn0=.6R3BATXnMP/IZ5ypOEIVV59+BB4jAD79u4sKWJu4inZOQiQnNtZ3PcjvPvutxVtQ6CMP3ZHxGfV385E4St/4BH2UugQwcIs7suB4QmzFHUZY4VQbxvyBsAr9HhA7jj15cBxkTftOEVsNurV90dgaiQ==',
		},
	});
};

export default loadGoaliLst;
