import { height, width } from '../../styles/Dimension';

import Colors from '../../assets/colors/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.todoBgColor,
        alignItems: 'center',
        justifyContent:'center'
    },
    error: {
        marginTop: 10,
        padding: 10,
        color: '#fff',
        // backgroundColor: '#D54826FF',
      },
      signupButton: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        bottom: 10,
        position: 'absolute'
    }
});

export default styles;
