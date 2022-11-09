import { height, width } from '../../styles/Dimension';

import Colors from '../../assets/colors/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bgColorSecondary,
        alignItems: 'center',
    },
    radioButtonContainer: {
        flexDirection: 'row',
        width: width * 0.90,
        height: height * 0.09,
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        // backgroundColor:'red',
    },
    inputHeader: {
        color: Colors.black,
        fontSize: 15,
        fontWeight: '500',
        top: 5,
        left:16
    },
    profileContainer: {
        width: width,
        height: height * 0.13,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    picContainer: {
        height: height * 0.12,
        width: width * 0.22,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
    },
    profilePic: {
        width: width * 0.21,
        height: height * 0.12,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        backgroundColor:'blue'
    },
    editIconContainer: {
        backgroundColor: Colors.primaryGrayColor,
        width: width * 0.09,
        height: height * 0.045,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        left: 25,
        bottom: 26
    },
    profileTextContainer: {
        width: width,
        height: height * 0.07,
        justifyContent: 'center',
        alignItems: 'center'
    },
    centeredView: {
        width:width,
        height:height*0.04,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        // backgroundColor:'blue'
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginTop:10
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
});

export default styles;
