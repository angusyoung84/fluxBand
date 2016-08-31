//takes in the action
//takes in the current state

function bands(state = [], action){
	switch(action.type){
		case 'ADD_BAND' :
	      return [...state, {band: action.band, album: action.album}];
		case 'REMOVE_BAND' :
	      return i;
		default:
	 		return state;

	}

}

export default bands;