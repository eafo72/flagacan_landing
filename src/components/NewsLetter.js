import React from "react";

import clienteAxios from "../config/axios";

import { toast } from 'sonner';

function Newsletter(){

  const mostrarMensaje = (mensaje) => {
    toast.error(mensaje);
  };

  const mostrarAviso = (mensaje) => {
    toast.success(mensaje);
  };


  const authenticateWithInstagram = () => {
    // Replace with your own client ID and redirect URI
    const clientId = '451501287304003';
    const redirectUri = 'https://landing.flagasamascotas.com/success';
    const scope = 'user_profile'; // Requested scope

    // Construct the authorization URL
    const authUrl = `https://api.instagram.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code`;

    // Redirect the user to the authorization URL
    window.location.href = authUrl;
}

  const sendData = async () => {
    try {
      const res = await clienteAxios.get(`/registrar.php`);
      console.log(res)
      
      /*
      setTitle(res.data.single.title);
      setWords(res.data.single.words);
      setDescription(res.data.single.description);
      */



      mostrarAviso("¡FELICIDADES!");

      
      
      
    } catch (error) {
      mostrarMensaje(error);
      console.log(error);
    }
  };

    return(
        <div id="registro" className="newsletter-area pt-110 pb-110"> 
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="newsletter-wrap">
                <div className="newsletter-content">
                  <h2 className="title">Regístrate</h2>
                  <p><span>*</span> Obligatorio para poder participar.</p>
                </div>
                <div className="newsletter-form">
                    <button onClick={() => authenticateWithInstagram()} className="btn">Registrarme</button>
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