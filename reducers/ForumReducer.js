let initialvalue={forum:" "}
function ForumReducer(state=initialvalue,action)
{
	switch(action.type)
	{
		case 'add/forum':
		let new1={...state,forum:action.forum}
		return new1;

		 default:return state;

	}
}
export default ForumReducer;