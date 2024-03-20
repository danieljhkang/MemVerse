import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Octicons from "react-native-vector-icons/Octicons";

// Screens
import HomeScreen from "./screens/HomeScreen";
import AllScreen from "./screens/AllScreen";
import SettingsScreen from "./screens/SettingsScreen";

//Screen names
const homeName = "Home";
const allName = "All";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#87CEEB",
          tabBarInactiveTintColor: "grey",
          tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
          tabBarStyle: {
            padding: 10,
            height: 80,
            elevation: 0, // for Android
            shadowOffset: {
              width: 0,
              height: 0, // for iOS
              borderTopWidth: 0,
            },
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home";
            } else if (rn === allName) {
              iconName = focused ? "list-unordered" : "list-unordered";
            } else if (rn === settingsName) {
              iconName = focused ? "gear" : "gear";
            }

            // You can return any component that you like here!
            return <Octicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={allName} component={AllScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
