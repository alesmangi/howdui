import React from "react"
import { Navbar, Nav, Card, Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import Submit from "./Submit"
import { useState } from 'react'
import { database } from "../../firebase"

export default function Post({ post }) {
  const [comments, setComments] = useState([""])


  function Like() {
    //Find the post associated with this, then increment it's likes 
    
    database.posts.doc(post.id).update({
      
    })
  }


  return (
    <>
    <Container>

    <Button onClick={Like} variant="outline-success" size="lg">
      Create a Post
      </Button>
    
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
