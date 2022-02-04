
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View,Dimensions } from 'react-native';
import HomeScreen from './app/screen/HomeScreen';

import WelcomeScreen from './app/screen/WelcomeScreen';

export default function App() {
  return (
   <SafeAreaView style={styles.container}>
     {/* <WelcomeScreen/> */}
     {/* <HomeScreen/> */}
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:Platform.OS=='android'?StatusBar.currentHeight:null,
  
  },
});
