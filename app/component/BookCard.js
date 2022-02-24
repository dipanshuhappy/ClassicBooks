import React from 'react';
import { Dimensions,TouchableHighlight  } from 'react-native';
import { Button, Card, Title, Paragraph  } from 'react-native-paper';
import { } from 'react-native-web';
const {width,height} = Dimensions.get('window')
function BookCard({id,title,subtitle,description,image,onClick}) {
    return (
        <Card style={{width:width/2.5}} >
        <Card.Cover source={{ uri: image }} resizeMode='contain' onTouchStart={()=>onClick(id)}/>
        <Card.Title titleNumberOfLines={2} title={title} subtitle={subtitle}  />
        <Card.Content onTouchStart={ ()=>console.log('sljfklljlds')}>
          <Paragraph style={{fontSize:10,marginBottom:30}} lineBreakMode="clip" numberOfLines={7} >{description}</Paragraph>
        </Card.Content>
        <Card.Actions style={{position:'absolute',bottom:0}}>
          <Button>Add to list</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
     
    );
}

export default BookCard;