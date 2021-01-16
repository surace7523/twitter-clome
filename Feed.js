import React, { useState, useEffect } from 'react';
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from './firebase';
import FlipMove from 'react-flip-move';

function Feed(){
    // acessing the firebase database 

        //db.collection('posts')access the database collections post
        //map(doc=>doc.data())) gets you the posts by looping through the list of posts
        //doc.data() gets you the access to entire fields/objects
    const [posts, setPosts] = useState([]);
    useEffect(() => {

        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc =>doc.data()))
        ))
    }, [])

    return (
        
        <div className="feed">

            {/*header*/}

            <div className="feed_header"> 
                <h2>home</h2>

             </div>


            {/*tweetbox*/}

            <TweetBox />


            <FlipMove>
                 {posts.map(post => (

                     <Post

                        key={post.text}
                        displayName={post.displayName}
                        username={post.username}
                        verified={post.verified}
                        text={post.text}
                        image={post.image}
                        avatar={post.avatar}

                    />
                
                
                
                     ))}




            </FlipMove>
            {/*post*/}
            {/*post*/}
            {/*post*/} 
            {/*post*/}
            {/*post*/}
            {/*post*/}
            {/*post*/}
            {/*post*/}
            {/*post*/}
           
          
            


      </div>


   
     
     
     
     
    );


    }

        export default Feed;