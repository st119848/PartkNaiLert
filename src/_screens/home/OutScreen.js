
import React from "react";
import { View, Text, Button, AsyncStorage } from "react-native";

class HomeScreen extends React.Component {
  SignUp = async () => {
    try {
      await AsyncStorage.clear()
      this.props.navigation.navigate('AuthLoading')
      return true
    }
    catch (exception) {
      console.log(exception)
      return false;
    }
  }
    render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Button title="Signup" onPress={this.SignUp} />
        </View>
      );
    }
  }
export default HomeScreen