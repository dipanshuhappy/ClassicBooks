import { StyleSheet ,View,TouchableHighlight,Text} from "react-native";
import colors from "../config/colors";

const RoundButton = ({style={},title,colorText=colors.black,color=colors.primary,onPress}) => {
    return (
        <TouchableHighlight onPress={onPress} style={[styles.buttonContainer,style]} >
        
                <Text style={styles.text}>{title}</Text>
           
        </TouchableHighlight>
    );
}
const styles = StyleSheet.create({
    buttonContainer:{
        width:'100%',
        backgroundColor:colors.primary,
        borderRadius:15,
        height:40
    },
    text:{
        fontSize:24,
        textAlign:'center',
    }
})
export default RoundButton;