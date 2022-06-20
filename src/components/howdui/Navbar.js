import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import Submit from "./Submit"

export default function NavbarComponent() {
  return (
    <Navbar bg="light" expand="sm">
        <Nav className="container-fluid">
            <Nav.Item>
                <Navbar.Brand as={Link} to="/">
                    Howdui
                </Navbar.Brand>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/submit">
                    Create a Post
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/my-posts">
                    My Posts
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Submit/>
            </Nav.Item>
            <Nav.Item className="ml-auto">
                <Nav.Link as={Link} to="/user">
                    Profile
                </Nav.Link>
            </Nav.Item>
        </Nav>
      
      <Nav>
        
      </Nav>
    </Navbar>
  )
}
