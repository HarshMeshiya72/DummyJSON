import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import Table from 'react-bootstrap/Table';
function Albums() {
  const [task, settask] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/albums ')
      .then(function (response) {
        console.log(response.data.results);
        settask(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, []) 
    return(
      <>
           <>
        <Table striped bordered hover variant="success">
          <thead>
            <tr>
              <th>user Id</th>
              <th>id</th>
              <th>title</th>
            </tr>
          </thead>
          <tbody>
            {
              task.map((item, index) => {
                return (
                  <tr>
                    <td key={index}>{item.userId }</td>
                    <td>{item.id}</td>
                    <td >{item.title}</td>
                  </tr>
                );
              })
            } 
          </tbody>
        </Table>
      </>
      </>
    ); 
  } 
export default Albums;