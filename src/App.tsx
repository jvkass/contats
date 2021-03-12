import "react-native-gesture-handler";
import React from "react";
import Routes from "./routes";
import { StatusBar, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FF3122" }}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#FF3122" />
        <View style={{ flex: 1, backgroundColor: "#FF3122" }}>
          <Routes />
        </View>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
