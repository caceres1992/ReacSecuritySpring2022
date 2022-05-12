import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import AuthService from "./config/auth.service";

function App() {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const { username, password } = login;

  const changeHandle = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const submitLogin = (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      alert("Please fill all the fields");
      console.log("denegado");
      return;
    }
    AuthService.loginApi(username, password).then(() => {

    })
    console.log("eviando");
  };
  return (
    <div>
      <Form className="mx-auto w-25 mt-5" onSubmit={submitLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={changeHandle}
            type="text"
            name="username"
            value={username}
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={changeHandle}
            value={password}
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
