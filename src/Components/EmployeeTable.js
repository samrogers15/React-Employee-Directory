import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const EmployeeTable = ({ search }) => {
  const [employees, setEmployeesState] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=100&nat=nz")
      .then((res) => res.json())
      .then((res) => {
        setEmployeesState(res.results);
      });
  }, []);

  const searchString = (str, match) =>
    str.toLowerCase().indexOf(match.toLowerCase()) !== -1;

  const searchStringHandler = ({ name, email, location }) =>
    !search ||
    searchString(name.first, search) ||
    searchString(name.last, search) ||
    searchString(email, search) ||
    searchString(location.city, search) ||
    searchString(location.state, search);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Email</th>
          <th>DOB</th>
          <th>Age</th>
          <th>Phone Number</th>
          <th>Location</th>
          <th>ID#</th>
        </tr>
      </thead>
      <tbody>
        {employees
          .filter(searchStringHandler)
          .map(({ picture, name, email, dob, phone, location, id }, i) => (
            <EmployeeRow
              picture={picture}
              name={name}
              email={email}
              dob={dob}
              phone={phone}
              location={location}
              id={id}
              i={i}
            />
          ))}
      </tbody>
    </Table>
  );
};

const EmployeeRow = ({ picture, name, email, dob, phone, location, id }) => (
  <tr>
    <td>
      <img src={picture.thumbnail} alt="employee thumbnail" />
    </td>
    <td>
      {name.first} {name.last}
    </td>
    <td>{email}</td>
    <td>{dob.date}</td>
    <td>{dob.age}</td>
    <td>{phone}</td>
    <td>
      {location.city}, {location.state}
    </td>
    <td>{id.value}</td>
  </tr>
);

export default EmployeeTable;
