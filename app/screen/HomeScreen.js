import { FlatList, Text, View } from "react-native";
import BookCard from "../component/BookCard";
import HorizontalListItem from "../component/HorizontalListItem";
const data=[
    {
        id:1,
        title:'This is the title'
    },
    {
        id:2,
        title:'This is the title'
    },
    {
        id:3,
        title:'This is the title'
    },
    {
        id:4,
        title:'This is the title'
    },
    {
        id:5,
        title:'This is the title'
    },
    {
        id:6,
        title:'This is the title'
    },
    {
        id:7,
        title:'This is the title'
    },
    {
        id:8,
        title:'This is the title'
    },
    {
        id:9,
        title:'This is the title'
    },
    {
        id:10,
        title:'This is the title'
    },

]
const HomeScreen = () => {
    return (
        <View>
            <FlatList
            data={data}
            keyExtractor={(item)=>item.id.toString()}
            renderItem={({item})=><BookCard title={item.title} subtitle="made in 1998" description="l;jsljdlsjlflsdflsdjlfsjlfjdsfldf" />}
            horizontal         
            />
        </View>
        
        );
}

export default HomeScreen;