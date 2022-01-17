import { StyleSheet, View,Image ,Text} from "react-native";

const HorizontalListItem = ({title}) => {
    return (
        <View>
           <Image style={styles.image} source={require('../../assets/welcome_screen.jpg')} resizeMode="cover"/>
            <Text>{title}</Text>
            <Text>klasdjfljas;f;llffjlkdafj;klasdfjl</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        height:100,
    },
    image:{
        width:100,
        height:100
    }    
})
export default HorizontalListItem;