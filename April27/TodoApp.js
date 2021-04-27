import {useRef, useState} from 'react';
import {useStore, useSelector, useDispatch} from 'react-redux';
function TodoApp(){

	const dispatch = useDispatch();
	const store = useStore();
	// console.log(store.getState());
	const todoVal = useSelector(state=>state.todoVal); 
	// console.log(todoVal);
	const [todo, setTodo] = useState([]);
	const addTodo = (e)=>{
		e.preventDefault();
		// console.log(e.target.todo.value);
		let todoArr = [...todo, e.target.todo.value];
		console.log(todoArr);
		setTodo(todoArr);
		console.log(todo);
		dispatch({type:'add/todo', todoVal : todo});
		

	}

	return (
		<div>
			<p>state value: {todoVal}</p>
			<p>INPUT VALUE : {todo}</p>
			<form onSubmit={addTodo}>
			<input type="text" name="todo" placeholder="Enter todo"/><br/>
		
			<button>submit</button>
			</form>
			{
				todo.map(function(val){
					return <div>{val}</div>
				})
			}


		</div>
		)
}
export default TodoApp;