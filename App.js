import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import HomeScreen from "./Screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ContactScreen from "./Screens/ContactScreen";
import { Ionicons } from "@expo/vector-icons";
import { SocialIcon } from "react-native-elements";
import { TouchableOpacity, View, Linking, ImageBackground } from "react-native";

//Stack Navigation: What will display on the screen
const Home = createNativeStackNavigator();
const Contact = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <Home.Navigator>
      <Home.Screen name="Home" component={HomeScreen} />
    </Home.Navigator>
  );
};

const ContactNavigation = () => {
  return (
    <Contact.Navigator>
      <Contact.Screen name="Contact" component={ContactScreen} />
    </Contact.Navigator>
  );
};

//Tab Navigation: Drawer Pop Out
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "Contact") {
              iconName = focused ? "ios-list-box" : "ios-list";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Contact" component={ContactScreen} />
      </Tab.Navigator>

      <TouchableOpacity>
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <SocialIcon
            type="facebook"
            onPress={() => {
              Linking.openURL("https://www.facebook.com/");
            }}
          />
          <SocialIcon
            type="instagram"
            onPress={() => {
              Linking.openURL("https://www.instagram.com/");
            }}
          />
          <SocialIcon
            type="tiktok"
            onPress={() => {
              Linking.openURL("https://www.tiktok.com/");
            }}
          />
        </View>
      </TouchableOpacity>
    </NavigationContainer>
  );
}

export default App;
