import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

function CollapsibleExample() {
  const [user, setUser] = useState("");

  const [session] = useAuthState(auth);
  // const session = false;

  const logoutUser = async () => {};

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      fixed="top"
      sticky="top"
      variant="dark"
    >
      <Container>
        <Navbar.Brand
          style={{
            marginLeft: 30,
          }}
        >
          County Government Services
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            {user && (
              <Nav.Link
                style={{
                  marginRight: 20,
                }}
              >
                {user.name}
              </Nav.Link>
            )}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                flexWrap: "wrap",
                width: 200,
              }}
            >
              {session && (
                <Button onClick={logoutUser} variant="danger">
                  Logout
                </Button>
              )}
              {!session && (
                <Button onClick={logoutUser} variant="primary">
                  Login
                </Button>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
