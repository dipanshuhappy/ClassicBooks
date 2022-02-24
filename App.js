
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View, Dimensions } from 'react-native';
import HomeScreen from './app/screen/HomeScreen';
import { DefaultTheme,Provider as PaperProvider, Surface } from 'react-native-paper/';
import WelcomeScreen from './app/screen/WelcomeScreen';
import colors from './app/config/colors';
import BookScreen from './app/screen/BookScreen';
console.log(DefaultTheme)
const theme = {
  ...DefaultTheme,
  roundness: 2,
  dark:true,
  mode:'#000',
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    accent: colors.accent,
    placeholder:colors.accent,
    text:colors.accent,
    background:'#000000'
  },
}
console.log({theme})
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
     
      <Surface  theme={theme}>
        {/* <HomeScreen /> */}
         {/* <WelcomeScreen/> */}
         <BookScreen/>
      </Surface>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : null,

  },
});
