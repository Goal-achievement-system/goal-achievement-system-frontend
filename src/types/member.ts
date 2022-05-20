type Sex = 'FEMALE' | 'MALE' | 'UNKNOWN';
export interface Member {
	email: string;
	password: string;
	nickName: string;
	sex: Sex;
	age: number;
	money: number;
}
