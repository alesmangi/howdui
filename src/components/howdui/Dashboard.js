import React, { useEffect, useState } from "react"
import { Container, Card } from "react-bootstrap"
import Navbar from "./Navbar"
import { auth,  } from "firebase"
import { useAuth } from "../../contexts/AuthContext"
import CenteredContainer from "../authentication/CenteredContainer"
import { database } from "../../firebase"
import Post from "./Post"

export default function Dashboard() {

    const [posts, setPosts] = useState([]);
    const { currentUser,} = useAuth()
    //const userPosts = []
    useEffect(() => {
        fetchPosts();
    }, [])

    const fetchPosts = async() => {
        const response = database.posts.orderBy("createdAt", "desc");
        const data = await response.get();

        const currentPosts = []
        data.docs.forEach(d=>{
            let doc = d.data()
            doc.id = d.id
            currentPosts.push(doc)
        })
        setPosts(currentPosts)

    }

    return (
        <>

        <Navbar />
        <Container fluid>
            {
                posts && posts.map(post => {
                    return (
                        <>
                       
                        <div className={post.title} key={post.title}>
                            
                           
                            <Post post={post}></Post>
                        </div>
                        </>
                    )
                })
            }
        </Container>
        
            

        </>

    )
}