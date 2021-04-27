let initialState = {count:0}

function CountReducer(state = initialState, action){
	console.log(action);
	console.log(state);
	switch(action.type){
		case 'counter/increase':
			console.log('came in action counter/increase');
			return {...state, count:state.count+1}
		case 'counter/decrease':
			console.log('came in action counter/decrease');
			return {...state, count:state.count-1}
		case 'counter/square':
			console.log('came in action counter/square');
			return {...state, count:state.count * state.count}
		case 'counter/squareroot':
			console.log('came in action counter/squareroot');
			return {...state, count:Math.sqrt(state.count)}
		default:
			return state;
	}
}
export default CountReducer;