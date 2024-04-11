import React from "react";

function Newsletter() {
  const client_id = "451501287304003";
  const redirect_uri = "https://landing.flagasamascotas.com/registry";
  const scope = "user_profile"; // Requested scope

  const authenticateWithInstagram = () => {
    // Construct the authorization URL
    const authUrl = `https://api.instagram.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&response_type=code`;

    // Redirect the user to the authorization URL
    window.location.href = authUrl;
  };

  return (
    <div id="registro" className="newsletter-area pt-110 pb-110">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="newsletter-wrap">
              <div className="newsletter-content">
                <h2 className="title">Regístrate</h2>
                <p>
                  <span>*</span> Obligatorio para poder participar.
                </p>
              </div>
              <div className="newsletter-form">
                <button
                  onClick={() => authenticateWithInstagram()}
                  className="btn"
                >
                  Registrarme
                </button>
              </div>
              <div className="newsletter-shape">
                <img src="img/images/newsletter_shape01.png" alt="" />
              </div>
              <div className="newsletter-shape shape-two">
                <img src="img/images/newsletter_shape02.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Newsletter;
