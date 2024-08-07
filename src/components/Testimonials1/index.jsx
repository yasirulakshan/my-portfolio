/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import removeOverlay from "../../common/removeOverlay";
import parallaxie from "../../common/parallaxie";

class Testimonials1 extends React.Component {
  constructor(props) {
    super(props);
  }
  renderArrows = () => {
    return (
      <div className="arrows">
        <div
          onClick={() => this.slider.slickNext()}
          className="next cursor-pointer"
        >
          <span className="pe-7s-angle-right"></span>
        </div>
        <div
          onClick={() => this.slider.slickPrev()}
          className="prev cursor-pointer"
        >
          <span className="pe-7s-angle-left"></span>
        </div>
      </div>
    );
  };
  componentDidMount() {
    removeOverlay();
    parallaxie('.testimonials.bg-img.parallaxie');
  }
  render() {
    return (
      <section
        className={`testimonials section-padding ${this.props.subBgLftstl ? "sub-bg lftstl" : ""} ${this.props.withBG ? "bg-img" : ""} ${this.props.parallaxie ? "parallaxie" : ""} ${!this.props.overlay ? "noOverlay" : ""}`}
        style={{
          backgroundImage: `${this.props.withBG && !this.props.imgSrc
            ? "url(./img/slid/3.jpg)"
            : this.props.imgSrc
              ? `url(${this.props.imgSrc})`
              : "none"
            }`,
        }}
        data-overlay-dark={`${this.props.overlay ? "9" : "0"}`}
      >
        <div className="container position-re">
          <div className="sec-head custom-font text-center">
            <h6 className="wow fadeIn" data-wow-delay=".5s">
              What People Says?
            </h6>
            <Split>
              <h3 className="wow words chars splitting" data-splitting>
                Testimonials.
              </h3>
            </Split>
            <span className="tbg">Testimonials</span>
          </div>
          <div
            className="row justify-content-center wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="col-lg-8">
              <Slider
                className="slic-item"
                {...{
                  ref: (c) => (this.slider = c),
                  dots: true,
                  infinite: true,
                  arrows: true,
                  autoplay: true,
                  rows: 1,
                  slidesToScroll: 1,
                  slidesToShow: 1,
                }}
              >
                <div className="item">
                  <p>
                    Yasiru  worked with me for IEEE Young Proffessionals Sri Lanka Section Y2NPro Project 2021 as a Member Of Design Team.He is a very Creative Person with hardworking & dedication. He is having experience on ui & ux design ,proposal design & poster design etc .I highly recomending Yasiru as an excelent Team Player .
                  </p>
                  <div className="info">
                    <div className="cont">
                      <div className="author">
                        {this.props.subBgLftstl ? (
                          <>
                            <div className="lxleft">
                              <div className="img">
                                <img src="./kaumudi.jpeg" alt="" />
                              </div>
                            </div>
                            <div className="fxright">
                              <h6 className="author-name custom-font">
                                Kaumudi Gunatilaka
                              </h6>
                              <span className="author-details">
                                Editor-IEEE Computer Society Sri Lanka
                              </span>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="img">
                              <img src="./img/clients/1.jpg" alt="" />
                            </div>
                            <h6 className="author-name custom-font">
                              Alex Regelman
                            </h6>
                            <span className="author-details">
                              Co-founder, Colabrio
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <p>
                    Skilled and Diligent work. Attentive to detail. Hihgly responsive. Woderful Job. HIghly, highly recommended!
                  </p>
                  <div className="info">
                    <div className="cont">
                      <div className="author">
                        {this.props.subBgLftstl ? (
                          <>
                            <div className="lxleft">
                              <div className="img">
                                <img src="./eramuscromwell.webp" alt="" />
                              </div>
                            </div>
                            <div className="fxright">
                              <h6 className="author-name custom-font">
                                Erasmus Cromwell
                              </h6>
                              <span className="author-details">
                                Fiverr Client (USA)
                              </span>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="img">
                              <img src="./img/clients/1.jpg" alt="" />
                            </div>
                            <h6 className="author-name custom-font">
                              Alex Regelman
                            </h6>
                            <span className="author-details">
                              Co-founder, Colabrio
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <p>
                    Designer was extremely responsive and eager to make changes when necessary. He delivered a clean, minimal, and modern design.
                  </p>
                  <div className="info">
                    <div className="cont">
                      <div className="author">
                        {this.props.subBgLftstl ? (
                          <>
                            <div className="lxleft">
                              <div className="img">
                                <img src="./jiyokim.webp" alt="" />
                              </div>
                            </div>
                            <div className="fxright">
                              <h6 className="author-name custom-font">
                                Jiyoon Kim
                              </h6>
                              <span className="author-details">
                                Fiverr Client (South Korea)
                              </span>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="img">
                              <img src="./img/clients/1.jpg" alt="" />
                            </div>
                            <h6 className="author-name custom-font">
                              Alex Regelman
                            </h6>
                            <span className="author-details">
                              Co-founder, Colabrio
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <p>
                    He is awesome! Was finished in 1/2 the time and did exceptional work. Highly recommend.
                  </p>
                  <div className="info">
                    <div className="cont">
                      <div className="author">
                        {this.props.subBgLftstl ? (
                          <>
                            <div className="lxleft">
                              <div className="img">
                                <img src="./jeffelvin.webp" alt="" />
                              </div>
                            </div>
                            <div className="fxright">
                              <h6 className="author-name custom-font">
                                Jeff Elvin
                              </h6>
                              <span className="author-details">
                                Fiverr Client (USA)
                              </span>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="img">
                              <img src="./img/clients/1.jpg" alt="" />
                            </div>
                            <h6 className="author-name custom-font">
                              Alex Regelman
                            </h6>
                            <span className="author-details">
                              Co-founder, Colabrio
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          {this.renderArrows()}
        </div>
      </section>
    );
  }
}

export default Testimonials1;
