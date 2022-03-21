import COMMENTS from '../data/comments';
import DISHES from '../data/dishes';





const initialState = {

    dishes : DISHES ,
    comments : COMMENTS,
    sample : "Hello World"

}



export const Reducer = (state = initialState , action) => {

    // console.log("From Reducer:" , action);

    if(action.type === 'TEST'){
        return{
            ...state ,
            sample : action.str
        }
    }

    return state;
    
}


