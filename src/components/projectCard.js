import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
    return (
        <Col sm={6} md={5} className="d-flex justify-content-center">
            <div className="proj-imgbx text-center">
                <img src={imgUrl} className="img-fluid" />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    );
};
