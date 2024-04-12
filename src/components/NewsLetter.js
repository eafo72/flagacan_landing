import { React, useState } from "react";

import { Link } from "react-router-dom";

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
  const [agree, setAgree] = useState(false);

  const sendData = async () => {
    if(user === null || user === undefined){
      mostrarMensaje("Debes escribir tu usuario de instagram");
    }else if(email === null || email === undefined){
      mostrarMensaje("Debes escribir tu correo");
    }else if(agree === false) {
      mostrarMensaje("Debes aceptar los terminos y condiciones");    
    }else{

      //console.log(user)
      //console.log(email)

      try {
      
        const response = await axios.post("https://api.mellfashionboutique.com/instagram/adduser", {user,email});
        //const response = await axios.post("http://localhost:4000/instagram/adduser", {user,email});
        //console.log(response);
        setUser(null);
        setEmail(null);
        document.getElementById("user").value = "";
        document.getElementById("email").value = "";
        mostrarAviso("¡Felicidades! has quedado registrado, te deseamos mucha suerte");  
  
        
      } catch (error) {
        console.log(error);
        mostrarMensaje(error.response.data.msg);
      }

      

    }
  };

  const checkboxHandler = () => {
    // if agree === true, it will be set to false
    // if agree === false, it will be set to true
    setAgree(!agree);
    // Don't miss the exclamation mark
  }


  return (
    <div   id="registro" className="newsletter-area pt-110 pb-110">
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
              
                <input id="user" type="text"  placeholder="Usuario de instagram.."  onChange={(e) => setUser(e.target.value)} /> 
                <input id="email" type="email" placeholder="Correo..."  onChange={(e) => setEmail(e.target.value)}/> 

                <div>
                   <input
                      onChange={checkboxHandler}
                      id="agree"
                      type="checkbox"
                      style={{marginTop:"30px"}}
                      /> 
                      <label style={{marginLeft:"10px",fontWeight: "800", color:"white"}} htmlFor="agree"> Acepto los <Link to="/terminos" target="_blank" style={{color:"#0a1e6d"}}>términos y condiciones</Link> y el <Link to="/aviso" target="_blank" style={{color:"#0a1e6d"}}>aviso de privacidad</Link> </label>
                </div>
                <div>
                  <button
                    onClick={() => sendData()}
                    className="btn"
                  >
                    Registrarme
                  </button>
                </div>
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
