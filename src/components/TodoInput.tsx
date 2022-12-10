import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { addTodo, updateTodo } from '../../src/redux/action/index';
import { height, width } from '../styles/Dimension';

import Colors from '../assets/colors/Colors';
import CustomInput from './CustomInput';
import Icons from '../constants/Icons';
import { useDispatch } from 'react-redux';

const TodoInput = ({ editFormVisibility, editTodo, cancelUpdate, }) => {

    // todo value state for normal add todo form
    const [todo, setTodo] = useState<string>("");

    // state for if someone changes the (to edit) value in update form
    const [editValue, setEditValue] = useState('');
    const dispatch = useDispatch();

    console.log('editTodo--', editTodo);
    console.log('editValue--', editValue);

    useEffect(() => {
        setEditValue(editTodo.data);
    }, [editTodo])

    const onUpdatedTodo = () => {
        let newObj = {
            id: editTodo.id,
            data: editValue
        }
        dispatch(updateTodo(newObj)), setEditValue("")
    }

    return (
        <>
            {editFormVisibility === false ?
                <View style={styles.inputContainer}>
                    <Text style={{ color: Colors.black, fontSize: 15, fontWeight: 'bold', }}>Add your Todo </Text>
                    <CustomInput
                        styles={{ borderRadius: 20, }}
                        placeHolderTitle='Todo'
                        placeholderColor={Colors.primaryGrayColor}
                        value={todo}
                        onChangeText={(text: string) => setTodo(text)}
                        Icon={
                            <Icons.MtrialCom name='send-circle' size={25} color='#03fca5' />
                        }
                        onPress={() => dispatch(addTodo(todo), setTodo(""))}
                    />
                </View>
                :
                <View style={styles.inputContainer}>
                    <Text style={{ color: Colors.black, fontSize: 15, fontWeight: 'bold', }}>Update your Todo </Text>
                    <CustomInput
                        styles={{ borderRadius: 20, }}
                        placeHolderTitle={editTodo.data}
                        placeholderColor={Colors.primaryGrayColor}
                        value={editValue || ""}
                        onChangeText={(text: string) => setEditValue(text)}
                        Icon={
                            <Icons.MtrialCom name='send-circle' size={25} color='#03fca5' />
                        }
                        onPress={onUpdatedTodo}
                    />
                </View>
            }
            {editFormVisibility === true ?
                <TouchableOpacity
                    onPress={cancelUpdate}
                    style={styles.cancelButton}
                >
                    <Text style={{ color: Colors.white, fontSize: 15, fontWeight: 'bold', }}>Cancel Update</Text>
                </TouchableOpacity>
                : null}
        </>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        width: width,
        height: height * 0.12,
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
        // backgroundColor:'red'
    },

    cancelButton: {
        width: width * 0.5,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.headerColor,
        top: 5,
        borderRadius: 5
    }
});

export default TodoInput;