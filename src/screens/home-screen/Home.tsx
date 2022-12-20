import { Text, TouchableOpacity, View } from 'react-native'

import Icons from '../../constants/Icons'
import React from 'react'

const Home = (props:any) => {

   const handleNavigationToggle = () => {
        props.navigation.openDrawer();
      };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={handleNavigationToggle}>
                <Icons.Entypo
                    name="menu"
                    size={30}
                    color={"black"}
                    style={{
                        right: 5,
                        // top:1
                    }}
                />
            </TouchableOpacity>
            <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black' }}>Home.......</Text>
        </View>
    )
}

export default Home