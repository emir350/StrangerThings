import React from 'react';
import { useOutletContext } from 'react-router-dom';

const AllPosts = () => {
    const posts = useOutletContext()[0]
    return (
        <div>
            
            {
                
                posts.length ? posts.map((post, idx) => {
                    return <div key={idx}>
                      <create2> <h2>{post.title}</h2>
                                <p>{post.price}</p>
                                <p>{post.description}</p>
                        </create2> 
                    </div>
                }) : <p>No posts to display</p>
                
            }
        </div>
    )
}

export default AllPosts