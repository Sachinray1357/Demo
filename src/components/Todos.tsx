import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { height, width } from '../styles/Dimension';
import { useDispatch, useSelector } from 'react-redux';

import Colors from '../assets/colors/Colors';
import Icons from '../constants/Icons';
import React from 'react';
import { deleteTodo } from '../redux/action';

const Todos = ({ handleEditClick }) => {

    const list = useSelector((state: any) => state.todos.todoReducers.list);

    const dispatch = useDispatch();


    return list.map((todo: any) => (
        <View key={todo.id} style={styles.todoContainer}>
            <Text style={{ color: Colors.black, fontSize: 18, fontWeight: 'bold', left: 10 }}>{todo.data}</Text>
            <View style={{ width: '20%', height: 30, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', right: 5 }}>
                <TouchableOpacity onPress={()=>handleEditClick(todo)}>
                    <Icons.FontAwesome name='edit' color={Colors.danger} size={25} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => dispatch(deleteTodo(todo.id))}>
                    <Icons.MtrialCom name='delete' color={Colors.danger} size={25} />
                </TouchableOpacity>
            </View>
        </View>
    ))
}

const styles = StyleSheet.create({
    todoContainer: {
        width: width * 0.9,
        height: height * 0.07,
        backgroundColor: Colors.white,
        top: 10,
        marginVertical: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 10
    },
})



export default Todos;