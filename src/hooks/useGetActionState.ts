import { useSelector } from 'react-redux';
import { RootState } from 'store/slices';
import { IResult } from 'store/slices/resultSlice';

export default function useGetActionState(actionType: string): [boolean, IResult] {
	const { loading } = useSelector((state: RootState) => state.loading);
	const { result } = useSelector((state: RootState) => state.result);
	const loadingState: boolean = loading[actionType];
	const resultState: IResult = result[actionType];

	return [loadingState, resultState];
}
