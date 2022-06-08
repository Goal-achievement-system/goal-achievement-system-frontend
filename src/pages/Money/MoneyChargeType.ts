export interface IFormState {
	chargeMoney: string;
	chargeType: number;
	agree: boolean;
}
export interface formReducerAction {
	type: 'chargeMoney' | 'chargeType' | 'agree' | 'init';
	payload?: string | number | boolean;
}
