import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import Table from 'react-bootstrap/Table';
function Coment() {
  const [task, settask] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments ')
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
        <Table striped bordered hover variant="primary">
          <thead>
            <tr>
              <th>post id</th>
              <th>id</th>
              <th>name</th>
              <th>email</th>
              <th>body</th>
            </tr>
          </thead>
          <tbody>
            {
              task.map((item, index) => {
                return (
                  <tr>
                    <td key={index}>{item.postId  }</td>
                    <td>{item.id}</td>
                    <td >{item.name}</td>
                    <td >{item.email}</td>
                    <td >{item.body}</td>
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
export default Coment;