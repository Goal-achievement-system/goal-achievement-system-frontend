export type SexEng = 'FEMALE' | 'MALE' | 'UNKNOWN';
export type SexKr = '여자' | '남자' | '없음';

export interface Member {
	email: string;
	password: string;
	nickName: string;
	sex: SexEng;
	age: number;
	money: number;
}
