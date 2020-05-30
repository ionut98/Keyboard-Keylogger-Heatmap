const keysReducer = (state, { payload }) => {
  console.log(payload, '<=== IN REDUCER');
	state = {
		...state,
		[payload]: state[payload] ? state[payload]+1 : 1
	};
	return state;
};

const updateKeys = (dispatch) => (keyLog) => {
	dispatch({ payload: keyLog });
};

export { keysReducer, updateKeys };
