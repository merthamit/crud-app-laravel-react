import React from "react";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Col,
  Row,
  Container,
  Button,
} from "reactstrap";

const MyForm = ({ customer, setCustomer, onFormSubmit }) => {
  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };
  return (
    <Form>
      <Container>
        <Row className="my-2">
          <Col md="3">
            <FormGroup>
              <Label for="exampleEmail">Name</Label>
              <Input
                id="exampleEmail"
                name="first_name"
                placeholder="Please write a name."
                type="text"
                value={customer.first_name}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label for="exampleEmail">Lastname</Label>
              <Input
                id="exampleEmail"
                name="last_name"
                placeholder="Please write a lastname."
                type="text"
                value={customer.last_name}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="Please write a email."
                type="email"
                value={customer.email}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col md="3" className="align-self-end ">
            <FormGroup>
              <Button
                className={`${
                  !customer?.isEdit ? "btn-success" : "btn-warning"
                }`}
                onClick={() => onFormSubmit(customer)}
              >
                {customer?.isEdit ? "Update" : "Save"}
              </Button>
            </FormGroup>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

export default MyForm;
