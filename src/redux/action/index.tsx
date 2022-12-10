export const addTodo = (data:string) => {
    return {
        type:"ADD_TODO",
        payload: {
            id: new Date().getTime().toString(),
            data:data
        }
    }
}

export const updateTodo = ( payload:any) =>{
    console.log('payload--',payload);
    return {
        type:"UPDATE_TODO",
        payload
    }
}

export const deleteTodo = (id:string) =>{
    return {
        type:"DELETE_TODO",
        id
    }
}

export const removeTodo = () =>{
    return {
        type:"REMOVE_TODO"
    }
}