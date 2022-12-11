import { height, width } from '../../styles/Dimension';

import Colors from '../../assets/colors/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.todoBgColor,
        alignItems: 'center',
        justifyContent:'center',
    },
});

export default styles;
