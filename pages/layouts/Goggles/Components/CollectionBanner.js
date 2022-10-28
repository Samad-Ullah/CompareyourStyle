import React, { Fragment } from "react";
import { Container, Col, Row, Media } from "reactstrap";

const Data = [
  {
    img: "/assets/images/goggles/sub-banner.jpg",
    about: "glasses",
    offer: "10% off",
    link: "#",
    class: "p-left text-left",
  },
  {
    img: "/assets/images/goggles/sub-banner2.jpg",
    about: "lenses",
    offer: "10% off",
    link: "#",
    class: "p-left text-left",
  },
  {
    img: "/assets/images/goggles/sub-banner3.jpg",
    about: "vintage",
    offer: "50% off",
    link: "#",
    class: " p-lefts",
  },
];

const MasterCollectionBanner = ({ img, about, offer, link, classes }) => {
  return (
    <Col md="4">
      <a href={link}>
        <div className={`collection-banner ${classes}`}>
          <Media
            src={img}
            className="img-fluid blur-up lazyload bg-img"
            alt=""
          />
          <div className="contain-banner banner-3">
            <div>
              <h4>{offer}</h4>
              <h2>{about}</h2>
            </div>
          </div>
        </div>
      </a>
    </Col>
  );
};

const CollectionBanner = () => {
  return (
    <Fragment>
      <section className="section-b-space banner-goggles ratio2_1">
        <Container>
          <Row className="partition3">
            {Data.map((data, i) => {
              return (
                <MasterCollectionBanner
                  key={i}
                  img={data.img}
                  about={data.about}
                  link={data.link}
                  offer={data.offer}
                  classes={data.class}
                />
              );
            })}
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default CollectionBanner;
