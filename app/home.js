
"use client"

import app from './firebase';
import React, { useState } from 'react';
import { getAuth, signOut } from "firebase/auth";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import Image from "next/image";
import img123 from "./mylogo.png";
import myimg1 from "./rocket.jpeg";
import myimg2 from "./astro physics.jpg";
import myimg3 from "./aimypic.jpg";
import { Navbar, Nav } from "react-bootstrap";
import { useRouter } from "next/navigation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GoogleLogout = () => {
  const auth = getAuth();
  const router = useRouter();

  const handleGoogleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
        toast.success("Logged out successfully");
        router.push("/")
      })
      .catch((error) => {
        console.error("Error signing out:", error);
        toast.error("Error signing out. Please try again.");
      });
  };

  const navigate = () => {
    router.push("/mainhome");
  };

  // Settings for the slider
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div style={{ backgroundColor: '#001f3f', color: '#ffffff', minHeight: '100vh' }}>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Image src={img123} alt="myimage" style={{ height: "auto", maxWidth: "100%", maxHeight: "40px", width: "auto" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Nav>
              <Button variant="outline-primary" style={{ border: "none" }} onClick={handleGoogleLogout}>
                Sign out
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br></br>
      <Container>
        <Row>
          <Col>
            <Slider {...sliderSettings}>
              {[...Array(9)].map((_, index) => (
                <div key={index}>
                  <Card style={{ backgroundColor: '#001f3f', color: '#ffffff', border: '1px solid rgba(255, 255, 255, 0.3)', margin: '0 10px' }}>
                    <Card.Body className="d-flex align-items-center justify-content-between">
                      <div style={{ flex: 1 }}>
                        <Image src={index % 3 === 0 ? myimg1 : index % 3 === 1 ? myimg2 : myimg3} style={{ width: "100%", height: "70%" }} alt="Card image" fluid />
                      </div>
                      <div style={{ flex: 1 }}>
                        <strong>Introduction to Rocket science</strong>
                        <p>This is card {index + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper neque sit amet sapien sodales tempus.</p>
                      </div>
                    </Card.Body>
                    <div className="d-flex justify-content-center">
                      <Button onClick={navigate} variant="outline-primary" style={{ border: '1px solid rgba(255, 255, 255, 0.5)', backgroundColor: 'transparent', color: '#ffffff', opacity: 0.9, width: '70%' }}>
                        Read more
                      </Button>
                    </div>
                    <br />
                  </Card>
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

// Custom arrows for the Slider
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: "block", background: "red" }} onClick={onClick} />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: "block", background: "green" }} onClick={onClick} />
  );
}

export default GoogleLogout;
