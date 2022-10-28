import React, { Fragment } from "react";
import Slider from "react-slick";
import { Container, Row, Col, Media } from "reactstrap";

const Banner = () => {
  return (
    <Fragment>
      <section id="tool-bg" className="p-0 height-85 tools_slider">
        <Slider className="slide-1 home-slider">
          <div>
            <div className="home text-center home49">
              <Container>
                <Row>
                  <Col>
                    <div className="slider-contain">
                      <div>
                        <h4>save 30%</h4>
                        <h1>electronic</h1>
                        <a href="!#" className="btn btn-solid">
                          shop now
                        </a>
                      </div>
                    </div>
                  </Col>
                </Row>
                <div className="tools-parts" id="tool-1">
                  <Media src={"/assets/images/tools/3.png"} className="img-fluid" alt="" />
                </div>
                <div className="tools-parts1" id="tool-2">
                  <Media src={"/assets/images/tools/4.png"} className="img-fluid" alt="" />
                </div>
              </Container>
            </div>
          </div>
          <div>
            <div className="home text-center tools-bg0 home50">
              <Container>
                <Row>
                  <Col>
                    <div className="slider-contain">
                      <div>
                        <h4>save upto 30%</h4>
                        <h1>headphone</h1>
                        <a
                          href="!#"
                          className="btn btn-outline btn-classic btn-solid"
                        >
                          shop now
                        </a>
                      </div>
                    </div>
                  </Col>
                </Row>
                <div className="tools-parts" id="tool-3">
                  <Media src={"/assets/images/tools/1.png"} className="img-fluid" alt="" />
                </div>
              </Container>
            </div>
          </div>
        </Slider>
      </section>
    </Fragment>
  );
};

export default Banner;
