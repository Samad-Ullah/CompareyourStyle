import React, { Fragment } from "react";
import { Container, Media, Row, Col } from "reactstrap";

const Data = [
  {
    img: "/assets/images/cat1.jpg",
    title: "men",
    link: "#",
  },
  {
    img: "/assets/images/cat2.jpg",
    title: "women",
    link: "#",
  },
  {
    img: "/assets/images/cat3.jpg",
    title: "kids",
    link: "#",
  },
];

const MasterCategory = ({ img, title, link }) => {
  return (
    <Col sm="4" className="border-padding">
      <div className="category-banner">
        <div>
          <Media
            src={img}
            className="img-fluid blur-up lazyload bg-img"
            alt=""
          />
        </div>
        <div className="category-box">
          <a href={link}>
            <h2>{title}</h2>
          </a>
        </div>
      </div>
    </Col>
  );
};

const CategoryTwo = () => (
  <Fragment>
    <section className="p-0 ratio2_1">
      <Container fluid={true}>
        <Row className="category-border">
          {Data.map((data, i) => {
            return <MasterCategory key={i} img={data.img} title={data.title} />;
          })}
        </Row>
      </Container>
    </section>
  </Fragment>
);

export default CategoryTwo;
