import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Greetings! I'm<span className="purple">Shubham Raut</span>
            from <span className="purple"> Pune, India.</span>
            <br />
            <br />

            I completed my Bachelor of Engineering (BE) at JSPM NTC.
            <br />
            As an aspiring <span className="purple">MERN stack developer</span>, I am excited to embark on a dynamic journey in the world of web development.
            <br />
          </p>
        
          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
