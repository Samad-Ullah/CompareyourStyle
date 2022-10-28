import React from "react";
import CommonLayout from "../../components/shop/common-layout";
import { Container, Media, Row, Col } from "reactstrap";

const MasterCollectionData = [
  {
    img: "/assets/images/collection/1.jpg",
    totalProducts: "(20 Products)",
    type: "fashion",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry....",
    link: "#",
    btn: "shop now !",
  },
  {
    img: "/assets/images/collection/3.jpg",
    totalProducts: "(20 Products)",
    type: "fashion",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry....",
    link: "#",
    btn: "shop now !",
  },
  {
    img: "/assets/images/collection/5.jpg",
    totalProducts: "(20 Products)",
    type: "fashion",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry....",
    link: "#",
    btn: "shop now !",
  },
  {
    img: "/assets/images/collection/6.jpg",
    totalProducts: "(20 Products)",
    type: "fashion",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry....",
    link: "#",
    btn: "shop now !",
  },
  {
    img: "/assets/images/collection/7.jpg",
    totalProducts: "(20 Products)",
    type: "fashion",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry....",
    link: "#",
    btn: "shop now !",
  },
  {
    img: "/assets/images/collection/8.jpg",
    totalProducts: "(20 Products)",
    type: "fashion",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry....",
    link: "#",
    btn: "shop now !",
  },
  {
    img: "/assets/images/collection/9.jpg",
    totalProducts: "(20 Products)",
    type: "fashion",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry....",
    link: "#",
    btn: "shop now !",
  },
  {
    img: "/assets/images/collection/11.jpg",
    totalProducts: "(20 Products)",
    type: "fashion",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry....",
    link: "#",
    btn: "shop now !",
  },
];

const MasterCollection = ({ img, totalProducts, type, about, link, btn }) => {
  return (
    <Col lg="3" md="6">
      <div className="collection-block">
        <div>
          <Media
            src={img}
            className="img-fluid blur-up lazyload bg-img"
            alt=""
          />
        </div>
        <div className="collection-content">
          <h4>{totalProducts}</h4>
          <h3>{type}</h3>
          <p>{about}</p>
          <a href={link} className="btn btn-outline">
            {btn}
          </a>
        </div>
      </div>
    </Col>
  );
};

const Collection = () => {
  return (
    <CommonLayout parent="home" title="collection">
      <section className="collection section-b-space ratio_square ">
        <Container>
          <Row className="partition-collection">
            {MasterCollectionData.slice(0, 4).map((data, i) => {
              return (
                <MasterCollection
                  key={i}
                  img={data.img}
                  totalProducts={data.totalProducts}
                  type={data.type}
                  about={data.about}
                  link={data.link}
                  btn={data.btn}
                />
              );
            })}
          </Row>
          <Row className="partition-collection section-t-space">
            {MasterCollectionData.slice(4, 8).map((data, i) => {
              return (
                <MasterCollection
                  key={i}
                  img={data.img}
                  totalProducts={data.totalProducts}
                  type={data.type}
                  about={data.about}
                  link={data.link}
                  btn={data.btn}
                />
              );
            })}
          </Row>
        </Container>
      </section>
    </CommonLayout>
  );
};

export default Collection;
