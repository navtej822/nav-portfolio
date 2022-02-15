import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import './Testimonial.css'
import lady from '../../../src/img/Testimonial/lady.png'
import aref from '../../../src/img/Testimonial/aref.png'
import toe from '../../../src/img/Testimonial/toe.png'
import aditya from '../../../src/img/Testimonial/aditya.png'
import shape from '../../../src/img/Testimonial/shape-bg.png'

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const options ={
        loop:true,
        margin:0,
        nav:true,
        animateIn:"bounceInRight",
        animateOut:"bounceOutRight",
        dots:true,
        autoplay:true,
        smartSpeed:1000,
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:1,
            },
            1000:{
                items:3,
            },
        }
    }

  return (
    <div>
      <ScreenHeading
        title={"Testimonial"}
        subHeading={"What my Work and Project Partners Have To Say About Me"}
      />
      <section className="testimonial-section" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel className="owl-carousel" id="testimonial-carousel" {...options}>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                        <i className="fa fa-quote-left"/>
                          I and Navtejinder worked on a project in cloud computing class. Navtejinder always delivered more than what he was supposed to. Would love to work again.
                      <i className="fa fa-quote-right"/>
                    </p>
                    <ul className="stars list-unstyled">
                        <li>
                            <i className="fa fa-star" />
                        </li>
                        <li>
                            <i className="fa fa-star" />
                        </li>
                        <li>
                            <i className="fa fa-star" />
                        </li>
                        <li>
                            <i className="fa fa-star-half-alt" />
                        </li>
                        <li>
                            <i className="fa fa-star" />
                        </li>
                    </ul>
                  </div>
                  <div className="client-info">
                      <img src={lady} alt = "no Internet Connection"></img>
                      <h5>S Moonnumackel</h5>
                      <p>Project Partner(UTA)</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                        <i className="fa fa-quote-left"/>
                      Me and Nav worked on an ADBMS project we created a map databse using spatial technologies. Nav always went out of his comfort zone and got things done.
                      <i className="fa fa-quote-right"/>
                    </p>
                    <ul className="stars list-unstyled">
                        <li>
                            <i className="fa fa-star" />
                        </li>
                        <li>
                            <i className="fa fa-star" />
                        </li>
                        <li>
                            <i className="fa fa-star" />
                        </li>
                        <li>
                            <i className="fa fa-star-half-alt" />
                        </li>
                        <li>
                            <i className="fa fa-star" />
                        </li>
                    </ul>
                  </div>
                  <div className="client-info">
                      <img src={aref} alt = "no Internet Connection"></img>
                      <h5>Aref Shiran</h5>
                      <p>Project Partner(UTA)</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                        <i className="fa fa-quote-left"/>
                          Navtej was an invaluable resourse for our team. We acheieved a lot as teammates. He is most professional, genuine and humble guy I have worked with.
                      <i className="fa fa-quote-right"/>
                    </p>
                    <ul className="stars list-unstyled">
                        <li>
                            <i className="fa fa-star" />
                        </li>
                        <li>
                            <i className="fa fa-star" />
                        </li>
                        <li>
                            <i className="fa fa-star" />
                        </li>
                        <li>
                            <i className="fa fa-star-half-alt" />
                        </li>
                        <li>
                            <i className="fa fa-star" />
                        </li>
                    </ul>
                  </div>
                  <div className="client-info">
                      <img src={aditya} alt = "no Internet Connection"></img>
                      <h5>Aditya Khatri</h5>
                      <p>Project Partner(UTA)</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                        <i className="fa fa-quote-left"/>
                      I was his teammate in data mining class. I highly recommend him because, he will always surprise you with his speed of grasping a concept.
                      <i className="fa fa-quote-right"/>
                    </p>
                    <ul className="stars list-unstyled">
                        <li>
                            <i className="fa fa-star" />
                        </li>
                        <li>
                            <i className="fa fa-star" />
                        </li>
                        <li>
                            <i className="fa fa-star" />
                        </li>
                        <li>
                            <i className="fa fa-star-half-alt" />
                        </li>
                        <li>
                            <i className="fa fa-star" />
                        </li>
                    </ul>
                  </div>
                  <div className="client-info">
                      <img src={toe} alt = "no Internet Connection"></img>
                      <h5>V K Pentakota</h5>
                      <p>Project Partner(UTA)</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                        <i className="fa fa-quote-left"/>
                          I was his team manager for the internship. He showed professionalism, punctuality and accountability. I highly recommend him. Good luck for future.
                      <i className="fa fa-quote-right"/>
                    </p>
                    <ul className="stars list-unstyled">
                        <li>
                            <i className="fa fa-star" />
                        </li>
                        <li>
                            <i className="fa fa-star" />
                        </li>
                        <li>
                            <i className="fa fa-star" />
                        </li>
                        <li>
                            <i className="fa fa-star-half-alt" />
                        </li>
                        <li>
                            <i className="fa fa-star" />
                        </li>
                    </ul>
                  </div>
                  <div className="client-info">
                      <img src={toe} alt = "no Internet Connection"></img>
                      <h5>Toe Arkar</h5>
                      <p>Team Manager</p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt = "image not responding"/>
      </div>
    </div>
  );
}
