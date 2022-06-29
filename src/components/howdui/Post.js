import React from "react"
import { Navbar, Nav, Card, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import Submit from "./Submit"

export default function Post({ post }) {

  return (
    <>
    <Container>

    
      <Card key={post.id} style={{}}>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.content}</Card.Text>
        </Card.Body>
      </Card>

    </Container>
    </>
    

    
  )
}
