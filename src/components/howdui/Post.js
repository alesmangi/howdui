import React from "react"
import { Navbar, Nav, Card, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import Submit from "./Submit"
import { useState } from 'react'

export default function Post({ post }) {
  const [comments, setComments] = useState([""])
  return (
    <>
    <Container>

    
      <Card key={post.id} style={{}}>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.content}</Card.Text>
          <Card.Text>{post.likes}</Card.Text>
     
    </Card.Body>
      </Card>
    
    </Container>
    </>
    

    
  )
}
