export interface IForm {
	goalName: string; // 'testGoalName'
	content: string; // 'testGoalContent';
	money: string; // 10000;
	limitDate: string; // '2022-03-27T10:45:04.847+00:00';
	reward: 'high' | 'low' | null; // 'high';  //high ?low?
	category: string; // '다이어트';
}
export interface Action {
	type: 'goalName' | 'content' | 'money' | 'limitDate' | 'reward' | 'category' | 'init';
	payload?: string | number;
}

export const initialState: IForm = {
	goalName: '',
	content: '',
	money: '',
	limitDate: '',
	reward: null,
	category: '',
};

export const isFormValid = (formState: IForm, categories: string[], remainingMoney: number): boolean => {
	const { goalName, content, money, limitDate, reward, category } = formState;
	// text type input 공백 확인
	if (!goalName.trim() || !content.trim() || !`${money}`.trim()) return false;
	console.log('pass');
	// category가 서버에서 불러온 목록에 포함되는지 확인
	if (!categories.includes(category)) return false;
	console.log('pass');
	// money range 확인
	// isFinite -> 문자열이 숫자로 변환가능한지 , 내 머니 내에 있는지
	// eslint-disable-next-line no-restricted-globals
	if (!isFinite(+money) || +money < 0 || +money > remainingMoney) return false;
	console.log('pass');
	// 만원에서  백만원 사이인지
	// if (+money >= 10000 || +money <= 1000000) return false;
	console.log('pass');
	// !! 날짜가 오늘 이후인지 검토 필요
	// 일단은 날짜가 제대로 들어왔다고 가정.
	if (!limitDate.trim()) return false;
	console.log('pass');
	if (reward === null) return false;
	console.log('pass');
	return true;
};
