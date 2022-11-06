import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import firebase from "../../../config/base";
import { useRouter } from "next/router";
import { isAuthenticated } from "../../../utils";

const TopBarDark = ({ topClass, fluid }) => {
  const router = useRouter();
  const token = isAuthenticated();
  console.log(token);
  const firebaseLogout = () => {
    firebase.auth().signOut();
    router.push("/page/account/login-auth");
  };

  const logoutHandler = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
    }
    router.push("/");
  };
  return (
    <div className={topClass}>
      <Container fluid={fluid}>
        <Row>
          <Col lg="6">
            <div className="header-contact">
              <ul>
                <li>Welcome to Our store</li>
                {/* <li>
                  <i className="fa fa-phone" aria-hidden="true"></i>Call Us: 123
                  - 456 - 7890
                </li> */}
              </ul>
            </div>
          </Col>
          <Col lg="6" className="text-right">
            <ul className="header-dropdown">
              <li className="mobile-wishlist">
                <Link
                  href={
                    token
                      ? "/page/account/wishlist"
                      : "/page/account/login-auth"
                  }
                >
                  <a>
                    <i className="fa fa-heart" aria-hidden="true"></i> wishlist
                  </a>
                </Link>
              </li>
              <li className="onhover-dropdown mobile-account">
                <i className="fa fa-user" aria-hidden="true"></i> My Account
                <ul className="onhover-show-div">
                  {!token && (
                    <>
                      <li>
                        <Link href={`/page/account/login-auth`}>
                          <a>Login</a>
                        </Link>
                      </li>
                      <li>
                        <Link href={`/page/account/register`}>
                          <a>Register</a>
                        </Link>
                      </li>
                    </>
                  )}
                  {/* () => firebaseLogout() */}
                  {token && (
                    <li onClick={logoutHandler}>
                      <a>Logout</a>
                    </li>
                  )}
                </ul>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBarDark;
