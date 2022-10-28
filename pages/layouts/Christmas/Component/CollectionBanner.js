import React from "react";
import { Container, Row, Col, Media } from "reactstrap";

const Data = [
  {
    img: "/assets/images/christmas/sub-banner1.jpg",
    title: "Christmas",
    subTitle: "gift box",
    class: "p-left text-left",
  },
  {
    img: "/assets/images/christmas/sub-banner2.jpg",
    title: "go christmas",
    subTitle: "chocolate",
    class: "p-right text-right",
  },
];

const SubBanner = ({ img, title, subTitle, classes }) => {
  return (
    <Col md="6">
      <a href="#">
        <div className={`collection-banner christmas-banner  ${classes}`}>
          <div className="img-part">
            <Media
              src={img}
              className="img-fluid bg-img blur-up lazyload"
              alt=""
            />
          </div>
          <div className="contain-banner">
            <div>
              <h4>{title}</h4>
              <h2>{subTitle}</h2>
            </div>
          </div>
        </div>
      </a>
    </Col>
  );
};

const CollectionBanner = () => {
  return (
    <section className="pb-0 ratio_45">
      <Container>
        <Row className="row partition2">
          {Data.map((data, i) => {
            return (
              <SubBanner
                key={i}
                img={data.img}
                title={data.title}
                subTitle={data.subTitle}
                classes={data.class}
              />
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default CollectionBanner;
