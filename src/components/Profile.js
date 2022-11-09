import { useState, useEffect } from 'react';
import { useOutlet, useOutletContext, Link } from "react-router-dom";
import { editPost } from './index';

const Profile = () => {
    const [,, profileData, setProfileData] = useOutletContext();
    
    console.log(profileData.username);
   
    return (
        <div>
            <h1><u>Welcome!</u></h1>
            <h3>{profileData?.username}</h3>
            {
                profileData.posts ? profileData.posts.map((indivPost, idx) => {
                    console.log("I am the individual post from the map: ", indivPost)
                    return <div key={idx}>
                        <h2>{indivPost.title}</h2>
                        <Link to={`/profile/${indivPost._id}`}>See Detailed View</Link>
                        </div>
                        }) : null
                }
             </div>
    )
}

export default Profile;
