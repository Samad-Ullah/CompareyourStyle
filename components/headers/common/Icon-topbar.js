import React, { Fragment, useContext } from "react";
import { Media, Container, Row, Col } from "reactstrap";
import CartContext from "../../../helpers/cart";
import Link from "next/link";
import Currency from "../common/currency";
import CartContainer from "../../containers/CartContainer";
import SearchOverlay from "./search-overlay";
const IconTopbar = () => {
  const context = useContext(CartContext);
  const openNav = () => {
    var openmylside = document.getElementById("mySidenav");
    if (openmylside) {
      openmylside.classList.add("open-side");
    }
  };

  const openSearch = () => {
    document.getElementById("search-overlay").style.display = "block";
  };

  const closeSearch = () => {
    document.getElementById("search-overlay").style.display = "none";
  };

  const cartList = context.state;
  const total = context.cartTotal;
  const symbol = "$";
  return (
    <Fragment>
      <div className="top-header">
        <Container>
          <Row className="main-menu">
            <Col sm="6">
              <div className="header-contact">
                <ul>
                  <li>Welcome to Our store Multikart</li>
                  <li>
                    <i className="fa fa-phone" aria-hidden="true"></i>Call Us:
                    123 - 456 - 7890
                  </li>
                </ul>
              </div>
              <div className="menu-left">
                <div className="navbar">
                  <a href={null} onClick={openNav}>
                    <div className="bar-style">
                      <i
                        className="fa fa-bars sidebar-bar"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </a>
                </div>
                <div className="brand-logo mobile-logo">
                  <a href={null}>
                    <Media
                      src={"/assets/images/icon/logo.png"}
                      className="img-fluid blur-up lazyload"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </Col>
            <Col sm="6">
              <div className="menu-right pull-right">
                <ul className="header-dropdown">
                  <li className="mobile-wishlist">
                    <Link href="/page/account/wishlist">
                      <a>
                        <i className="fa fa-heart" aria-hidden="true"></i>
                        <Media src={"/assets/images/icon/like.png"} alt="" />
                      </a>
                    </Link>
                  </li>
                  <li className="onhover-dropdown mobile-account">
                    <Media src={"/assets/images/icon/users.png"} alt="" />
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <ul className="onhover-show-div">
                      <li>
                        <Link href="/page/account/login">
                          <a data-lng="en">Login</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          <a data-lng="es">Logout</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div>
                  <div className="icon-nav">
                    <ul>
                      <li className="onhover-div mobile-search">
                        <div>
                          <Media
                            src={"/assets/images/icon/search.png"}
                            onClick={openSearch}
                            className="img-fluid"
                            alt=""
                          />
                          <i className="fa fa-search" onClick={openSearch}></i>
                        </div>
                      </li>
                      <Currency icon={"/assets/images/icon/setting.png"} />
                      {/*Header Cart Component */}
                      <CartContainer icon={"/assets/images/icon/shopping-cart.png"} />
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <SearchOverlay />
    </Fragment>
  );
};

export default IconTopbar;
