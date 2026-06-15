import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])
  const [buttonText, setButtonText] = useState("Submit");


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter your email.");
      return;
    }

    if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
    ) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      setButtonText("Sending...");
      await emailjs.send(
        "service_khu4upr",
        "template_zu13kup",
        {
          to_email: "dinesh996528@gmail.com",
          subscriber_email: email,
          date: new Date().toLocaleString(),
        },
        "MMmTFQEx1YQAUs7Wb"
      );

      setEmail("");
      toast.success("Subscribed successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to subscribe.");
    } finally {
      setButtonText("Submit");
    }
  };



  const clearFields = () => {
    setEmail('');
  }

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Subscribe to our Newsletter<br></br> & Never miss latest updates</h3>
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                <button
                  type="submit"
                  disabled={buttonText === "Sending..."}
                >
                  {buttonText}
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  )
}
