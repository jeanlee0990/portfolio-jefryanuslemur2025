import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import frontendSvg from "../assets/img/frontend.svg";
import backendSvg from "../assets/img/backend.svg";
import databaseSvg from "../assets/img/database.svg";
import fullstackSvg from "../assets/img/fullstack.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4 },
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
    };

    // Inline CSS agar tetap sejajar & seragam
    const styles = {
        skillBox: {
            textAlign: "center",
            padding: "50px 20px",
            background: "#151515",
            borderRadius: "20px",
            color: "white",
        },
        skillSlider: {
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "30px",
        },
        skillItem: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            width: "150px",
        },
        skillImg: {
            width: "120px",
            height: "120px",
            objectFit: "contain",
        },
        skillTitle: {
            marginTop: "10px",
            fontSize: "16px",
            fontWeight: "bold",
        },
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div style={styles.skillBox}>
                            <h2>Skills</h2>
                            <p>Saya memiliki keahlian dalam pengembangan web, mencakup frontend, backend, database, dan fullstack development. Dalam pengembangan frontend, saya menguasai HTML, CSS, Bootstrap, dan Tailwind CSS untuk membangun antarmuka yang responsif dan modern. Pada sisi backend, saya menggunakan PHP dengan Laravel serta teknologi JavaScript seperti Node.js dan Express.js. Untuk database, saya memiliki pengalaman dalam mengelola MySQL dan MongoDB. Selain itu, saya juga menguasai pengembangan Fullstack menggunakan MERN Stack (MongoDB, Express.js, React.js, dan Node.js).</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider" style={styles.skillSlider}>
                                <div style={styles.skillItem}>
                                    <img src={frontendSvg} alt="Frontend Development" style={styles.skillImg} />
                                    <h5 style={styles.skillTitle}>Frontend Development</h5>
                                </div>
                                <div style={styles.skillItem}>
                                    <img src={backendSvg} alt="Backend Development" style={styles.skillImg} />
                                    <h5 style={styles.skillTitle}>Backend Development</h5>
                                </div>
                                <div style={styles.skillItem}>
                                    <img src={databaseSvg} alt="Database Management" style={styles.skillImg} />
                                    <h5 style={styles.skillTitle}>Database Management</h5>
                                </div>
                                <div style={styles.skillItem}>
                                    <img src={fullstackSvg} alt="Fullstack Development" style={styles.skillImg} />
                                    <h5 style={styles.skillTitle}>Fullstack Development</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="Background" />
        </section>
    );
};
