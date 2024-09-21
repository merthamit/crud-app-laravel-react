import React from "react";
import { Button } from "reactstrap";

const Customers = ({ customer, onDelete, onEdit }) => {
  return (
    <tr>
      <th scope="row">{customer.id}</th>
      <td>{customer.first_name}</td>
      <td>{customer.last_name}</td>
      <td>{customer.email}</td>
      <td>
        <Button className="btn-sm btn-warning" onClick={() => onEdit(customer)}>
          Edit
        </Button>
        <Button
          className="btn-sm mx-1 btn-danger"
          onClick={(e) => onDelete(customer.id)}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default Customers;
