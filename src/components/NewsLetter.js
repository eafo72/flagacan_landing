import React from "react";
function Newsletter(){
    return(
        <div className="newsletter-area pt-110 pb-110"> 
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="newsletter-wrap">
                <div className="newsletter-content">
                  <h2 className="title">Regístrate</h2>
                  <p><span>*</span> Obligatorio para poder participar.</p>
                </div>
                <div className="newsletter-form">
                  <form >
                    <input type="text" placeholder="Usuario de instagram" />
                    <input type="text" placeholder="Link de tu publicación" />
                    <button type="submit" className="btn">Registrarme</button>
                  </form>
                </div>
                <div className="newsletter-shape"><img src="img/images/newsletter_shape01.png" alt="" /></div>
                <div className="newsletter-shape shape-two"><img src="img/images/newsletter_shape02.png" alt="" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Newsletter