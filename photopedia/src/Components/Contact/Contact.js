import * as React from "react";
import "./Contact.css";
import Sidebar from "../Sidebar/Sidebar";
import BoxHeader from "../BoxHeader/BoxHeader";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FaRegPaperPlane } from "react-icons/fa";
import Form from "react-bootstrap/Form";

function Contact() {
  return (
    <>
      <BoxHeader />
      <div className="BC-mainContent">
        <Sidebar />
        <section id="contact" className="contact-form">
          <Container className="contact-container">
            <h3>Contact</h3>

            <Form className="contact-form">
              <Row className="contact-row">
                <Col md={6} sm={12} className="col-sm-6">
                  <input
                    type="text"
                    name="name"
                    className="Cform-control mt-x-0"
                    placeholder="Name"
                    required
                  />
                </Col>
                <Col md={6} sm={12} className="col-sm-6">
                  <input
                    type="email"
                    name="email"
                    className="Cform-control"
                    placeholder="Email"
                    required
                  />
                </Col>
                <Col md={12} className="col-sm-12">
                  <textarea
                    name="message"
                    id="message"
                    className="Cform-control c-message"
                    placeholder="Message"
                    required
                  ></textarea>
                </Col>
              </Row>
              <Button
                href="#"
                className="contact-btn"
                type="submit"
                variant="outline-secondary"
              >
                SUBMIT
                <FaRegPaperPlane />
              </Button>
            </Form>
          </Container>
        </section>
      </div>
    </>
  );
}
export default Contact;
