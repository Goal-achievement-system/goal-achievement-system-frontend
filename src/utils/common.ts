/* eslint-disable no-nested-ternary */
// 함수 더 추가 되면 export default->export로 바꿔주세요.
// tailwind 함수 사용할 때 클래스 네임들 이어주는 함수

import { CertCategoryKrType, CertCategoryType } from 'types/certification';
import { VerificationResultEng, VerificationResultKr } from 'types/goal';
import { SexEng, SexKr } from 'types/member';

// 사용 예시 <div className={classNames(state==="ok"?"text-green-50":"text-red-50","bg-black","flex")}> Hello </div>
export function cls(...classnames: string[]) {
	return classnames.join(' ');
}

// 디데이 계산
export function getDday(targetDate: Date) {
	const gap = new Date().getTime() - new Date(targetDate).getTime();
	let dDay = Math.floor(gap / (1000 * 60 * 60 * 24)) * -1;
	if (dDay < 0) dDay = 0;
	return dDay;
}

export function getPushDay(targetDate: Date): string {
	const gap = (new Date().getTime() - new Date(targetDate).getTime()) / 1000 / 60;

	if (gap < 1) return '방금전';
	if (gap < 60) {
		return `${gap}분전`;
	}
	const gapHour = Math.floor(gap / 60);
	if (gapHour < 24) {
		return `${gapHour}시간전`;
	}
	const gapDay = Math.floor(gapHour / 24);
	if (gapDay < 30) {
		return `${gapDay}일전`;
	}
	if (gapDay < 365) {
		return `${Math.floor(gapDay / 30)}개월전`;
	}
	return `${Math.floor(gapDay / 365)}년전`;
}

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

	// const passwordReg = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?+-])[a-zA-Z0-9!@#$%^&*?+-]{8,13}$/;
	// const passwordReg = /{8, 13}$/;
	return target.length >= 8;
	// return passwordReg.test(target);
};

// 유저 정보의 Sex를 변환하여 반환
export const sexTransEngToKr = (sex: SexEng) => (sex === 'UNKNOWN' ? '없음' : sex === 'MALE' ? '남자' : '여자');
export const sexTransKrToEng = (sex: SexKr) => (sex === '없음' ? 'UNKNOWN' : sex === '남자' ? 'MALE' : 'FEMALE');
// string type의 input에 숫자 입력 시 자동으로 콤마 추가 (문자는 지움)
export const addComma = (target: string | number): string => {
	const regex = /[^0-9]/g;
	const number = Number(String(target).replace(regex, ''));
	return number.toLocaleString().toString();
};

// 콤마가 붙어있는 string형 target을 콤마를 지운 number로 반환
export const deleteComma = (target: string): number => {
	const regex = /[^0-9]/g;
	const number = Number(target.replace(regex, ''));
	return number;
};

// goal 데이터의 verificationResult을 전달하면 그에 맞는 text를 반환
export const getGoalState = (verificationResult: string): string => {
	switch (verificationResult) {
		case 'success':
			return '💰 보상금 지급 완료';
		case 'fail':
			return '😱 보상금 지급 실패';
		case 'hold':
			return '💡 검토 요청';
		case 'ongoing':
			return '😊 목표 인증을 해주세요.';
		default:
			return '';
	}
};

// goal 카테고리를 한국어로 전달받을시 지정된 영문으로 변환
export const getGoalCategoryEng = (goalCategory: CertCategoryKrType): CertCategoryType | null => {
	switch (goalCategory) {
		case '운동':
			return 'exercice';
		case '공부':
			return 'study';
		case '습관':
			return 'habit';
		case '취미':
			return 'hobby';
		case '기타':
			return 'etc';
		default:
			return null;
	}
};

export const getFilterStateKr = (filterText: VerificationResultEng): VerificationResultKr | null => {
	switch (filterText) {
		case 'ongoing':
			return '진행 중';
		case 'oncertification':
			return '인증 중';
		case 'success':
			return '성공';
		case 'fail':
			return '실패';
		case 'hold':
			return '보류';
		default:
			return null;
	}
};

export const blobToBase64 = (blob: Blob) => {
	const reader = new FileReader();
	reader.readAsDataURL(blob);
	return new Promise((resolve: (value: string) => void) => {
		reader.onloadend = () => {
			resolve(reader.result as string);
		};
	});
};
