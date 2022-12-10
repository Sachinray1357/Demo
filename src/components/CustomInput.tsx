import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { height, width } from '../styles/Dimension';

import Colors from '../assets/colors/Colors';

interface InputAreaProps {
    placeHolderTitle: any,
    Icon?: any,
    styles?: any,
    secureTextEntry?: any,
    placeholderColor: any,
    onPress?:any,
    value?:any,
    onChange?:any,
    onChangeText?:any,
    keyboardType?:any,
    title?:any,
    maxLength?:any,
}

interface InputAreaState {
    isVisible: boolean,
}

export class CustomInput extends Component<InputAreaProps, InputAreaState> {
    static defaultProps = {
        styles: {},
    };
    constructor(props: InputAreaProps) {
        super(props);
        this.state = {
            isVisible: false
        }
    }

   
    render() {
        return (
            <View style={styles.inputContainer}>
                <Text style={{ top: 25, color: Colors.black, fontSize: 20, fontWeight: 'bold' }}>{this.props.title}</Text>
                <TextInput
                    style={[styles.inputArea, { ...this.props.styles }]}
                    placeholder={this.props.placeHolderTitle}
                    secureTextEntry={this.props.secureTextEntry}
                    placeholderTextColor={this.props.placeholderColor}
                    value={this.props.value}
                    onChange={this.props.onChange}
                    onChangeText={this.props.onChangeText}
                    keyboardType={this.props.keyboardType}
                    maxLength={this.props.maxLength}
                />
                <TouchableOpacity onPress={this.props.onPress} style={[styles.iconWrap, {...this.props.styles}]}>
                    {this.props.Icon}
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        width: width * 0.90,
        height: height * 0.1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        // backgroundColor:'red',
        alignSelf:'center'
    },
    inputArea: {
        width: width * 0.90,
        height: height * 0.065,
        backgroundColor:Colors.primaryWhiteColor,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        paddingHorizontal: 12,
        fontSize:14,
        color:Colors.primaryBlackColor
    },
    iconWrap: {
        width: '9.2%',
        height: 31,
        justifyContent: 'center',
        alignItems: 'center',
        right: 50
    },
});



export default CustomInput;