import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "./App.css";

export default function Topbar() {
  return (
    <Navbar bg="primary">
      <Container>
        <Navbar.Brand style={{ color: "white", fontWeight: "bold" }}>Reviews</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
