import { useState, useEffect } from 'react';
import { useOutlet, useOutletContext, Link } from "react-router-dom";
import { editPost } from './index';

const Profile = () => {
    const [,, profileData, setProfileData] = useOutletContext();
    
    console.log(profileData.username);
   
    async function deletePost(id) {
    const response = await fetch(`https://strangers-things.herokuapp.com/api/2209-FTB-MT-WEB-FT/posts/${id}`, {
  method: "DELETE",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  }
})
    const data = await response.json()
    console.log(data)
    }

    return (
        <div>
            <h1><u>Welcome!</u></h1>
            <h3>{profileData?.username}</h3>
            {
                profileData.posts ? profileData.posts.map((indivPost, idx) => {
                    if (indivPost.active){
                        return <div key={idx}>
                        <h2>{indivPost.title}</h2>
                        <Link to={`/profile/${indivPost._id}`}>See Detailed View</Link>
                        <button onClick={()=>deletePost(indivPost._id)}> Delete </button>
                        </div>
                    }   else {
                        return null;
                    }
        
                        }) : null
                }
             </div>
    )
}

export default Profile;
