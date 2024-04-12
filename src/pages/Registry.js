import React from "react";

import  {InstagramLogin} from "@amraneze/react-instagram-login";

function Registry() {
  const responseInstagram = (response) => {
    console.log("eii");
    console.log(response);
  };

  const redirectUrl = 'https://landing.flagasamascotas.com/' // You can use ngrok to expose your localhost

  return (
    <main>
      <div align="center">
        <h3>Registry</h3>

        <InstagramLogin
          clientId="451501287304003"
          onSuccess={responseInstagram}
          onFailure={responseInstagram}
          redirectUri={redirectUrl}
          scope='user_profile'
         
        />
      </div>
    </main>
  );
}

export default Registry;
