import React from 'react';
import Countdown from 'react-countdown-simple';


function Counter({faqRef }) {
   
  /*
  const deadLine = new Date(
    new Date().setHours(new Date().getHours() + 1)
  ).toISOString()
 */
  const deadLine = new Date('2024-04-27 00:00:00').toISOString()

  const renderer = ({ days, hours, minutes, seconds }) =>
  <div style={{color:"#FD8C6E"}}>{days} días {hours}h : {minutes}m : {seconds}s</div>

  return (
    <section className="counter-area counter-bg" style={{backgroundImage:"url('img/bg/counter_bg.jpg')"}}>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-8">
          <div className="counter-title text-center mb-65">
            <h6 className="sub-title">Cuenta regresiva</h6>
            <h2 className="title">Date prisa, aún hay tiempo</h2>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div ref={faqRef}></div>

          <div className="counter-item">
            <h2 className="count">
            
              <Countdown targetDate={deadLine} renderer={renderer} />
            
            </h2>
          </div>

        </div>
      </div>
    </div>
  </section>
  

  )
}

export default Counter;
