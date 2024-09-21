import { useEffect, useState } from "react";
import { Container, Navbar, NavbarBrand, Spinner } from "reactstrap";
import MyForm from "./MyForm";
import CustomerList from "./CustomerList";
import axios from "axios";

function App() {
  const [customers, setCustomers] = useState([]);
  const [customer, setCustomer] = useState({
    id: null,
    first_name: "",
    last_name: "",
    email: "",
    isEdit: false,
  });
  const [loading, setLoading] = useState(false);

  const getCustomers = () => {
    setLoading(true);
    axios.get("http://127.0.0.1:8000/api/customers").then(({ data }) => {
      setCustomers(data);
      setLoading(false);
    });
  };

  const onDelete = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/customers/${id}`).then(() => {
      getCustomers();
    });
  };

  const onEdit = (data) => {
    setCustomer({ ...data, isEdit: true });
  };
  const onFormSubmit = (data) => {
    if (data.isEdit) {
      axios
        .put(`http://127.0.0.1:8000/api/customers/${data.id}`, data)
        .then((res) => {
          setCustomer({
            id: null,
            first_name: "",
            last_name: "",
            email: "",
            isEdit: false,
          });
          getCustomers();
        });
    } else {
      axios.post(`http://127.0.0.1:8000/api/customers/`, data).then((res) => {
        setCustomer({
          id: null,
          first_name: "",
          last_name: "",
          email: "",
          isEdit: false,
        });
        getCustomers();
      });
    }
  };

  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <>
      <Navbar color="secondary" dark>
        <NavbarBrand href="/">CRUD-APP</NavbarBrand>
      </Navbar>
      <MyForm
        customer={customer}
        setCustomer={setCustomer}
        onFormSubmit={onFormSubmit}
      />
      <Container className="d-flex justify-content-center">
        {loading && <Spinner>Loading...</Spinner>}
      </Container>
      {!loading && (
        <CustomerList
          customers={customers}
          setLoading={setLoading}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      )}
    </>
  );
}

export default App;
