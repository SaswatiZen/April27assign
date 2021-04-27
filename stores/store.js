import {createStore} from 'redux';
import CountReducer from '../reducers/CountReducer';
import TodoAppReducer from '../reducers/TodoAppReducer';
import ForumReducer from '../reducers/ForumReducer'

// const store = createStore(CountReducer);
	// const store = createStore(TodoAppReducer);
	const store = createStore(ForumReducer);

export default store;