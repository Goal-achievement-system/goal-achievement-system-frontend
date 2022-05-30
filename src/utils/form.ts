export const UPDATE_FORM = 'UPDATE_FORM';

interface Idata {
	name: string;
	value: string;
	dispatch: React.DispatchWithoutAction;
}
export const onInputChange = ({ name, value, dispatch }: Idata) => {
	dispatch({
		type: UPDATE_FORM,
		data: {
			name,
			value,
		},
	});
};
