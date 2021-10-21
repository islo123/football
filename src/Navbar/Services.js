import React from "react"
import img from "./football-kuva.jpg"
import img1 from "./football.jpg"

const Services = function (){
    return (
        <div>
             <div className="services-flex">
                <div className="services-div">
                    <div className="services-single-div"><p>AZVA Football Agency {"&"} Consulting</p></div>
                    <h3>Representation agreement</h3>
                    <p>With professional players, we sign an agreement and help with negotiations process with the club and to plan the    next step in his/her career.
                    </p>
                </div>
                <div className="services-div">
                    <img src={img} alt="Kuva"/>
                    <h3>Training programs</h3>
                    <p>1on1 Coaching, Nutrition plans, Individual football training programs Strenght and Power workout programs</p>
                </div>
                <div className="services-div">
                    <img src={img1} alt="Kuva"/>
                    <h3>Professional CV {"&"} Highlight videos</h3>
                    <p>Make Professional CV and Highlight videos, to make easier to get in touch with pro level clubs and scouts.</p>
                </div>
            </div>
        </div>
    )
}

export default Services;