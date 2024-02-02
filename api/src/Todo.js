import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import Table from 'react-bootstrap/Table';
function Todo() {
  const [task, settask] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos ')
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
        <Table striped bordered hover variant="danger">
          <thead>
            <tr>
              <th>user Id</th>
              <th>id</th>
              <th>title</th>
              <th>completed</th>
            </tr>
          </thead>
          <tbody>
            {
              task.map((item, index) => {
                return (
                  <tr>
                    <td key={index}>{item.userId }</td>
                    <td>{item.id}</td>
                    <td  className='text-center'>{item.title}</td>
                    <td >{String(item.completed)}</td>
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
export default Todo;