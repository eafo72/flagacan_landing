import { React, useState } from "react";

import axios from "axios";

import { toast } from "sonner";

function Newsletter() {
 

  const mostrarMensaje = (mensaje) => {
    toast.error(mensaje);
  };

  const mostrarAviso = (mensaje) => {
    toast.success(mensaje);
  };

  const [user, setUser] = useState();
  const [email, setEmail] = useState();

  const sendData = async () => {
    if(user === null || user === undefined){
      mostrarMensaje("Debes escribir tu usuario de instagram");
    }else if(email === null || email === undefined){
      mostrarMensaje("Debes escribir tu correo");
    }else{

      //console.log(user)
      //console.log(email)

      try {
      
        //const response = await axios.post("https://api.mellfashionboutique.com/instagram/adduser", {user,email});
        const response = await axios.post("http://localhost:4000/instagram/adduser", {user,email});
        //console.log(response);
        mostrarAviso("¡Felicidades! has quedado registrado, te deseamos mucha suerte");  
  
        
      } catch (error) {
        console.log(error);
        mostrarMensaje(error.response.data.msg);
      }

      

    }
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
              
                <input type="text"  placeholder="Escribe tu usuario de instagram.." onChange={(e) => setUser(e.target.value)} /> 
                <input type="email" placeholder="Escribe tu correo..." onChange={(e) => setEmail(e.target.value)}/> 
                <button
                  onClick={() => sendData()}
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
