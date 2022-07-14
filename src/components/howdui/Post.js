import React from "react"
import { Navbar, Nav, Card, Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import Submit from "./Submit"
import { useState } from 'react'
import { database } from "../../firebase"
import { doc, updateDoc, increment } from "firebase/firestore";

function likePost(post) {
database.posts.doc(post.id).update({"likes" : post.likes+1})
 // const db = getFirestore();
 // var likeRef = db.collection("posts").doc("posts.likes");
 // const increment = firebase.firestore.FieldValue.increment(1);
}

export default function Post({ post }) {
  return (
    <>
    <Container>
      <Card key={post.id} style={{}}>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.content}</Card.Text>
             <Card.Text>{post.likes}
             <Button onClick={() => likePost(post)} variant="outline-success" size="sm">
    Clap </Button> </Card.Text> 
    </Card.Body>
      </Card>
    </Container>
    </>
  )
  }
