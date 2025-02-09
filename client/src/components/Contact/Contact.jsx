import React, { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    msg: "",
  });

    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const [status, setStatus] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data",formData);

    emailjs.send(
      "service_wph8cpg", // Replace with your actual Service ID
        "template_ogd6yuo", // Replace with your actual Template ID
        {
            from_name: formData.userName,
            message: formData.msg,
            reply_to: formData.userEmail,
        },
        "k7_uk0BcRZMeQ7dTi" // Replace with your actual User ID  
    ).then(
        (response)=>{
            console.log("Success",response.status,response.text);
            setStatus("Message Sent Successfully!");
            setFormData({
                userName: "",
                userEmail: "",
                msg: "",
            },(error)=>{
                console.log(error);
                setStatus("Failed to send message! Please try again later!");
            }
        );
        }
    )

    }
  return (
    <>
      <div className="contact-form" id="Contact">
        <div className="w-left">
          <div className="heading">
            <span>Get in Touch </span>
            <span>Contact me</span>
            <div
              className="blur s-blur1"
              style={{ background: "#abf1ff94" }}
            ></div>
          </div>
        </div>
        <div className="w-right">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="userName"
              className="user"
              placeholder="Name"
              value={formData.userName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="userEmail"
              className="user"
              placeholder="Email"
              value={formData.userEmail}
              onChange={handleChange}
              required
            />
            <textarea
              name="msg"
              className="user"
              placeholder="Message"
              value={formData.msg}
              onChange={handleChange}
                required
            />
            <input type="submit" value="send" className="button" />
            {status && <p className="status-message">{status}</p>} {/*Success/Error message*/}
          </form>
          
        </div>
      </div>
    </>
  );
}

export default Contact;
