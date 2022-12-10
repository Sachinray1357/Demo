import React, { useState } from 'react';
import { StatusBar, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Colors from '../../assets/colors/Colors';
import TodoInput from '../../components/TodoInput';
import Todos from '../../components/Todos';
import styles from './styles';

const Todo = () => {

    // update form visibility state
    const [editFormVisibility, setEditFormVisibility] = useState<boolean>(false);

    // editTodo state
    const [editTodo, setEditTodo] = useState<string>("");
    const list = useSelector((state: any) => state.todos.todoReducers.list)
    console.log('list---', list);

    const dispatch = useDispatch();

    // this function will trigger when someone clicks the edit icon
    const handleEditClick = (todo: string) => {
        setEditFormVisibility(true);
        setEditTodo(todo);
    }

    // back button click
    const cancelUpdate = () => {
        setEditFormVisibility(false);
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle='dark-content' backgroundColor={Colors.todoBgColor} />
            <Text style={{ color: Colors.black, fontSize: 22, fontWeight: 'bold' }}>Todo App</Text>

            <Todos handleEditClick={handleEditClick} />

            <TodoInput editFormVisibility={editFormVisibility} editTodo={editTodo}
                cancelUpdate={cancelUpdate} />

        </View>
    )
}

export default Todo;