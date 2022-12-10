import { height, width } from '../../styles/Dimension';

import Colors from '../../assets/colors/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.todoBgColor,
        alignItems: 'center',
    },
    todoContainer: {
        width: width * 0.9,
        height: height * 0.07,
        backgroundColor: Colors.white,
        top: 10,
        marginVertical:8,
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
    inputContainer: {
        width: width,
        height: height * 0.09,
        position: 'absolute',
        bottom: 5
    }
});

export default styles;
