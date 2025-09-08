import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import contact_manger from "../../Assets/Projects/contact_manger.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />/
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={contact_manger}
              isBlog={false}
              title="Contacts Manager"
              description="The application is designed to offer a user-friendly platform for managing contact information efficiently. Here's a brief overview of the project's components and functionalities:"
              ghLink="https://github.com/vmeegada/ContactManager-MERN"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
