import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
function User() {
  const [task, settask] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users ')
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
      <>
        <Table striped bordered hover variant="danger">
          <thead>
            <tr>
              <th>Id</th>
              <th>name</th>
              <th>username</th>
              <th>phone</th>
              <th>website</th>
              <th>email</th>
              <th>address</th>
              <th>company</th>

            </tr>
          </thead>
          <tbody>
            {
              task.map((item, index) => {
                return (
                  <tr>
                    <td key={index}>{item.id}</td>
                    <td>{item.name}</td>
                    <td >{item.username}</td>
                    <td >{item.phone}</td>
                    <td >{item.website}</td>
                    <td >{item.email}</td>
                    <td >
                      <Table striped bordered hover variant="primary">
                        <thead>
                          <tr>
                            <td>street</td>
                            <td>suite</td>
                            <td>city</td>
                            <td>zipcode</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{item.address.street}</td>
                            <td>{item.address.suite}</td>
                            <td>{item.address.city}</td>
                            <td>{item.address.zipcode}</td>
                          </tr>
                        </tbody>
                      </Table>
                    </td>
                    <td>
                      <Table striped bordered hover variant="primary">
                        <thead>
                          <tr>
                            <td>name</td>
                            <td>catchPhrase</td>
                            <td>bs</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                           <td>{item.company.name}</td>
                           <td>{item.company.catchPhrase}</td>
                           <td>{item.company.bs}</td>
                          </tr>
                        </tbody>
                      </Table>
                    </td>
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
export default User;