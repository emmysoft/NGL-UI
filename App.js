import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
// import tw from "twrnc";

import Onboarding from './screens/Onboarding';

export default function App() {
  return (
    <>
      <View>
        <Onboarding />
        <StatusBar style="light" />
      </View>
    </>
  );
}
