import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import {Icon} from 'native-base';

export default class HeadLeft extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
           <View style={{ paddingHorizontal: 10 }}>
             <Icon name="md-menu" size={24} />
           </View>
         </TouchableOpacity>
    );
  }
}

