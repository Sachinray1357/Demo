export const addTodo = (data:string) => {
    return {
        type:"ADD_TODO",
        payload: {
            id: new Date().getTime().toString(),
            data:data
        }
    }
}

export const updateTodo = ( data:string) =>{
    return {
        type:"UPDATE_TODO",
        payload: {
            data
        }
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