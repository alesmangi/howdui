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
    /*
        TODO: order the user's posts by newest
    */
    const fetchPosts = async() => {
        const response = database.posts.where('userId', '==', currentUser.uid);
        const data = await response.get();
    //    data.docs.forEach(item => {
    //        setPosts([...posts,item.data()])
    //    })
        setPosts(data.docs.map( d => d.data()))
    }

    /*
    database.posts.where('userId', '==', currentUser.uid).get().then((snapshot) => {
        console.log(snapshot.size)
        snapshot.forEach((document) => {
            userPosts.push({
                ...document.data(),
                key: document.id,
            })
            console.log(document.data().title)
        })
    })
   */

    return (
        <>
        <Navbar />
        
        
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
        

       

        </>
        
    )
}