import React, { Fragment } from "react";
import Slider from "react-slick";
import { Slider4 } from "../../../../services/script";
import { Media, Container, Col, Row } from "reactstrap";

const Data = [
  {
    img: "/assets/images/tools/category/1.jpg",
    title: "auto parts",
    features: [
      { title: "d1 milano", link: "#" },
      { title: "damaskeening", link: "#" },
      { title: "diving watch", link: "#" },
      { title: "dollar watch", link: "#" },
    ],
    link: "#",
  },
  {
    img: "/assets/images/tools/category/2.jpg",
    title: "break & steering",
    features: [
      { title: "shock-resistant watch", link: "#" },
      { title: "skeleton watch", link: "#" },
      { title: "slow watch", link: "#" },
      { title: "solar-powered watch", link: "#" },
    ],
    link: "#",
  },
  {
    img: "/assets/images/tools/category/3.jpg",
    title: "engine & drivetrain",
    features: [
      { title: "watchmaking conglomarates", link: "#" },
      { title: "breitling SA", link: "#" },
      { title: "casio watch", link: "#" },
      { title: "citizen watch", link: "#" },
    ],
    link: "#",
  },
  {
    img: "/assets/images/tools/category/4.jpg",
    title: "exterior accessories",
    features: [
      { title: "Manufacture D'horlogerie", link: "#" },
      { title: "mechanical watche", link: "#" },
      { title: "microbrand watches", link: "#" },
      { title: "MIL-W-46374", link: "#" },
    ],
    link: "#",
  },
  {
    img: "/assets/images/tools/category/5.jpg",
    title: "other parts",
    features: [
      { title: "d1 milano", link: "#" },
      { title: "damaskeening", link: "#" },
      { title: "diving watch", link: "#" },
      { title: "dollar watch", link: "#" },
    ],
    link: "#",
  },
];

const MasterCategory = ({ img, title, features, link }) => {
  return (
    <div>
      <div className="category-wrapper pt-0">
        <div>
          <div>
            <Media
              src={img}
              className="img-fluid blur-up lazyload bg-img"
              alt=""
            />
          </div>
          <h4>{title}</h4>
          <ul className="category-link">
            {features.map((data, i) => {
              return (
                <li key={i}>
                  <a href={data.link}>{data.title}</a>
                </li>
              );
            })}
          </ul>
          <a href={link} className="btn btn-classic btn-outline">
            view more
          </a>
        </div>
      </div>
    </div>
  );
};

const Category = () => {
  return (
    <Fragment>
      <section className="pt-0 category-tools ratio3_2">
        <Container>
          <Row>
            <Col>
              <Slider {...Slider4} className="slide-4 category-m no-arrow">
                {Data.map((data, i) => {
                  return (
                    <MasterCategory
                      key={i}
                      img={data.img}
                      link={data.link}
                      title={data.title}
                      features={data.features}
                    />
                  );
                })}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Category;
