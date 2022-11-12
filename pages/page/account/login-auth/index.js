import React, { useState, useEffect } from "react";
import CommonLayout from "../../../../components/shop/common-layout";
import { Container, Row, Label, Input, Col } from "reactstrap";
import firebase, {
  googleProvider,
  facebookProvider,
} from "../../../../config/base";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { baseURL } from "../../../../config/url_enum";
import { authenticateJWT } from "../../../../utils";
import { Formik, Form, Field } from "formik";
import Swal from "sweetalert2";
import * as Yup from "yup";
import PostLoader from "../../../../components/common/PostLoader";
import Image from "next/image";

const Login = () => {
  const router = useRouter();
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);

  const loginHandler = (values) => {
    const { email, password } = values;
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      };
      setLoading(true);
      fetch(`${baseURL}/user/login`, requestOptions)
        .then((response) => response.json())
        .then((response) => {
          if (response?.data?.token) {
            authenticateJWT(response.data.token);
            setLoading(false);
            Swal.fire({
              title: "Yahoo!",
              text: "Sucessfully authenticated",
              icon: "success",
              showDenyButton: false,
            }),
              router.push("/page/account/wishlist");
          } else if (response?.message) {
            setLoginError(response.message);
            Swal.fire({
              title: "Error!",
              text: "Facing Issue on Account",
              icon: "error",
              showDenyButton: false,
            }),
              console.log(response.message);
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "transparent",
        }}
      >
        <Image
          src="/assets/loader/Loader.gif"
          width="100px"
          height="100px"
          alt="loader"
        />
      </div>
    );
  }

  const googleAuth = async () => {
    try {
      firebase
        .auth()
        .signInWithPopup(googleProvider)
        .then(function (result) {
          setName(result.user.displayName);
          setTimeout(() => {
            router.push(`/page/account/checkout`);
          }, 200);
        });
    } catch (error) {
      setTimeout(() => {
        toast.error(
          "Oppss.. The password is invalid or the user does not have a password."
        );
      }, 200);
    }
  };

  const facebookAuth = async () => {
    try {
      firebase
        .auth()
        .signInWithPopup(facebookProvider)
        .then(function (result) {
          setName(result.user.displayName);
          setTimeout(() => {
            router.push(`/page/account/checkout`);
          }, 200);
        });
    } catch (error) {
      setTimeout(() => {
        toast.error(
          "Oppss.. The password is invalid or the user does not have a password."
        );
      }, 200);
    }
  };
  const routerHandler = () => {
    router.push(`/page/account/register`);
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
  });

  return (
    <CommonLayout parent="home" title="login">
      <section className="login-page section-b-space">
        <Container>
          <Row>
            <Col lg="6">
              <h3>Login</h3>
              <div className="theme-card">
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={(values) => {
                    loginHandler(values);
                  }}
                >
                  {({ errors, touched }) => (
                    <Form className="theme-form">
                      <div className="form-group">
                        <Label for="email">Email</Label>
                        <Field
                          name="email"
                          type="email"
                          className="form-control"
                        />

                        {errors.email && touched.email ? (
                          <div style={{ color: "red" }}>{errors.email}</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <Label for="review">Password</Label>
                        <Field
                          name="password"
                          type="password"
                          className="form-control"
                        />
                        {loginError && (
                          <div style={{ color: "red" }}>{loginError}</div>
                        )}
                      </div>
                      <button className="btn btn-solid" type="submit">
                        Login
                      </button>
                      <div className="footer-social">
                        <ul>
                          <li onClick={facebookAuth}>
                            <i
                              className="fa fa-facebook"
                              aria-hidden="true"
                            ></i>
                          </li>
                          <li onClick={googleAuth}>
                            <a>
                              <i
                                className="fa fa-google-plus"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </Col>
            <Col lg="6" className="right-login">
              <h3>New Customer</h3>
              <div className="theme-card authentication-right">
                <h6 className="title-font">Create A Account</h6>
                <p>
                  Sign up for a free account at our store. Registration is quick
                  and easy. It allows you to be able to order from our shop. To
                  start shopping click register.
                </p>
                <button className="btn btn-solid" onClick={routerHandler}>
                  Create an Account
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </CommonLayout>
  );
};

export default Login;
