import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import Table from 'react-bootstrap/Table';
function Post() {
  const [task, settask] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts ')
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
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>id</th>
              <th>User id</th>
              <th>title</th>
              <th>body</th>
            </tr>
          </thead>
          <tbody>
            {
              task.map((item, index) => {
                return (
                  <tr>
                    <td key={index}>{item.userId}</td>
                    <td>{item.id}</td>
                    <td >{item.title}</td>
                    <td >{item.body}</td>
                  </tr>
                );
              })
            } 
          </tbody>
        </Table>
      </>
      );
}
export default Post;