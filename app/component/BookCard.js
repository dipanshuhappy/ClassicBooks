import React from 'react';
import { Button, Card, Title, Paragraph  } from 'react-native-paper';
function BookCard({title,subtitle,description}) {
    return (
        <Card>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Title title={title} subtitle={subtitle}/>
        <Card.Content>
          
          <Paragraph>{description}</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button>Add to read list</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    );
}

export default BookCard;