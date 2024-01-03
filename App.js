//import Libraries
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import 'react-native-gesture-handler';
import Constants from "expo-constants";

//import screens
import Onboarding from './screens/Onboarding';
import Handle from './screens/Handle';
import Play from './screens/TabScreens/Play';
import Inbox from './screens/TabScreens/Inbox';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();


export function Account() {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 18, fontWeight: "500" },
          tabBarPressColor: "#3a97f4"
        }}
        style={{ marginTop: Constants.statusBarHeight }}
      >
        <Tab.Screen name='Play' component={Play} />
        <Tab.Screen name='Inbox' component={Inbox} />
      </Tab.Navigator>
    </>
  )
}

export function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Onboarding' component={Onboarding} options={{ headerShown: false }} />
          <Stack.Screen name='Handle' component={Handle} options={{ headerShown: false }} />
          <Stack.Screen name='Account' component={Account} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </>
  );
}

export default App;
