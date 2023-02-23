import React, { useState, useContext, useEffect } from "react";
import { AddUser } from "../Context/Actions/User";
import { useNavigate } from "react-router-dom";
import ValUser from "../Auth/ValUser";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import { AppContext } from "../Context/Context";
import { SIGNUP, SIGNUP_ERRORS } from "../Context/Types";

const Signup = () => {
  const navigate = useNavigate();
  const { userState, userDispatch } = useContext(AppContext);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [apierrors, setApierrors] = useState(null);
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const updateInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (userState.user?.id) {
      userDispatch({ type: SIGNUP, payload: null });
      return navigate("/login");
    }

    if (userState.signup_errors) {
      setApierrors(userState.signup_errors);
      userDispatch({ type: SIGNUP_ERRORS, payload: null });
    }
  }, [userState]);
  const addAccount = async (e) => {
    e.preventDefault();
    const todoErrors = ValUser(user);
    if (todoErrors.length > 0) {
      setErrors(todoErrors);
      return;
    }
    setButtonLoading(true);
    await AddUser(user)(userDispatch);

    setButtonLoading(false);
  };

  return (
    <>
      <Container className="pt-3 sign-cont">
        <Row>
          <Col>
            <h4>
              Get started with us today! Create your account by filling out the
              information below
            </h4>
            <Card style={{ width: "80%" }} className="mt-4">
              <Card.Body>
                <Form>
                  <Form.Group>
                    {apierrors && <p className="error">{apierrors}</p>}
                    <Form.Label style={{ fontSize: "20px" }}>
                      First name
                    </Form.Label>
                    <Form.Control
                      type="name"
                      name="first_name"
                      onChange={updateInput}
                      placeholder="Enter first name"
                    />
                    {errors.first_name && (
                      <p className="error">{errors.first_name}</p>
                    )}
                  </Form.Group>
                  <Form.Group>
                    <Form.Label style={{ fontSize: "20px" }}>
                      Last name
                    </Form.Label>
                    <Form.Control
                      type="name"
                      name="last_name"
                      onChange={updateInput}
                      placeholder="Enter last name"
                    />
                    {errors.last_name && (
                      <p className="error">{errors.last_name}</p>
                    )}
                  </Form.Group>
                  <Form.Group>
                    <Form.Label style={{ fontSize: "20px" }}>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      onChange={updateInput}
                      placeholder="Enter email"
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                  </Form.Group>
                  <Form.Group>
                    <Form.Label style={{ fontSize: "20px" }}>
                      Password
                    </Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      onChange={updateInput}
                      placeholder="Enter password"
                    />
                    {errors.password && (
                      <p className="error">{errors.password}</p>
                    )}
                  </Form.Group>
                  <Form.Group>
                    <Form.Label style={{ fontSize: "20px" }}>
                      Confirm Password
                    </Form.Label>
                    <Form.Control
                      type="password"
                      name="confirm_password"
                      onChange={updateInput}
                      placeholder="Enter password"
                    />
                    {errors.confirm_password && (
                      <p className="error">{errors.confirm_password}</p>
                    )}
                  </Form.Group>
                  <Form.Group className="pt-2">
                    {!buttonLoading && (
                      <Button
                        className="mt-4"
                        type="submit"
                        variant="success"
                        onClick={addAccount}
                        style={{ fontSize: "20px" }}
                      >
                        Add Account
                      </Button>
                    )}
                    {buttonLoading && (
                      <Button
                        className="mt-4"
                        type="submit"
                        variant="success"
                        onClick={addAccount}
                        style={{ fontSize: "20px" }}
                        disabled={buttonLoading}
                      >
                        <Spinner
                          as="span"
                          variant="light"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                          animation="border"
                        />
                        Add Account
                      </Button>
                    )}
                  </Form.Group>
                </Form>
                <p className="mt-3" style={{ fontSize: "17px" }}>
                  Already have an account? Login <a href="Login">here</a>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Signup;
