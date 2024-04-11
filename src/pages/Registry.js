import React from "react";

import  InstagramLogin from "@amraneze/react-instagram-login"

function Registry() {
  const responseInstagram = (response) => {
    console.log(response);
  };

  return (
    <main>
      <div align="center">
        <h3>Registry</h3>

        <InstagramLogin
          clientId="451501287304003"
          buttonText="Login"
          onSuccess={responseInstagram}
          onFailure={responseInstagram}
        />
      </div>
    </main>
  );
}

export default Registry;
