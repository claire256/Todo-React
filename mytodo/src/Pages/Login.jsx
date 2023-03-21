import React, { useState, useContext, useEffect } from "react";
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
import { LoginUser } from "../Context/Actions/User";
import { LOGIN, LOGIN_ERRORS } from "../Context/Types";

const Login = () => {
  const navigate = useNavigate();
  const { userState, userDispatch } = useContext(AppContext);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [apierrors, setApierrors] = useState(null);
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const updateInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (userState.user?.accessToken) {
      localStorage.setItem("access_token", userState.user.accessToken);
      userDispatch({ type: LOGIN, payload: null });
      setButtonLoading(false)
      return navigate("/");
    }
    if (userState.login_err) {
      setApierrors(userState.login_err);
      userDispatch({ type: LOGIN_ERRORS, payload: null });
      setButtonLoading(false)
    }
  }, [userState]);
  const signIn = async (e) => {
    e.preventDefault();
    const todoError = ValUser(user);
    if (todoError.length > 0) {
      setErrors(todoError);
      return;
    }
    setButtonLoading(true);
    await LoginUser(user)(userDispatch);
  };
  return (
    <>
      <Container className="pt-5 login-cont">
        <Row>
          <Col>
            <Card style={{ width: "80%" }}>
              <Card.Header>
                {apierrors && <p className="error">{apierrors}</p>}
                <h3>Login</h3>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group>
                    <Form.Label style={{ fontSize: "20px" }}>
                      Email address
                    </Form.Label>
                    <Form.Control
                      name="email"
                      onChange={updateInput}
                      type="Email"
                      placeholder="Enter Email"
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                  </Form.Group>
                  <Form.Group>
                    <Form.Label style={{ fontSize: "20px" }}>
                      Password
                    </Form.Label>
                    <Form.Control
                      name="password"
                      onChange={updateInput}
                      type="password"
                      placeholder="Enter Password"
                    />
                    {errors.password && (
                      <p className="error">{errors.password}</p>
                    )}
                  </Form.Group>
                  <Form.Group>
                    {!buttonLoading && (
                      <Button
                        className="mt-4"
                        type="submit"
                        variant="success"
                        onClick={signIn}
                        style={{ fontSize: "20px" }}
                      >
                        SUBMIT
                      </Button>
                    )}
                    {buttonLoading && (
                      <Button
                        className="mt-4"
                        type="submit"
                        variant="success"
                        onClick={signIn}
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
                        SUBMIT
                      </Button>
                    )}
                  </Form.Group>
                </Form>
                <p className="mt-3" style={{ fontSize: "17px" }}>
                  Don't have an account? <a href="Signup">Sign up</a>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
