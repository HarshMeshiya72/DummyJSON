import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Photo() {
  const [task, settask] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos ')
      .then(function (response) {
        console.log(response.data.results);
        settask(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])
  return (
    <>
      <Container>
        <Row>
          {
            task.map((item, index) =>  {
              return (
                <Col className='g-3'>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item.url} />
                    <Card.Body>
                      <Card.Title>{item.albumId}</Card.Title>
                      <Card.Title>{item.id}</Card.Title>
                      <Card.Title>{item.title}</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </>
  );
}
export default Photo;