import React, {  useState }  from 'react';
import emailjs from '@emailjs/browser';
import Loading from '../Items/Loading';

const contactData = {
  phone: ["+7 977 773 8978"],
  email: ["aymartel@gmail.com"],
  location: "Ulitsa Profsoyuznaya, 115 корпус 2, Moskva, 117647",
};

function Contact() {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
const [loading, setloading] = useState(false)
  const submitHandler = (event) => {
    event.preventDefault();
    setloading(true)
    if (!formdata.name) {
      setError(true);
      setloading(false);
      setMessage("Name is required");
    } else if (!formdata.email) {
      setError(true);
      setloading(false);
      setMessage("Email is required");
    } else if (!formdata.subject) {
      setError(true);
      setloading(false);
      setMessage("Subject is required");
    } else if (!formdata.message) {
      setError(true);
      setloading(false);
      setMessage("Message is required");
    } else {
      emailjs.sendForm('service_yu70oyy', 'template_jd3dlw3', event.target, 'R6w9EuYAE4sxVuJS0')
      .then((result) => {
        setError(false);
        setloading(false);
        setMessage("You message has been sent!");
      }, (error) => {
        setError(true);
        setloading(false);
        setMessage("Your message has not been sent, please try again");
      });
    }
  };

  const handleChange = (event) => {
    setFormdata({
      ...formdata,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleAlerts = () => {
    if (error && message) {
      return <div className="alert alert-danger mt-4">{message}</div>;
    } else if (!error && message) {
      return <div className="alert alert-success mt-4">{message}</div>;
    } else {
      return null;
    }
  };

  return (
    <div className="row">
      <div className="col-md-4 mb-4 mb-md-0">
        <div className="contact-info mb-5">
          <i className="icon-phone"></i>
          <div className="details">
            <h5>Phone</h5>
            {contactData.phone.map((singlePhone, index) => (
              <span key={index}>{singlePhone}</span>
            ))}
          </div>
        </div>
        <div className="contact-info mb-5">
          <i className="icon-envelope"></i>
          <div className="details">
            <h5>Email address</h5>
            {contactData.email.map((singleEmail, index) => (
              <span key={index}>{singleEmail}</span>
            ))}
          </div>
        </div>
        <div className="contact-info">
          <i className="icon-location-pin"></i>
          <div className="details">
            <h5>Location</h5>
            <span>{contactData.location}</span>
          </div>
        </div>
      </div>

      <div className="col-md-8">
        <form className="contact-form" onSubmit={submitHandler}>
          <div className="row">
            <div className="column col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Your name"
                  onChange={handleChange}
                  value={formdata.name}
                />
              </div>
            </div>

            <div className="column col-md-6">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email address"
                  onChange={handleChange}
                  value={formdata.email}
                />
              </div>
            </div>

            <div className="column col-md-12">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  placeholder="Subject"
                  onChange={handleChange}
                  value={formdata.subject}
                />
              </div>
            </div>

            <div className="column col-md-12">
              <div className="form-group">
                <textarea
                  name="message"
                  className="form-control"
                  rows="5"
                  placeholder="Message"
                  onChange={handleChange}
                  value={formdata.message}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="row">
          <button
            type="submit"
            name="submit"
            value="Submit"
            className="btn btn-default"
          >
            <i className="icon-paper-plane"></i>Send Message
          </button>{loading?<Loading/>:null}
          </div>
          
        </form>
        {handleAlerts()}
      </div>
    </div>
  );
}

export default Contact;
