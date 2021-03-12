import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Call from "../pages/Call";
import Icon from "react-native-vector-icons/Feather";
import MyContacts from "../pages/Contacts";
import Profile from "../pages/Profile";

const App = createBottomTabNavigator();

const customTabBarStyle = {
  activeTintColor: '#3598DC',
  inactiveTintColor: '#696969',
  style: {
    backgroundColor: '#fff', height: 60, borderTopWidth: 0,
    borderTopColor: "transparent",

    elevation: 0,
    shadowColor: '#5bc4ff',
    shadowOpacity: 0,
    shadowOffset: {
      height: 0,
    },
    shadowRadius: 0,
    borderTopHeight: 0
  },
};

const AppRoutes = () => {
  return (
    <App.Navigator
      initialRouteName="Call"
      tabBarOptions={customTabBarStyle}
    >
      <App.Screen name="Call"
        options={{
          tabBarLabel: 'Ligar',
          tabBarIcon: ({ color }) => (
            <Icon name="phone" color={color} size={26} />
          ),
        }}
        component={Call}
      />
      <App.Screen name="MyContacts"
        options={{
          tabBarLabel: 'Contatos',
          tabBarIcon: ({ color }) => (
            <Icon name="user-plus" color={color} size={26} />
          ),
        }}
        component={MyContacts}
      />
      <App.Screen name="Profile"
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color }) => (
            <Icon name="user" color={color} size={26} />
          ),
        }}
        component={Profile}
      />
    </App.Navigator>
  );
};

export default AppRoutes;
