import { Dimensions, Image, StyleSheet } from "react-native";
import { Divider, Headline, Paragraph, Subheading, Title } from "react-native-paper";
import { View } from "react-native";
import welcomeScreenImage from '../../assets/welcome_screen.jpg'
const {width,height} = Dimensions.get('window')
const BookScreen = () => {
    return (
        <View style={styles.bookScreen}>
            <Image resizeMode="cover" style={styles.bookImage} source={welcomeScreenImage} />
            <Headline style={styles.title}>The Richest man in bablyon</Headline>
            <Subheading style={styles.subTitle}>Author: THelsjdf ksdfl , Published in 1998</Subheading>
            <Divider/>
            <Paragraph style={styles.description}>This is a book one this and that and reviews etc</Paragraph>
        </View>
    );
}
const styles = StyleSheet.create({
    bookScreen:{
      height:height,
      width:width,
    },
    bookImage: {
        width: width,
        height: 200
    },
    title:{
        textAlign:'center',
        marginTop:30,
    },
    subTitle:{
        textAlign:'center',
        marginTop:20
    },
    description:{
        textAlign:'center',
        marginTop:20
    }
})
export default BookScreen;