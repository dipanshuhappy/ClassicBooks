import { Dimensions, Image, StyleSheet } from "react-native";
import { Divider, FAB, Headline, Paragraph, Subheading, Title } from "react-native-paper";
import { View } from "react-native";
import welcomeScreenImage from '../../assets/welcome_screen.jpg'
import { useEffect, useState } from "react";
import { getABook } from '../library'
import RoundButton from "../component/RoundButton";

const { width, height } = Dimensions.get('window')
console.log({height})
const BookScreen = ({ route }) => {
    const { id } = route.params
    const [book, setBook] = useState({})
    useEffect(() => {
        getABook(id).then(b => setBook(b))
    }, [])
    return (
        <View style={styles.bookScreen}>
            <Image style={styles.bookImage} source={{ uri: book.image }} resizeMode="contain" />
            <Headline style={styles.title}>{book.title}</Headline>
            <Subheading style={styles.subTitle}>{book.subtitle}</Subheading>
            <Divider />
            <Paragraph style={styles.description}>{book.description}</Paragraph>
            <RoundButton style={{marginTop:40}} title="Read Now"/>
            <RoundButton style={{marginTop:40}} title="Add to Readlist"/>
            <FAB
                style={styles.fab}
                small
                icon="download"
                onPress={() => console.log('Pressed')}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    bookScreen: {
        height: height,
        width: width,
    },
    bookImage: {
        width: width,
        height: 200
    },
    title: {
        textAlign: 'center',
        marginTop: 30,
    },
    subTitle: {
        textAlign: 'center',
        marginTop: 20
    },
    description: {
        textAlign: 'center',
        marginTop: 20
    },
    fab: {
        position: 'absolute',
        width:40,
        right:0,
        top:height-128,
        marginRight:20
      },
})
export default BookScreen;