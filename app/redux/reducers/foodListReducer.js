import { foodListAction } from "../actions";

const initialState = {
    data: [],
    error: null,
    requesting: false
}

const foodList = (state = initialState, action ) =>{
    switch(action.type){
        case foodListAction.PENDING:
            return {...state, requesting: true};
            
        case foodListAction.FULFILLED:
            return {...state, data : action.payload, requesting:false};
        
        case foodListAction.REJECTED:
            return {...state, requesting:false, error: "Error fetching data"}
        
        default:
            return {...state}
            
    }
}

export default foodList;