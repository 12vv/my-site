import React, { useState } from "react";

const Contact = ({ data }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  if (data) {
    var contactName = data.name;
    var street = data.address.street;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var contactEmail = data.email;
    var contactMessage = data.contactmessage;
  }

  const submitForm = () => {
    window.open(
      `mailto:${contactEmail}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(name)} (${encodeURIComponent(
        email
      )}): ${encodeURIComponent(message)}`
    );
  };

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>

        <div className="ten columns">
          <p className="lead">{contactMessage}</p>
        </div>
      </div>

      <div className="form-wrapper">
        <form id="form" name="emailform" onSubmit={submitForm} >
            <div className="form-input-grid">
              <div>
                <p className="form-text">Name*</p>
                <div className="form-input-wrapper flexbox-left">
                  <i className="uil uil-user"></i>
                  <input 
                    id="contactName"
                    name="contactName"
                    className="form-input" 
                    type="text" 
                    defaultValue=""
                    value={name}
                    placeholder="Name" 
                    onChange={(e) => setName(e.target.value)}
                     />
                </div>
              </div>
            <div>
            <p className="form-text">Email*</p>
            <div className="form-input-wrapper flexbox-left">
              <i className="uil uil-asterisk"></i>
              <input 
                className="form-input" 
                defaultValue=""
                value={email}
                id="contactEmail" 
                name="contactEmail" 
                type="text" 
                placeholder="Email" 
                onChange={(e) => setEmail(e.target.value)}
                 />
            </div>
          </div>
        </div>

    <div className="form-input-max">
      <p className="form-text">Message* (Max 500)</p>
      <div id="textarea" className="form-input-wrapper flexbox-left-start">
        <i className="uil uil-comment-dots"></i>
        <textarea className="form-input" id="message" name="message" placeholder="Your message" maxlength="500" aria-label="" required></textarea>
      </div>
     </div>

     <div>
     <div className="form-input-max flexbox-left">
                <button onClick={submitForm} type="submit" className="submit">
                  Submit
                </button>
              </div>
              </div>
   </form>
  </div>







      
    </section>
  );
};

export default Contact;
