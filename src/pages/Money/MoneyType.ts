export interface ChargeFormState {
	chargeMoney: string;
	chargeType: number;
	agree: boolean;
}
export interface ChargeFormReducerAction {
	type: 'chargeMoney' | 'chargeType' | 'agree' | 'init';
	payload?: string | number | boolean;
}

export interface TransferFormState {
	bank: string;
	accountNumber: string;
	transferMoney: string;
	agree: boolean;
}
export interface TransferFormReducerAction {
	type: 'transferMoney' | 'accountNumber' | 'bank' | 'agree' | 'init';
	payload?: string | boolean;
}
