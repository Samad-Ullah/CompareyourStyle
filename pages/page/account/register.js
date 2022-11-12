import React, { useState } from "react";
import CommonLayout from "../../../components/shop/common-layout";
import { Input, Container, Row, Label, Col } from "reactstrap";
import { baseURL } from "../../../config/url_enum";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Image from "next/image";

const Register = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  const handleRegister = (values) => {
    const { firstName, lastName, email, password } = values;
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
        }),
      };
      setLoading(true);
      fetch(`${baseURL}/user/register`, requestOptions)
        .then((response) => response.json())
        .then((response) => {
          if (response?.status === 200) {
            setLoading(false);
            router.push("/page/account/wishlist");
          } else if (response?.message) {
            return (
              Swal.fire({
                title: "Error!",
                text: "Email Already Exists",
                icon: "error",
                showDenyButton: false,
              }),
              setLoginError(response.message)
            );
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  });

  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "red",
          opacity: "0.5px",
        }}
      >
        <Image
          src="/assets/loader/Load.svg"
          width="100px"
          height="100px"
          alt="loader"
        />
      </div>
    );
  }

  return (
    <CommonLayout parent="home" title="register">
      <section className="register-page section-b-space">
        <Container>
          <Row>
            <Col lg="12">
              <h3>create account</h3>
              <div className="theme-card">
                <Formik
                  initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={(values) => {
                    handleRegister(values);
                  }}
                >
                  {({ errors, touched }) => (
                    <Form className="theme-form">
                      <Row>
                        <Col md="6">
                          <Label for="email">First Name</Label>
                          <Field
                            name="firstName"
                            type="text"
                            className="form-control"
                          />
                          {errors.firstName && touched.firstName ? (
                            <div
                              style={{
                                color: "red",
                                marginTop: "-13px",
                              }}
                            >
                              {errors.firstName}
                            </div>
                          ) : null}
                        </Col>
                        <Col md="6">
                          <Label for="review">Last Name</Label>
                          <Field
                            name="lastName"
                            type="text"
                            className="form-control"
                          />
                          {errors.lastName && touched.lastName ? (
                            <div style={{ color: "red", marginTop: "-13px" }}>
                              {errors.lastName}
                            </div>
                          ) : null}
                        </Col>
                      </Row>
                      <Row>
                        <Col md="6">
                          <Label for="email">email</Label>
                          <Field
                            name="email"
                            type="email"
                            className="form-control"
                          />

                          {loginError && (
                            <div style={{ color: "red", marginBottom: "10px" }}>
                              {loginError}
                            </div>
                          )}
                        </Col>
                        <Col md="6">
                          <Label for="review">Password</Label>
                          <Field
                            name="password"
                            type="password"
                            className="form-control"
                          />

                          {errors.password && touched.password ? (
                            <div style={{ color: "red", marginBottom: "10px" }}>
                              {errors.password}
                            </div>
                          ) : null}
                        </Col>
                        <button className="btn btn-solid" type="submit">
                          create Account
                        </button>
                      </Row>
                    </Form>
                  )}
                </Formik>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </CommonLayout>
  );
};

export default Register;
