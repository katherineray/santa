import React from "react";
import moment from "moment";
// 


function Countdown(props){
    return(
       <section
        className="countdown-section"
        style={{ backgroundImage: 'url("assets/img/blurredlights.jpg")', backgroundPosition: 'left', backgroundSize: 'cover', filter: "'contrast','102%'" }}
      >
        <h1 style={{ backgroundColor: 'rgb(160, 0, 0)', fontFamily: "'Finger Paint', 'cursive'" }}>
          Santa Arrives In
      </h1>
        <div className="container">
          <div
            className="row big-countdown"
            data-countdown="12/25/2019 00:00:00"
          >
            <div className="col-6 col-sm-3" style={{ backgroundColor: 'rgb(0, 0, 0)' }}>
              <span
                className="number-days"
                style={{ fontFamily: "'Finger Paint', 'cursive'" }}
              >
                {-moment().diff(props.date+"/" + moment().year(), "days")}
            </span>
              <span
                className="txt-countdown"
                style={{ fontFamily: "'Finger Paint', 'cursive'" }}
              >
                days{" "}
              </span>
            </div>
            <div
              className="col-6 col-sm-3"
              style={{ opacity: '1', backgroundColor: 'rgb(0, 0, 0)' }}
            >
              <span
                className="number-hours"
                style={{ fontFamily: "'Finger Paint', 'cursive'" }}
              >
            {-moment().diff(props.date+"/" + moment().year(), "hours")%24}
            </span>
              <span
                className="txt-countdown"
                style={{ fontFamily: "'Finger Paint', 'cursive'" }}
              >
                hours{" "}
              </span>
            </div>
            <div className="col-6 col-sm-3" style={{ backgroundColor: 'rgb(0, 0, 0)' }}>
              <span
                className="number-minutes"
                style={{ fontFamily: "'Finger Paint', 'cursive'" }}
              >
            {-moment().diff(props.date+"/" + moment().year(), "minutes")%60}
            </span>
              <span
                className="txt-countdown"
                style={{ fontFamily: "'Finger Paint', 'cursive'" }}
              >
                minutes{" "}
              </span>
            </div>
            <div className="col-6 col-sm-3" style={{ backgroundColor: 'rgb(0, 0, 0)' }}>
              <span
                className="number-seconds"
                style={{ fontFamily: "'Finger Paint', 'cursive'" }}
              >
            {-moment().diff(props.date+"/" + moment().year(), "seconds")%60}
            </span>
              <span
                className="txt-countdown"
                style={{ fontFamily: "'Finger Paint', 'cursive'" }}
              >
                seconds{" "}
              </span>
            </div>
            <div className="col countdown-header">

            </div>
          </div>
        </div>
      </section>
    );
}

export default Countdown