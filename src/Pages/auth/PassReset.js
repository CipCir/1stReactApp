import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";

import { Link } from "react-router-dom";
import { auth } from "../../firebase";

export default function ForgotPassword() {
  const emailRef = useRef();

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setError("");
    setMessage("");
    auth
      .sendPasswordResetEmail(emailRef.current.value)
      .then(() => {
        setMessage(
          "An email was sent you the specified email with instructions on how to reset your password"
        );
        setLoading(false);
      })
      .catch(() => {
        setError(
          "Failed to reset the password, your specified email address was not found."
        );
        setLoading(false);
      });
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Password Reset</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-2" type="submit">
              Reset Password
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/login">Login</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
}
