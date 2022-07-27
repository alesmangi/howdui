import { auth,  } from "firebase"
import { useAuth } from "../../contexts/AuthContext"
import React, { useEffect } from "react"
import { useState } from "react"
import { Container, Card } from "react-bootstrap"
import { database } from "../../firebase"
import Navbar from "./Navbar"
import Post from "./Post"

export default function MyPosts() {
    const [posts, setPosts] = useState([]);
    const { currentUser,} = useAuth()
    //const userPosts = []
    useEffect(() => {
        fetchPosts();
    }, [])
   
    const fetchPosts = async() => {
        const response = database.posts.where('userId', '==', currentUser.uid);
        const data = await response.get();
   
        const currentPosts = []
        data.docs.forEach(d => {
            let doc = d.data()
            doc.id = d.id
            currentPosts.push(doc)
        })
        setPosts(currentPosts)
    }


    return (
        <>
        <Navbar />
        
        
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
        

       

        </>
        
    )
}