import { StyleSheet ,View,TouchableHighlight,Text} from "react-native";
import { Button } from "react-native-paper";
import colors from "../config/colors";

const RoundButton = ({style={},title,colorText=colors.black,color=colors.primary,onPress}) => {
    return (
        <Button  style={[styles.buttonContainer,style]} mode="contained" onPress={onPress}>
       {title}
      </Button>
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