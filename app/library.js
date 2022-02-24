const URL='http://gutendex.com/'
const getRange=(start,end)=>{
    range=[]
    for (let i = start; i < end ;i++) {
        range.push(i)
    }
    return range
}
const getBookObject=book=>{
    const author=book.authors[0]?book.authors[0].name: 'Unknown'
    return {
        id:book.id,
        title:book.title,
        image:book.formats["image/jpeg"],
        subtitle:`Written by ${ author } `,
        description:`This book is contains  ${book.subjects.join(',')}`
    }
}
const getBooksFromRange= async (start,end)=>{
    range=getRange(start,end).join(',')
    finalData=[]
    const respone=await fetch(`${URL}/books/?ids=${range}`)
    const json=await respone.json()
    for (const book of await  json.results){
        finalData.push(getBookObject(book))   
    }
    // console.log({finalData})
    return finalData
}
const getABook=async id=>{
    const respone=await fetch(`${URL}/books/${id}`)
    const book=await respone.json()
    return getBookObject(book)
}
const getRandomBooks=async numOfBooks=>{
    let random_numbers= []
    for (let i = 0; i < numOfBooks; i++) {
        random_numbers.push(Math.floor(Math.random() * (40000)))
    }
    random_numbers=random_numbers.join(',')
    console.log({random_numbers})
    finalData=[]
    const respone=await fetch(`${URL}/books/?ids=${random_numbers}`)
    const json=await respone.json()
    for (const book of await  json.results){
        finalData.push(getBookObject(book))   
    }
    console.log({random:finalData})
    return finalData 
}
const getBooksByPopularity=numOfBooks=>{

}
const getBooksOnSearch=searchWord=>{

}
const getBooksByTopic=(topic,numOfBooks)=>{

}
export{
    getBooksFromRange,
    getRandomBooks
}