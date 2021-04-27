let initialState = {todoVal:[]}

function TodoReducer(state = initialState, action){
	// console.log(action.todoVal);
	// console.log(state);
	switch(action.type){
		case 'add/todo':
			let newState = {...state, todoVal:action.todoVal}
			console.log(newState);
			return newState;
		
		default:
			return state;
	}
}
export default TodoReducer;