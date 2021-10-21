import React, {useState } from "react"
import emailjs from 'emailjs-com'
      




export default function AboutUs() {
    const [viesti, setViesti]=useState("")
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_hhg34kr', 'template_xf50oov', e.target, 'user_TqdaPzbQrXDIGSV1udotP')
        .then((result) => {
            console.log(result.text);
            setViesti("Viesti lähetetty")
         
            
        }, (error) => {
            console.log(error.text);
            setViesti("Viesti ei lähetetty")
        })
        
        e.target.reset()
   
        
    }

  return (
    <div className="form-center">
        <form className="contact-form" onSubmit={sendEmail}>
        
        <label>Nimi</label>
        <br/>
        <input required type="text" name="nimi" />
        <br/>
        <br/>
        <label>Sähköpostiosoite</label>
        <br/>
        <input required type="email" name="email" />
        <br/>
        <br/>
        <label>Viesti</label>
        <br/>
        <textarea required name="viesti" />
        <br/>
        <button type="submit">Lähettää</button>
        <p>{viesti}</p>
        </form>
    </div>
  );
}
    


