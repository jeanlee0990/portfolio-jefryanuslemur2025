import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from "@emailjs/browser";

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    };

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setButtonText('Sending...');

        emailjs.send(
            "service_ympjno7",  
            "template_mki18lo", 
            {
                from_name: formDetails.firstName + " " + formDetails.lastName,
                from_email: formDetails.email,
                phone: formDetails.phone,
                message: formDetails.message
            },
            "sPyY5Hp237W-NX_8Z"  
        )
        .then((response) => {
            console.log("SUCCESS!", response.status, response.text);
            setButtonText("Send");
            setStatus({ success: true, message: "✅ Message sent successfully!" });
            setFormDetails(formInitialDetails);
        })
        .catch((err) => {
            console.error("FAILED...", err);
            setButtonText("Send");
            setStatus({ success: false, message: "❌ Something went wrong. Please try again!" });
        });

        // Hapus notifikasi setelah 5 detik
        setTimeout(() => setStatus({}), 5000);
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
                            }
                        </TrackVisibility>
                    </Col>
                    <Col md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Get In Touch</h2>
                                    <form onSubmit={handleSubmit}>
                                        <Row>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                            </Col>
                                            <Col size={12} className="px-1">
                                                <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                                <button type="submit"><span>{buttonText}</span></button>
                                            </Col>
                                            {
                                                status.message && (
                                                    <Col size={12} className="px-1">
                                                        <div className={`alert-box ${status.success ? "success" : "danger"} animate__animated animate__fadeIn`}>
                                                            {status.message}
                                                        </div>
                                                    </Col>
                                                )
                                            }
                                        </Row>
                                    </form>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>

            {/* Tambahkan CSS */}
            <style>{`
                .alert-box {
                    padding: 15px;
                    border-radius: 5px;
                    font-size: 16px;
                    font-weight: bold;
                    text-align: center;
                    margin-top: 15px;
                }
                .success {
                    background-color: #4CAF50; /* Hijau */
                    color: white;
                }
                .danger {
                    background-color: #f44336; /* Merah */
                    color: white;
                }
            `}</style>
        </section>
    );
};
