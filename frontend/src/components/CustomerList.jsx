import React from "react";
import { Table, Container, Button } from "reactstrap";
import Customers from "./Customers";
import axios from "axios";
const CustomerList = ({ customers, setLoading, onDelete, onEdit }) => {
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers &&
            customers.map((customer) => (
              <Customers
                key={customer.id}
                customer={customer}
                onDelete={onDelete}
                onEdit={onEdit}
              />
            ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default CustomerList;
