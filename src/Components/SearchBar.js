import React from "react";
import { Form } from "react-bootstrap";

const SearchBar = ({ search, setSearchState }) => {
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>Employee Search</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter search criteria here to search for an employee"
            value={search}
            onChange={({ target }) => setSearchState(target.value)}
          />
        </Form.Group>
      </Form>
    </>
  );
};

export default SearchBar;
