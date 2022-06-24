export interface ChargeFormState {
	chargeMoney: string;
	chargeType: number;
	agree: boolean;
	password: string;
}
export interface ChargeFormReducerAction {
	type: 'chargeMoney' | 'chargeType' | 'agree' | 'init' | 'password';
	payload?: string | number | boolean;
}

export interface TransferFormState {
	bank: string;
	accountNumber: string;
	transferMoney: string;
	agree: boolean;
	password: string;
}
export interface TransferFormReducerAction {
	type: 'transferMoney' | 'accountNumber' | 'bank' | 'agree' | 'init' | 'password';
	payload?: string | boolean;
}
