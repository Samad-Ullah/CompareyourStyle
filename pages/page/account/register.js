import React, { useState } from "react";
import CommonLayout from "../../../components/shop/common-layout";
import { Input, Container, Row, Form, Label, Col } from "reactstrap";
import { baseURL } from "../../../config/url_enum";

const Register = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegister = () => {
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: user?.firstName,
          lastName: user?.lastName,
          email: user?.email,
          password: user?.password,
        }),
      };
      fetch(`${baseURL}/user/register`, requestOptions).then((response) =>
        response.json()
      );
    } catch (err) {
      console.log(err);
    }
    alert("You have registered your account");
  };

  return (
    <CommonLayout parent="home" title="register">
      <section className="register-page section-b-space">
        <Container>
          <Row>
            <Col lg="12">
              <h3>create account</h3>
              <div className="theme-card">
                <Form className="theme-form">
                  <Row>
                    <Col md="6">
                      <Label for="email">First Name</Label>
                      <Input
                        type="text"
                        name="firstName"
                        onChange={handleChange}
                        className="form-control"
                        id="fname"
                        placeholder="First Name"
                        required=""
                      />
                    </Col>
                    <Col md="6">
                      <Label for="review">Last Name</Label>
                      <Input
                        type="text"
                        name="lastName"
                        onChange={handleChange}
                        className="form-control"
                        id="lname"
                        placeholder="Last Name"
                        required=""
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <Label for="email">email</Label>
                      <Input
                        type="text"
                        name="email"
                        onChange={handleChange}
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        required=""
                      />
                    </Col>
                    <Col md="6">
                      <Label for="review">Password</Label>
                      <Input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        className="form-control"
                        id="review"
                        placeholder="Enter your password"
                        required=""
                      />
                    </Col>
                    <a
                      href="#"
                      className="btn btn-solid"
                      onClick={handleRegister}
                    >
                      create Account
                    </a>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </CommonLayout>
  );
};

export default Register;
