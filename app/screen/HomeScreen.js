import { useEffect, useState } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { Headline } from "react-native-paper";
import useAndroidRippleForView from "react-native/Libraries/Components/Pressable/useAndroidRippleForView";
import BookCard from "../component/BookCard";
import HorizontalCategory from "../component/HorizontalCategory";
import HorizontalListItem from "../component/HorizontalListItem";
import {getBooksFromRange, getRandomBooks} from '../library'

// const data=[
//     {
//         id:1,
//         title:'This is the title'
//     },
//     {
//         id:2,
//         title:'This is the title'
//     },
//     {
//         id:3,
//         title:'This is the title'
//     },
//     {
//         id:4,
//         title:'This is the title'
//     },
//     {
//         id:5,
//         title:'This is the title'
//     },
//     {
//         id:6,
//         title:'This is the title'
//     },
//     {
//         id:7,
//         title:'This is the title'
//     },
//     {
//         id:8,
//         title:'This is the title'
//     },
//     {
//         id:9,
//         title:'This is the title'
//     },
//     {
//         id:10,
//         title:'This is the title'
//     },

// ]

const HomeScreen = ({navigation}) => {
    const [data,setData]=useState([])
    const [randomData,setRandomData]=useState([])
    const onClick=id=>{
        navigation.navigate('Book',{id})
    }
    const fetchData=async (number_of_books)=>{
        const finalData=[]
        const range=Array.from({length: number_of_books}, (_, i) => i + 1).join(',')

        const respone=await fetch(`http://gutendex.com/books/?ids=${range}`)
        const json=await respone.json()
        for (const book of await  json.results){
            const author=book.authors[0]?book.authors[0].name: 'Unknown'
            const book_info={
                id:book.id,
                title:book.title,
                image:book.formats["image/jpeg"],
                subtitle:`Written by ${ author } `,
                description:`This book is contains  ${book.subjects.join(',')}`
            }
            finalData.push(book_info)   
        }
        setData(finalData)
    }
    
    // getRandomBooks(1).then(books=>setRandomData(books))
    // fetchData(1)
    // console.log(data,randomData)
    useEffect(()=>{
        // fetchData(3)
        getBooksFromRange(1,4).then(r=>setData(r))
        getRandomBooks(5).then(c=>setRandomData(c))
    },[])
    return (
        <ScrollView>
        <HorizontalCategory title="Popular" data={data}  onClick={onClick}/>
        <HorizontalCategory title="Random" data={randomData} onClick={onClick}/>

            
        </ScrollView>
        
        );
}

export default HomeScreen;