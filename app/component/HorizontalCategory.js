import React from 'react';
import { FlatList, Text, View } from "react-native";
import { Headline } from "react-native-paper";
import BookCard from "../component/BookCard";
function HorizontalCategory({title,data,onClick}) {
    const renderItem=({item})=><BookCard id={item.id} title={item.title} subtitle={item.subtitle} description={item.description} image={item.image} onClick={onClick} />
    return (
        <View>
            <Headline style={{marginBottom:20}}>{title}</Headline>
            <FlatList
            data={data}
            extraData={data}
            keyExtractor={(item)=>item.id}
            renderItem={renderItem}
            horizontal         
            maxToRenderPerBatch={4}
            />
        </View>
    );
}
export default HorizontalCategory;