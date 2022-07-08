import React from "react"
import { Navbar, Nav, Card, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import Submit from "./Submit"
import WriteComment, { getComments, LoadComments, } from "./comments.js"
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
       
      <WriteComment setComments={setComments} slug={post.slug} />
    <div className="mt-10 pt-10 w-full border-t dark:border-gray-500">
      <button
        onClick={() => getComments(post.slug, setComments)}
        className="w-[200px] appearance-none py-2 px-5 text-center rounded border hover:bg-gray-100 dark:hover:bg-[#28282B]   dark:border-gray-500"
      >
        Load Comments
      </button>
    </div> 
    </Card.Body>
      </Card>
    <LoadComments comments={comments} />
    </Container>
    </>
    

    
  )
}
