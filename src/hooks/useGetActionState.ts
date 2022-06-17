import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/slices';
import resultSlice, { SagaResultProps } from 'store/slices/resultSlice';

export default function useGetActionState(actionType: string): [boolean, SagaResultProps | null, () => void] {
	const dispatch = useDispatch();
	const { loading } = useSelector((state: RootState) => state.loading);
	const { result } = useSelector((state: RootState) => state.result);
	const loadingState: boolean = loading[actionType];
	const resultState: SagaResultProps | null = result[actionType];
	const initResult = () => {
		dispatch(resultSlice.actions.initResult(actionType));
	};

	return [loadingState, resultState, initResult];
}
