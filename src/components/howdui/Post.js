import React, { useEffect } from "react"
import { Navbar, Nav, Card, Container, Button, Modal, ModalTitle, ModalBody, Form, FormControl,} from "react-bootstrap"
import { Link } from "react-router-dom"
import Submit from "./Submit"
import { useState, useRef } from 'react'
import { database } from "../../firebase"
import { doc, updateDoc, increment } from "firebase/firestore";
import ModalHeader from "react-bootstrap/esm/ModalHeader"



function likePost(post) {
database.posts.doc(post.id).update({"likes" : post.likes+1}).then(() => {
  window.alert("you clapped a post!")
  window.location.reload();
})
 // const db = getFirestore();
 // var likeRef = db.collection("posts").doc("posts.likes");
 // const increment = firebase.firestore.FieldValue.increment(1);
 

}

export default function Post({ post }) {
  const [open, setOpen] = useState(false)
  const contentRef = useRef()

  function openModal() {
    setOpen(true)
  }

  function closeModal() {
    setOpen(false)
  }

  function handleSubmit(e) {
    e.preventDefault()
   
    database.posts.doc(post.id).collection("comments").add({
      content: contentRef.current.value,
      createdAt: database.getCurrentTimestamp(),
    }).then(() => {
      window.alert("you commented on a post!")
      window.location.reload();
    })
    closeModal()
  }


  const [comments, setComments] = useState([])
  

  const fetchComments = async() => {

    const response = database.posts.doc(post.id).collection("comments").orderBy("createdAt", "desc")
    
    const data = await response.get()

    const currentComments = []
    
    data.docs.forEach(d => {
      let doc = d.data()
      doc.id = d.id
      currentComments.push(doc)
    })
    setComments(currentComments)
    
    
  }

  return (
    <>
    <Container >
      <Card key={post.id}   >
        <Card.Body style={{cursor:"pointer"}} onClick={openModal}>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.content}</Card.Text>
             
    </Card.Body>
    <Card.Body>
      <Card.Text>{post.likes} claps
              </Card.Text> <Button onClick={() => likePost(post)} variant="outline-success" size="sm">
    Clap </Button>
    </Card.Body>
      </Card>
      
    </Container>

    <Modal show={open} onHide={closeModal} size="xl" onShow={useEffect(() => {
    fetchComments()
  }, [])}>
    <Container>
      <ModalHeader>
        <Card>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.content}</Card.Text>
        </Card>
      </ModalHeader>
      
      <Form onSubmit={handleSubmit}>
        <Form.Label>Post a comment</Form.Label>
        <FormControl
          type="text"
          as = "textarea"
          ref={contentRef}/>
          <Button variant="success" type="submit">
              Comment
            </Button>
      </Form>
      
        <Card>
          <Card.Title>Comments</Card.Title>
           {'\n'}
        {
        comments && comments.map(comment => {
          return (
            <>

            <div className={comment.id} key={comment.id}>
              {comment.content}
            </div>

            </>
          )
        })
        
        }
        </Card>
        

      </Container>
      
    </Modal>
    </>
  )
  }
