import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class Test extends Component {
    constructor(props:any){
        super(props);
        this.state={}
    }

    getData=()=>{
        const res = fetch('')
    }

  render() {
    return (
      <View>
        <Text>Test</Text>
      </View>
    )
  }
}

export default Test