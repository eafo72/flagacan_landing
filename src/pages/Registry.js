import { React, useEffect } from "react";

import axios from "axios";

import clienteAxios from "../config/axios";

import { toast } from "sonner";

function Registry() {
  const client_id = "451501287304003";
  const client_secret = "7253909d53e1ec5617c5e30de36cf4ce";
  const redirect_uri = "https://landing.flagasamascotas.com/registry";
  
  const mostrarMensaje = (mensaje) => {
    toast.error(mensaje);
  };

  const mostrarAviso = (mensaje) => {
    toast.success(mensaje);
  };

  const fetchUserProfile = async (code) => {
    try {
      const response = await axios.post(
        `https://api.instagram.com/oauth/access_token`,
        {
          client_id,
          client_secret,
          grant_type: "authorization_code",
          redirect_uri,
          code: code,
        }
      );

      const { access_token } = response.data;
	  console.log(access_token);

      // Fetch user profile using the access token
      const profileResponse = await axios.get(
        `https://graph.instagram.com/me?fields=id,username&access_token=${access_token}`
      );

      //info del usuario
      console.log(profileResponse.data);
    } catch (error) {
      console.error("Error fetching user profile:", error);
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

  const sendData = async () => {
    try {
      const res = await clienteAxios.get(`/registrar.php`);
      console.log(res);

      /*
			setTitle(res.data.single.title);
			setWords(res.data.single.words);
			setDescription(res.data.single.description);
			*/

      mostrarAviso("¡FELICIDADES! has quedado registrado.");
    } catch (error) {
      mostrarMensaje(error);
      console.log(error);
    }
  };

  return (
    <main>
      <div align="center">
        <h3>Registry</h3>
      </div>
    </main>
  );
}

export default Registry;
