import React from "react";
import { Media } from "reactstrap";
import MasterSocial from "./master_social";

const PaymentData = [
  { img: "/assets/images/icon/visa.png", link: "#" },
  { img: "/assets/images/icon/mastercard.png", link: "#" },
  { img: "/assets/images/icon/paypal.png", link: "#" },
  { img: "/assets/images/icon/american-express.png", link: "#" },
  { img: "/assets/images/icon/discover.png", link: "#" },
];

const Detail = ({ item }) => {
  return (
    <div className="product-right product-description-box">
      <h2>{item.title}</h2>
      <div className="border-product">
        <h6 className="product-title">product details</h6>
        <p>{item.description}</p>
      </div>
      <div className="single-product-tables border-product detail-section">
        <table>
          <tbody>
            <tr>
              <td>Febric:</td>
              <td>Chiffon</td>
            </tr>
            <tr>
              <td>Color:</td>
              <td>Red</td>
            </tr>
            <tr>
              <td>Material:</td>
              <td>Crepe printed</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="border-product">
        <h6 className="product-title">share it</h6>
        <div className="product-icon">
          <MasterSocial />
          <form className="d-inline-block">
            <button className="wishlist-btn">
              <i className="fa fa-heart"></i>
              <span className="title-font">Add To WishList</span>
            </button>
          </form>
        </div>
      </div>
      <div className="border-product">
        <h6 className="product-title">100% SECURE PAYMENT</h6>
        <div className="payment-card-bottom">
          <ul>
            {PaymentData.map((data, index) => {
              return (
                <li key={index}>
                  <a href={data.link}>
                    <Media src={data.img} alt="" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Detail;
