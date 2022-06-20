import { auth,  } from "firebase"
import { useAuth } from "../../contexts/AuthContext"
import React from "react"
import { Container, Card } from "react-bootstrap"
import { database } from "../../firebase"
import Navbar from "./Navbar"




export default function MyPosts() {
    const { currentUser,} = useAuth()
    const userPosts = database.posts.where('userID', '==', currentUser.uid).get().then((snapshot) => {
        console.log(snapshot.docs)
    })
    
    console.log(userPosts)

    return (
        <>
        <Container></Container>
        console.log(userPosts)
        </>
        
    )
}