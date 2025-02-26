import { Col, Container, Row } from "react-bootstrap";
import logojefry from "../assets/img/logojefry.png";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
    return (
        <footer style={styles.footer}>
            <Container>
                <Row className="align-items-center">
                    <Col sm={6} style={styles.logoContainer}>
                        <a href="/">
                            <img src={logojefry} alt="logo" style={styles.logoCircle} />
                        </a>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div style={styles.socialIcon}>
                            <a href="https://www.instagram.com/code_in_aja/?igsh=b2w5NWg0aXhzNzk4#">
                                <img src={navIcon3} alt="Instagram" style={styles.icon} />
                            </a>
                        </div>
                        <p style={styles.text}>📞 0857-1440-8209</p>
                        <p style={styles.text}>✉️ jefrylemur@gmail.com</p>
                        <p style={styles.text}>© 2025 Jefryanus Lemur - Glarang Pokalau. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

// CSS langsung di dalam file JSX
const styles = {
    footer: {
        background: "#222",
        padding: "20px 0",
        color: "white",
        textAlign: "center",
    },
    logoContainer: {
        textAlign: "left",
    },
    logoCircle: {
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        objectFit: "cover",
        marginLeft: "-20px",
        cursor: "pointer", // Menambahkan cursor pointer agar terlihat bisa diklik
    },
    socialIcon: {
        display: "inline-block",
    },
    icon: {
        width: "30px",
        height: "30px",
        transition: "transform 0.3s ease-in-out",
    },
    text: {
        marginTop: "10px",
        fontSize: "14px",
    },
};

// Efek hover pada ikon media sosial
styles.icon["&:hover"] = {
    transform: "scale(1.1)",
};
