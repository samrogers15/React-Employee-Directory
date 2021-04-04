import { React, useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const EmployeeTable = () => {
  const [employees, setEmployeeState] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10000")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setEmployeeState(res.Results);
      });
  });
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>DOB</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {/* check out a .filter.map here */}
        {employees.map(({ dob, name, email }) => {
          <EmployeeRow dob={dob} name={name} email={email} />;
        })}
      </tbody>
    </Table>
  );
};

const EmployeeRow = ({ dob, name, email }) => {
  <tr>
    <td>{dob.date}</td>
    <td>{name.first}</td>
    <td>{name.last}</td>
    <td>{email}</td>
  </tr>;
};

export default EmployeeTable;
