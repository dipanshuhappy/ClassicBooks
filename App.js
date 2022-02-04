
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View, Dimensions } from 'react-native';
import HomeScreen from './app/screen/HomeScreen';
import { DefaultTheme,Provider as PaperProvider } from 'react-native-paper/';
import WelcomeScreen from './app/screen/WelcomeScreen';
import colors from './app/config/colors';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    accent: colors.accent,
    placeholder:colors.accent
  },
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
     
      <PaperProvider theme={theme}>
        <HomeScreen />
         {/* <WelcomeScreen/> */}
      </PaperProvider>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : null,

  },
});
