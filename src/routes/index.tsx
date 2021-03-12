import React, { useCallback, useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import AppRoutes from "./app.routes";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Auth = createStackNavigator();

const Routes = () => {

  const [isLogged, setIsLogged] = useState('false')

  const handleIsLogged = useCallback(async () => {
    try {
      const logged = await AsyncStorage.getItem('isLogged')
      Boolean(logged) ? setIsLogged('true') : isLogged
    } catch (e) {
      console.error(e)
    }
  }, [])

  useEffect(() => {
    handleIsLogged()
  }, [isLogged])

  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: "#FF3122",
        },
      }}
    >

      <>
        <Auth.Screen name="SignIn" component={SignIn} />
        <Auth.Screen name="SignUp" component={SignUp} />
        {isLogged && <Auth.Screen name="AppRoutes" component={AppRoutes} />}
      </>

    </Auth.Navigator>
  );
};

export default Routes;
