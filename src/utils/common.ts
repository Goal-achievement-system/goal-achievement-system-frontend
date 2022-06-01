// 함수 더 추가 되면 export default->export로 바꿔주세요.
// tailwind 함수 사용할 때 클래스 네임들 이어주는 함수
// 사용 예시 <div className={classNames(state==="ok"?"text-green-50":"text-red-50","bg-black","flex")}> Hello </div>
export function cls(...classnames: string[]) {
	return classnames.join(' ');
}

// 디데이 계산
export function getDday(targetDate: Date) {
	const gap = new Date().getTime() - new Date(targetDate).getTime();
	const dDay = Math.floor(gap / (1000 * 60 * 60 * 24)) * -1;
	return dDay;
}

// 이메일 유효성 검사
// 이걸 이 파일에 위치시켜두는 것이 맞는건지 모르겠네요..
export const validateEmail = (target: string): boolean => {
	// [알파벳, 숫자, -_] @ [알파벳]] . [알파벳] 2개이상 3개이하로 끝남
	const emailReg = /^[\w-]*@[a-zA-Z]*\.[a-zA-Z]{2,3}$/i;
	return emailReg.test(target);
};

export const validatePassword = (target: string): boolean => {
	// (?=.*[a-zA-Z])                 // 영문
	// (?=.*?[A-Z])                   // 최소 한개의 대문자 영문
	// (?=.*?[a-z])                   // 최소 한개의 소문자 영문
	// (?=.*?[0-9])                   // 최소 한개의 숫자
	// (?=.*?[#?!@$%^&*-])            // 최소 한개의 특수 문자
	// .{8,13}												// 8 ~ 13

	const passwordReg = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?+-])[a-zA-Z0-9!@#$%^&*?+-]{8,13}$/;
	return passwordReg.test(target);
};
