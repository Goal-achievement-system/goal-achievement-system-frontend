export interface IFormState {
	chargeMoney: string;
	chargeType: number;
	agree: boolean;
}
export interface Action {
	type: 'chargeMoney' | 'chargeType' | 'agree';
	payload: string | number | boolean;
}
