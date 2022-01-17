import { Button, Image, ImageBackground, StyleSheet,View, Text } from "react-native";
import welcomeScreenImage from '../../assets/welcome_screen.jpg'
import logo from '../../assets/icon.png'
import RoundButton from "../component/RoundButton";
const WelcomeScreen = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={welcomeScreenImage} style={styles.imageBackground} width={100} height={100}>
                <Image source={logo} style={styles.logo}/>
                <Text style={styles.tagline}>Get access to 60,000 books for free</Text>
                <View style={styles.buttonContianer}>
                <RoundButton style={styles.loginButton} title="Login" onPress={()=>console.log('lkdj0')}/>
                <RoundButton title="Sign Up" onPress={()=>console.log('lkdj0')}/>
                <Text style={styles.text} onPress={()=>console.log('text clicked')}>Skip For Now</Text>
                </View>
            </ImageBackground>
          
        </View>
    );
} 
const styles=StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        height:'100%'
    },
    buttonContianer:{
        width:'100%',
        height:'100%',
        bottom:32,
        marginTop:'100%',        
        // position:'absolute'
    },
    loginButton:{
        marginBottom:30
    },
    imageBackground:{
        flex:1,
        width:'100%',
        height:'100%',
        alignItems:'center'
    },
    logo:{
        width:128,
        height:200,
        marginTop:20
    },
    tagline:{
        fontWeight:'bold',
        fontSize:16,
        textAlign:'center'
    },
    text:{
        textAlign:'center',
        fontSize:30,
        textDecorationLine:'underline'
    }
})

export default WelcomeScreen;