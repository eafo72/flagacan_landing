import React,{ useEffect } from 'react';
import 'magnific-popup';
import $ from 'jquery';
import {Link} from 'react-router-dom'



function Faq({ afterElment,registerRef }) {
  useEffect(()=>{


     /* magnificPopup video view */
    $('.popup-video').magnificPopup({
      type: 'iframe'
    });

  },[])

  
  return (

    <section  id="faq" className={afterElment + " faq-bg"}>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-7 col-lg-9">
          <div className="section-title text-center mb-65">
            <div className="section-icon"><img src="img/icon/pawprint.png" alt="" /></div>
            <h5 className="sub-title">Bases del concurso</h5>
            {/*
            <h2 className="title">Most Popular Dog Breed</h2>
            <p>The best overall dog DNA test is Embark Breed &amp; Health Kit (view at Chewy), which provides you with a breed brwn and information Most dogs</p>
            */}
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-6">
          
          <div className="faq-img-wrap">

            <img src="img/images/bases.png" className="img-frame" alt="" />
            
          </div>
          
        </div>
        <div className="col-lg-6">
          <div className="faq-wrapper">
            {/*
            <div className="section-title mb-35">
              <h5 className="sub-title">FAQ Question</h5>
              <h2 className="title">History &amp; Family Adoption</h2>
            </div>
            */}
            <div className="accordion" id="accordionExample">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h2 className="mb-0">
                    <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    ¿Cómo Participar? 
                    </button>
                  </h2>
                </div>
                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                  <div className="card-body">
                  (Importante realizar los siguientes pasos)<br/>
                  <ul style={{listStyle:"none"}}>
                    <li>1. Vivir en la zona metropolitana de Guadalajara (Jalisco).</li>
                    <li>2. Síguenos en Instagram y Facebook: @Flagacan</li>
                    <li>3. Sube una foto de tu perrito a tu perfil de  Instagram, etiqueta a @Flagacan y usa el hashtag MmomentosFlagacan.</li>
                    <li>4. ¡Listo! Estaremos anunciando al ganador en la página <br/>
                        https://landing.flagasamascotas.com/
                    </li>
                  </ul>

                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwo">
                  <div ref={registerRef}></div>
                  <h2 className="mb-0">
                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    ¿Cómo Ganar?
                    </button>
                  </h2>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                  <div className="card-body">
                  Invita a tus amigos, familiares y seguidores a votar por tu foto. ¡La foto con el mayor número de likes al 22 de Abril será la ganadora!.<br/>
                  El día 23 anunciaremos al ganador en nuestras redes y la página del concurso.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  
                  <h2 className="mb-0">
                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    🏅 Premio
                    </button>
                  </h2>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                  <div className="card-body">
                  El dueño del perro cuya foto haya recibido la mayor cantidad de likes ganará alimento Flagacan equivalente a 3 meses para su querido peludo.<br/>
                  📅 Fecha de Inicio: 12 de Abril.<br/>
                  📅 Fecha de Finalización: 22 de Abril se cierra el conteo y el 23 se anuncia el ganador<br/>
                  ¡No dejes pasar esta oportunidad de hacer brillar a tu peludo amigo con Flagacan!.<br/>
                  🌟 #Concurso #FlagacanGuadalajara #AlimentoPremium
                  </div>
                  
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="faq-shape"><img src="img/images/faq_shape.png" alt="" /></div>
  </section>
  )
}

export default Faq;
