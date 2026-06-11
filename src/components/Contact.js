import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!formDetails.firstName.trim()) {
      newErrors.firstName = "First Name is required";
    }

    if (!formDetails.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
    }

    if (!formDetails.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formDetails.email)
    ) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formDetails.phone.trim()) {
      newErrors.phone = "Phone Number is required";
    } else if (!/^[0-9]{10}$/.test(formDetails.phone)) {
      newErrors.phone = "Phone Number must be 10 digits";
    }

    if (!formDetails.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });

    setErrors((prev) => ({
      ...prev,
      [category]: "",
    }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) {
    toast.error("Please fill all required fields correctly.");
    return;
  }

  try {
    setButtonText("Sending...");

    const response = await fetch("http://localhost:5001/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDetails),
    });

    const result = await response.json();

    if (result.code === 200) {
      toast.success("Mail sent successfully!");

      setFormDetails(formInitialDetails);
      setErrors({});
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error(error);
    toast.error("Unable to connect to the server.");
  } finally {
    setButtonText("Send");
  }
};

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible
                      ? "animate__animated animate__zoomIn"
                      : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__fadeIn"
                      : ""
                  }
                >
                  <h2>Get In Touch</h2>

                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col xs={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          onChange={(e) =>
                            onFormUpdate(
                              "firstName",
                              e.target.value
                            )
                          }
                        />

                        {errors.firstName && (
                          <small className="error-text">
                            {errors.firstName}
                          </small>
                        )}
                      </Col>

                      <Col xs={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.lastName}
                          placeholder="Last Name"
                          onChange={(e) =>
                            onFormUpdate(
                              "lastName",
                              e.target.value
                            )
                          }
                        />

                        {errors.lastName && (
                          <small className="error-text">
                            {errors.lastName}
                          </small>
                        )}
                      </Col>

                      <Col xs={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) =>
                            onFormUpdate(
                              "email",
                              e.target.value
                            )
                          }
                        />

                        {errors.email && (
                          <small className="error-text">
                            {errors.email}
                          </small>
                        )}
                      </Col>

                      <Col xs={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          maxLength={10}
                          value={formDetails.phone}
                          placeholder="Phone No."
                          onChange={(e) =>
                            onFormUpdate(
                              "phone",
                              e.target.value.replace(/\D/g, "")
                            )
                          }
                        />

                        {errors.phone && (
                          <small className="error-text">
                            {errors.phone}
                          </small>
                        )}
                      </Col>

                      <Col xs={12} className="px-1">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) =>
                            onFormUpdate(
                              "message",
                              e.target.value
                            )
                          }
                        ></textarea>

                        {errors.message && (
                          <small className="error-text">
                            {errors.message}
                          </small>
                        )}

                        <button
                          type="submit"
                          disabled={
                            buttonText === "Sending..." ||
                            !formDetails.firstName.trim() ||
                            !formDetails.lastName.trim() ||
                            !formDetails.email.trim() ||
                            !formDetails.phone.trim() ||
                            !formDetails.message.trim()
                          }
                        >
                          <span>{buttonText}</span>
                        </button>
                      </Col>

                      {status.message && (
                        <Col xs={12}>
                          <p
                            className={
                              status.success
                                ? "success"
                                : "danger"
                            }
                          >
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};