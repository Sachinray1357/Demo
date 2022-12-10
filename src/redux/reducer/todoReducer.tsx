import { addTodo, deleteTodo, removeTodo } from '../action/index';

const initialState = {
    list: []
}

const todoReducers = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const { id, data } = action.payload;

            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data,
                    }
                ]
            }

        // case "UPDATE_TODO":

        //     const updatedList = state.list.map((data:any)=>{
        //         if(data.id === action.id){
        //             return {
        //                 ...data, data:action.data
        //             };
        //         }
        //         return data;
        //     })
        //     return {
        //         ...state,
        //         list: updatedList

        //     }

        case "DELETE_TODO":

            const newList = state.list.filter((item:any) => item.id !== action.id)

            return {
                ...state,
                list: newList

            }

        case "REMOVE_TODO":
            return {
                ...state,
                list: []
            }

        default: return state;
    }
}

export default todoReducers;

