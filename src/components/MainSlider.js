import React from "react";
import Slider from 'react-slick';


function MainSlider({registerRef, faqRef}) {
    const settings = {
        autoplay: false,
		autoplaySpeed: 10000,
		dots: false,
		fade: true,
		arrows: true,
		
		responsive: [
			{ breakpoint: 767, settings: { dots: false, arrows: false } }
		]
    }

  return (
    <section className="slider-area">
    <Slider className="slider-active" {...settings}>
      <div>
        <div className="single-slider slider-bg d-flex align-items-center slide2" >
          <div className="container custom-container">
            <div className="row">
              <div className="col-xl-5 col-lg-7 col-md-10">
                <div className="slider-content">
                  <div className="slider-title">
                    <h2 className="title" data-animation="fadeInUpBig" data-delay=".2s" data-duration="1.2s">¡Momentos<span>Flagacan</span>!</h2>
                  </div>
                  <div className="slider-desc">
                    <p className="desc" data-animation="fadeInUpBig" data-delay=".4s" data-duration="1.2s">🏆 ¡Atención zona metropolitana de Guadalajara!</p>
                    <p className="desc" data-animation="fadeInUpBig" data-delay=".4s" data-duration="1.2s">Participa y gana un bulto de 25 kg de alimento Premium Flagacan (Adultos)</p>
                  </div>
                  {/*
                  <button style={{marginBottom:"10px"}} className="btn" data-animation="fadeInUpBig" data-delay=".6s" data-duration="1.2s"
                    onClick={() => {
                      registerRef.current?.scrollIntoView({
                        behavior: 'smooth'
                      });
                    }}               
                  >Regístrate <img src="img/icon/w_pawprint.png" alt="" /></button>
                  <br/>
                  */}
                  <button  className="btn" data-animation="fadeInUpBig" data-delay=".6s" data-duration="1.2s"
                    onClick={() => {
                      faqRef.current?.scrollIntoView({
                        behavior: 'smooth'
                      });
                    }}               
                  >Bases del concurso <img src="img/icon/w_pawprint.png" alt="" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="single-slider slider-bg d-flex align-items-center slide1" >
          <div className="container custom-container">
            <div className="row">
              <div className="col-xl-5 col-lg-7 col-md-10">
                <div className="slider-content">
                  <div className="slider-title">
                    <h2 className="title" data-animation="fadeInUpBig" data-delay=".2s" data-duration="1.2s">¡Momentos<span>Flagacan</span>!</h2>
                  </div>
                  <div className="slider-desc">
                    <p className="desc" data-animation="fadeInUpBig" data-delay=".4s" data-duration="1.2s">🏆 ¡Atención zona metropolitana de Guadalajara!</p>
                    <p className="desc" data-animation="fadeInUpBig" data-delay=".4s" data-duration="1.2s">Participa y gana un bulto de 25 kg de alimento Premium Flagacan (Adultos)</p>
                  </div>

                  {/*
                  <button style={{marginBottom:"10px"}} className="btn" data-animation="fadeInUpBig" data-delay=".6s" data-duration="1.2s"
                    onClick={() => {
                      registerRef.current?.scrollIntoView({
                        behavior: 'smooth'
                      });
                    }}               
                  >Regístrate <img src="img/icon/w_pawprint.png" alt="" /></button>
                  <br/>
                  */}
                  <button  className="btn" data-animation="fadeInUpBig" data-delay=".6s" data-duration="1.2s"
                    onClick={() => {
                      faqRef.current?.scrollIntoView({
                        behavior: 'smooth'
                      });
                    }}               
                  >Bases del concurso <img src="img/icon/w_pawprint.png" alt="" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </Slider>
    <div className="slider-shape"><img src="img/slider/slider_shape02.png" alt="" /></div>
    <div className="slider-shape shape-two"><img src="img/slider/slider_shape01.png" alt="" /></div>
  </section>
  )
}

export default MainSlider;
