// 함수 더 추가 되면 export default->export로 바꿔주세요.
// tailwind 함수 사용할 때 클래스 네임들 이어주는 함수
// 사용 예시 <div className={classNames(state==="ok"?"text-green-50":"text-red-50","bg-black","flex")}> Hello </div>
export default function classNames(...classnames: string[]) {
	return classnames.join(' ');
}
