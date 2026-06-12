import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

      const response = await fetch(`${process.env.REACT_APP_API_URL}/newsletter`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      console.log(result);

      if (result.code === 200) {
        setEmail("");
        toast.success("Subscribed successfully!");
      } else {
        toast.error(result.message || "Subscription failed.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Unable to connect to the server.");
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
