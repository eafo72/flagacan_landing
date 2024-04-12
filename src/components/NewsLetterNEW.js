import { React, useEffect } from "react";

import axios from "axios";

import clienteAxios from "../config/axios";

import { toast } from "sonner";

function Newsletter() {
  const client_id = "451501287304003";
  const client_secret = "7253909d53e1ec5617c5e30de36cf4ce";
  const redirect_uri = "https://landing.flagasamascotas.com/";
  const scope = "user_profile"; // Requested scope

  const mostrarMensaje = (mensaje) => {
    toast.error(mensaje);
  };

  const mostrarAviso = (mensaje) => {
    toast.success(mensaje);
  };

  const authenticateWithInstagram = () => {
    // Construct the authorization URL
    const authUrl = `https://api.instagram.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&response_type=code`;

    // Redirect the user to the authorization URL
    window.location.href = authUrl;
  };

  const fetchUserProfile = async (code) => {
    try {
      
      const response = await axios.post("https://api.mellfashionboutique.com/instagram/userinfo", {code});

      if(response.data.username == null || response.data.username == undefined){
        console.log(response);
        mostrarMensaje("Lo sentimos, hubo un error al intentar registrarte");
      }else{
        mostrarAviso("¡FELICIDADES! "+response.data.username+" has quedado registrado.");
      }  

      
    } catch (error) {
      console.error("Error fetching user profile:", error);
      mostrarMensaje(error);
    }
  };

  const handleAuthCallback = () => {
    const code = new URLSearchParams(window.location.search).get("code");
    if (code) {
      fetchUserProfile(code);
    }
  };

  // Check if the URL contains an authorization code on component mount
  useEffect(() => {
    handleAuthCallback();
  }, []);

  

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
