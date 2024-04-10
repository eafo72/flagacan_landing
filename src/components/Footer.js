import React from "react";
import {Link} from 'react-router-dom'


function Footer() {
  return (
    <footer>
    <div className="footer-top-area footer-bg">
      <div className="container">
        <div className="row justify-content-between">


         



          <div className="col-12">
            <div align="center" className="footer-widget">
              <h4 className="fw-title">Fotos participantes</h4>
              <div style={{padding:"60px 0"}}>
                <h4>Aquí anunciaremos al ganador</h4>
              </div>  
            </div>
          </div>


        </div>
      </div>
      <div className="footer-shape"><img src="img/images/footer_shape01.png" alt="" /></div>
      <div className="footer-shape shape-two"><img src="img/images/footer_shape02.png" alt="" /></div>
    </div>
    <div className="copyright-area">
      <div className="container">
        <div className="row">

          <div className="col-md-7">
            <div className="copyright-text">
              <p>Copyright © 2024 Flagasa. Todos los derechos reservados.</p>
            </div>
          </div>
          <div className="col-md-5">
              <ul className="header-top-social">
                <li style={{color:"#d5d5d5"}} className="follow">Siguenos en :</li>
                <li><a href="https://www.facebook.com/profile.php?id=61555959194964&mibextid=ZbWKwL" target="_blank"><i style={{color:"#d5d5d5"}} className="fab fa-facebook-f" /></a></li>
                <li><a href="https://www.instagram.com/flagacan" target="_blank"><i style={{color:"#d5d5d5"}} className="fab fa-instagram" /></a></li>
                <li><a href="https://www.tiktok.com/@flagacan" target="_blank"><i style={{color:"#d5d5d5"}} className="fab fa-tiktok" /></a></li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>

  )
}

export default Footer;
