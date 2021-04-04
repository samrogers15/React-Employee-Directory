import React from "react";
import { Form, Button } from 'react-bootstrap';

const SearchBar = () => {
  return (
    <Form>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Employee Search</Form.Label>
        <Form.Control type="text" placeholder="Enter" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
  );
};

export default SearchBar;
