import axios from 'axios';
import { LoadGoalParam } from 'store/sagas/goalSaga';

export const loadGoaliLst = (params: LoadGoalParam) => {
	return axios.get(`https://www.robinjoon.space/api/goals/${params.category}/list/${params.status}/${params.page}`, {
		headers: {
			Authorization:
				'InR5cCI6ICJKV1QiLCAiYWxnIjogIkhTMjU2Ig==.eyJleHAiOiAyMDIyMDUyOTEyMTAxMiwiZW1haWwiOiAiMDFAZ21haWwuY29tIn0=.6R3BATXnMP/IZ5ypOEIVV59+BB4jAD79u4sKWJu4inZOQiQnNtZ3PcjvPvutxVtQ6CMP3ZHxGfV385E4St/4BH2UugQwcIs7suB4QmzFHUZY4VQbxvyBsAr9HhA7jj15cBxkTftOEVsNurV90dgaiQ==',
		},
	});
	// 로그인 토큰 임시 사용
};

export default loadGoaliLst;
