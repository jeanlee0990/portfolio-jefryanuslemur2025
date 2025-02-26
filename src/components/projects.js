import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./projectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Projects = () => {
    const projects = [
        {
            title: "Dashboard Kelola Stok",
            description: "Laravel-based Inventory Management",
            imgUrl: projImg1,
        },
        {
            title: "Dashboard Kelola Stok",
            description: "Laravel-based Inventory Managemen",
            imgUrl: projImg2,
        },
        {
            title: "Dashboard Kelola Stok",
            description: "Laravel-based Inventory Managemen",
            imgUrl: projImg3,
        },
        {
            title: "Dashboard Kelola Stok",
            description: "Laravel-based Inventory Managemen",
            imgUrl: projImg4,
        }
    ];

    return (
        <section className="project text-center" id="projects">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2 className="text-center">Projects</h2>
                                    <p className="text-center">"Saat ini, saya sedang mengembangkan sebuah proyek bernama Dashboard Kelola Stok Barang untuk PT GAJAH TUNGGAL TBK menggunakan Laravel. Proyek ini dirancang untuk mempermudah pengelolaan dan pemantauan stok barang secara efisien."</p>
                                </div>
                            }
                        </TrackVisibility>
                        <Tab.Container id="projects-tab" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">PT GAJAH TUNGGAL TBK</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Coming Soon</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Coming Soon</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    {/* Baris pertama: 2 project di tengah */}
                                    <Row className="justify-content-center">
                                        {projects.slice(0, 2).map((project, index) => (
                                            <ProjectCard key={index} {...project} />
                                        ))}
                                    </Row>
                                    {/* Baris kedua: 2 project di tengah */}
                                    <Row className="justify-content-center mt-3">
                                        {projects.slice(2, 4).map((project, index) => (
                                            <ProjectCard key={index} {...project} />
                                        ))}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Coming Soon</Tab.Pane>
                                <Tab.Pane eventKey="third">Coming Soon</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} />
        </section>
    );
}
