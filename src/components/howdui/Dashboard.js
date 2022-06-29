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
    //    data.docs.forEach(item => {
    //        setPosts([...posts,item.data()])
    //    })
        setPosts(data.docs.map( d => d.data()))
    }


    return (
        <>

        <Navbar />
        <Container fluid>
            {
                posts && posts.map(post => {
                    console.log(post.content)
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