import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, InputGroup } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { setActiveUser } from "../../store/user";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleShowPass = () => {
    setShowPass(function (state) {
      return !state;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((result) => {
        console.log(result);

        dispatch(
          setActiveUser({
            userName: result.user.displayName,
            userEmail: result.user.email,
          })
        );
        history.push("/");
      })
      .catch(() => {
        setError("Failed to log in");
        // console.log(err);
      });

    // try {
    //   setError("");
    //   setLoading(true);
    //   // await login(emailRef.current.value, passwordRef.current.value);
    //   history.push("/");
    // } catch {
    //   setError("Failed to log in");
    // }

    setLoading(false);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <InputGroup>
                <Form.Control
                  type={showPass ? "text" : "password"}
                  ref={passwordRef}
                  required
                />
                <div className="mx-2" onClick={handleShowPass}>
                  {showPass ? <FaEyeSlash /> : <FaEye />}
                </div>
              </InputGroup>
            </Form.Group>

            <Button disabled={loading} className="w-100 mt-4" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/passReset">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
}
