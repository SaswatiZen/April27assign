import{useStore,useDispatch,useSelector} from 'react-redux';
import {useState} from 'react'
function ForumApp(){

const dispatch=useDispatch();
const store=useStore();
const forumVal=useSelector(state=>state.forumVal);
const [forums,setforum]=useState([]);
let arrForum;

const addBlog=(e)=>
{
	e.preventDefault()
let myobj=
{
	name:e.target.text.value,
	date:e.target.date.value,
	id:e.target.id.value,
	date:new Date().toLocaleTimeString(),
	mil:new Date().getTime(),
	author:e.target.author.value
}
dispatch({type:'add/forum',forumVal:forums})
arrForum=forums.concat(myobj);
setforum(arrForum);
localStorage.setItem('forumone', JSON.stringify(arrForum));
}
const deleteone=(index)=>
{
let msg=window.confirm("are you sure to delete");
let myval=forums.filter(function(val,indextodelete)
{
if(indextodelete==index)
	return false;
return true;
})
if(msg==true)
	{
	setforum(myval);
	}

}

const deleteall=()=>
{
let day=new Date().getTime();
let currentday=Math.floor(day/1000/60);
console.log(currentday)
let asd=forums.filter(function(val)
{
	if(Math.floor(val.mil/1000/60)<=currentday-5)
		return false
	return true
	
})
setforum(asd);
}
	return(
		<div>
		<form onSubmit={addBlog}>
		<input type="text" name="text" placeholder="enter the text"/><br/>
		<input type="date" name="date"/><br/>
		<input type="id" name="id" placeholder="enter the id"/><br/>
		<select name="author">
			<option value="author1"> author 1</option>
			<option value="author2"> author 2</option>
			<option value="author3"> author 3</option>
			<option value="author4"> author 4</option>
		</select>
		<button>add blog</button>
		</form>
		<button onClick={deleteall}>deleteall</button>
		{
			forums.map(function(val,index){
				return<div>{val.name}{val.date}{val.id}{val.author}
				<button onClick={()=>{deleteone(index)}}>delete</button>
				</div>
			})
		}
		</div>
		)
}

export default ForumApp;