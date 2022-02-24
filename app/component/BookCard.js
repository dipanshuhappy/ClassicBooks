import React from 'react';
import { Dimensions } from 'react-native';
import { Button, Card, Title, Paragraph  } from 'react-native-paper';
const {width,height} = Dimensions.get('window')
function BookCard({title,subtitle,description,image}) {
    return (
        <Card style={{width:width/2.5}} >
        <Card.Cover source={{ uri: image }} resizeMode='contain'/>
        <Card.Title titleNumberOfLines={2} title={title} subtitle={subtitle}/>
        <Card.Content>
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