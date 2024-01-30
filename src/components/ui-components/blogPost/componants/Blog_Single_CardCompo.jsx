import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Blog_Single_CardCompo = ({title,description,image}) => {
    return (
        <Card style={{ width: '22rem', margin:' 15px 0' }} >
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title style={{fontFamily:'lora', color:'#84827B'}}>{title}</Card.Title>
            <Card.Text style={{fontFamily:'Inter' ,color:'#191919'}}>
             {description}
            </Card.Text>
            <Button variant="primary">Learn More</Button>
          </Card.Body>
        </Card>
      );
    
}

export default Blog_Single_CardCompo