import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
    createDrawerNavigator,
} from '@react-navigation/drawer';
import { Image, Linking, Share, StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';

import About from '../screens/about/About';
import Colors from '../assets/colors/Colors';
import Contact from '../screens/contact/Contact';
import Home from '../screens/home-screen/Home';
import Icons from '../constants/Icons';
import ImagePath from '../constants/ImagePath';
import Login from '../screens/user-login/Login';
import Services from '../screens/services/Services';

const Drawer = createDrawerNavigator();
  
  function CustomDrawerContent(props: any) {
    const labelStyle = {
      fontSize: 15,
      marginLeft: -25,
      fontFamily: 'p-500',
      color: Colors.primaryBlackColor,
      bottom:2,
    };
  
    return (
      <DrawerContentScrollView {...props}>
        <View style={styles.imageWrap}>
          <Image
            source={ImagePath.TODO_LOGO}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.headerText}>Run Paisa</Text>
        </View>
        <DrawerItemList {...props} />
  
        <DrawerItem
          onPress={() => {
            Linking.openURL(
              'https://runpaisa.com/',
            );
          }}
          label={'Privacy Policy'}
          inactiveTintColor={Colors.primaryBlackColor}
          labelStyle={labelStyle}
          icon={({ color }) => [
            <Icons.AntDgn
              name="right"
              size={15}
              style={{
                alignSelf: 'center',
                position: 'absolute',
                right: 5,
              }}
              color={color}
            />,
            <Icons.MaterialIcons name="privacy-tip" color={color} size={20} style={{bottom:3}}/>,
            ,
          ]}></DrawerItem>
        <DrawerItem
          onPress={() => {
            Linking.openURL('mailto:biharibriz7@gmail.com.com?subject=App Issue');
          }}
          inactiveTintColor={Colors.primaryBlackColor}
          label={'Email us'}
          labelStyle={labelStyle}
          icon={({ color }) => [
            <Icons.AntDgn
              name="right"
              size={15}
              color={color}
              style={{
                alignSelf: 'center',
                position: 'absolute',
                right: 5,
              }}
            />,
            <Icons.MtrialCom name="email" color={color} size={20} style={{bottom:3}}/>,
          ]}></DrawerItem>
      </DrawerContentScrollView>
    );
  }
  export default class DrawerNavigation extends Component {
    globalScreenOptions: any = null;
    constructor(props: any) {
      super(props);
      this.globalScreenOptions = {
        headerTitleStyle: { color: Colors.bgColor },
        headerTintColor: 'white',
        drawerActiveBackgroundColor: Colors.headerColor,
        drawerActiveTintColor: Colors.bgColor,
        drawerInactiveTintColor: Colors.primaryBlackColor,
        drawerLabelStyle: {
          fontSize: 15,
          marginLeft: -25,
          fontFamily: 'p-500',
        },
        headerShown: false,
      };
    }
    render() {
      return (
        <>
          <Drawer.Navigator
            drawerContent={props => <CustomDrawerContent {...props} />}
            screenOptions={this.globalScreenOptions}
            initialRouteName="Vani Meetings">
            <Drawer.Screen
              name="Home"
              options={{
                drawerIcon: ({ color }) => [
                  <Icons.AntDgn
                    name="right"
                    color={color}
                    size={15}
                    style={{
                      alignSelf: 'center',
                      position: 'absolute',
                      right: 5,
                    }}
                  />,
                  <Icons.FontAwesome name="home" color={color} size={18} style={{bottom:2}}/>,
                ],
              }}
              component={Home}
            />
            <Drawer.Screen
              name="About Us"
              options={{
                drawerIcon: ({ color }) => [
                  <Icons.AntDgn
                    name="right"
                    color={color}
                    size={15}
                    style={{
                      // alignSelf: 'center',
                      position: 'absolute',
                      right: 5,
                      alignItems: 'center'
                    }}
                  />,
                  <Icons.MaterialIcons name="self-improvement" color={color} size={18} style={{bottom:2}}/>,
                ],
              }}
              component={About}
            />
            <Drawer.Screen
              name="Services"
              options={{
                drawerIcon: ({ color }) => [
                  <Icons.AntDgn
                    name="right"
                    color={color}
                    size={15}
                    style={{
                      alignSelf: 'center',
                      position: 'absolute',
                      right: 5,
                    }}
                  />,
                  <Icons.MaterialIcons name="cleaning-services" color={color} size={18} style={{bottom:2}} />,
                ],
              }}
              component={Services}
            />
            <Drawer.Screen
              name="Contact Us"
              options={{
                drawerIcon: ({ color }) => [
                  <Icons.AntDgn
                    name="right"
                    color={color}
                    size={15}
                    style={{
                      alignSelf: 'center',
                      position: 'absolute',
                      right: 5,
                    }}
                  />,
                  <Icons.Entypo name="help-with-circle" color={color} size={18} style={{bottom:2}} />,
                ],
              }}
              component={Contact}
            />
            <Drawer.Screen
              name="Login"
              options={{
                drawerIcon: ({ color }) => [
                  <Icons.AntDgn
                    name="right"
                    color={color}
                    size={15}
                    style={{
                      alignSelf: 'center',
                      position: 'absolute',
                      right: 5,
                    }}
                  />,
                  <Icons.Entypo name="login" color={color} size={18} style={{bottom:2}} />,
                ],
              }}
              component={Login}
            />
          </Drawer.Navigator>
        </>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.bgColor,
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageWrap: {
      flex: 1,
      alignItems: 'center',
      paddingVertical: 20,
      // backgroundColor:'red'
    },
    logo: {
      height: 60,
      width: 70,
    },
    headerText: {
      fontSize: 22,
      marginTop: 5,
      fontFamily: 'p-600',
      color: Colors.primaryBlackColor,
    },
  });
  