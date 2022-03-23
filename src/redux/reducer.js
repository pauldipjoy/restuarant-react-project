import { combineReducers } from 'redux';
import COMMENTS from '../data/comments';
import DISHES from '../data/dishes';





// const initialState = {

//     dishes : DISHES ,
//     comments : COMMENTS,

// }

const dishReducer = (dishState = DISHES , action) => {

    return dishState;

}



const commentReducer = (commentState = COMMENTS , action) => {

    if(action.type === 'ADD_COMMENT') {

        let comment = action.payload;
        
        comment.id =  commentState.length;
        comment.date = new Date().toDateString();

        console.log(comment);

        return commentState.concat(comment)
        
    }

    return commentState;
}






export const Reducer = combineReducers( {

    dishes : dishReducer ,
    comments : commentReducer 


});






