
import { React,  useEffect } from "react";

import axios from "axios"

import clienteAxios from "../config/axios";

import { toast } from 'sonner';

function Newsletter(){

  const mostrarMensaje = (mensaje) => {
    toast.error(mensaje);
  };

  const mostrarAviso = (mensaje) => {
    toast.success(mensaje);
  };

  const client_id = '451501287304003';
  const client_secret = "7253909d53e1ec5617c5e30de36cf4ce";
  const redirect_uri = 'https://landing.flagasamascotas.com';
  const scope = 'user_profile'; // Requested scope

  const authenticateWithInstagram = () => {
    // Construct the authorization URL
    const authUrl = `https://api.instagram.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&response_type=code`;

    // Redirect the user to the authorization URL
    window.location.href = authUrl;
}


const fetchUserProfile = async (code) => {
  try {
    const response = await axios.post(
      `https://api.instagram.com/oauth/access_token`,
      {
        client_id,
        client_secret,
        grant_type: 'authorization_code',
        redirect_uri,
        code: code,
      }
    );
    
    const { access_token } = response.data;

    // Fetch user profile using the access token
    const profileResponse = await axios.get(`https://graph.instagram.com/me?fields=id,username&access_token=${access_token}`);

    //info del usuario
    console.log(profileResponse.data);

  } catch (error) {
    console.error('Error fetching user profile:', error);
  }
};

const handleAuthCallback = () => {
  const code = new URLSearchParams(window.location.search).get('code');
  if (code) {
    fetchUserProfile(code);
  }
};


  // Check if the URL contains an authorization code on component mount
  useEffect(() => {
    handleAuthCallback();
  }, []);

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