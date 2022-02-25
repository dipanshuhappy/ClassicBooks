
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View, Dimensions } from 'react-native';
import HomeScreen from './app/screen/HomeScreen';
import { DefaultTheme, Provider as PaperProvider, Surface } from 'react-native-paper/';
import WelcomeScreen from './app/screen/WelcomeScreen';
import colors from './app/config/colors';
import BookScreen from './app/screen/BookScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeNavigationBar from './app/component/HomeNavigationBar';
console.log(DefaultTheme)
const theme = {
  ...DefaultTheme,
  roundness: 2,
  dark: true,
  mode: '#000',
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    accent: colors.accent,
    placeholder: colors.accent,
    text: colors.accent,
    background: '#000000'
  },
}
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    // <SafeAreaView style={styles.container}>
    //   <Surface theme={theme}>
        // {/* <WelcomeScreen/> */}
        // {/* <BookScreen/> */}
        <PaperProvider theme={theme}>
        <NavigationContainer >
          <Stack.Navigator
             initialRouteName='Home'
             screenOptions={{  
              header: HomeNavigationBar
              }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Book" component={BookScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : null,

  },
});
