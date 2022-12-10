import { Alert, FlatList, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { addTodo, deleteTodo, updateTodo } from '../../redux/action';
import { height, width } from '../../styles/Dimension';
import { useDispatch, useSelector } from 'react-redux';

import Colors from '../../assets/colors/Colors';
import Icons from '../../constants/Icons';
import Input from '../../components/CustomInput';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';
import styles from './styles';

const Todo = () => {

    const [todo, setTodo] = useState<string>("");
    const [isUpdating, setIsUpdating] = useState<boolean>(false);
    const [updated, setUpdated] = useState<string>("");
    const list = useSelector((state: any) => state.todos.todoReducers.list)
    console.log('list---', list);

    const dispatch = useDispatch();




    // rendering function with update and delete button
    const renderItem = ({ item }) => {
        return (
            <View style={styles.todoContainer}>
                {isUpdating ?
                    <View style={{ width: width, height: 50, bottom: 80, justifyContent: 'center', }}>
                        <Input
                            styles={{ borderRadius: 20, }}
                            placeHolderTitle={item.data}
                            placeholderColor={Colors.primaryGrayColor}
                            value={updated}
                            onChangeText={(text: string) => setUpdated(text)}
                            Icon={
                                <Icons.MtrialCom name='send-circle' size={25} color='#03fca5' />
                            }
                        />
                    </View>

                    :
                    <Text style={{ color: Colors.black, fontSize: 18, fontWeight: 'bold', left: 10 }}>{item.data}</Text>
                }
                <View style={{ width: '20%', height: 30, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', right: 5 }}>
                    <TouchableOpacity onPress={()=> setIsUpdating(true) }>
                        <Icons.FontAwesome name='edit' color={Colors.danger} size={25} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => dispatch(deleteTodo(item.id))} >
                        <Icons.MtrialCom name='delete' color={Colors.danger} size={25} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle='dark-content' backgroundColor={Colors.todoBgColor} />
            <Text style={{ color: Colors.black, fontSize: 22, fontWeight: 'bold' }}>Todo App</Text>
            <FlatList
                data={list}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />

            <View style={styles.inputContainer}>
                <Input
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

        </View>
    )
}

export default Todo;