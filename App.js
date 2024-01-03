//import Libraries
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//import screens
import Onboarding from './screens/Onboarding';
import Handle from './screens/Handle';
import Account from './screens/Account';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Onboarding' component={Onboarding} options={{ headerShown: false }} />
          <Stack.Screen name='Handle' component={Handle} options={{ headerShown: false }} />
          <Stack.Screen name='Account' component={Account} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="dark" />

    </>
  );
}
