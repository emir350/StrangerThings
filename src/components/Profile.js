import { useState, useEffect } from 'react';
import { useOutlet, useOutletContext, Link } from "react-router-dom";
import { editPost } from './index';

const Profile = () => {
    const [,, profileData, setProfileData] = useOutletContext();
    

   
    return (
        <div>
            <h2>Profile Page</h2>
            {
                profileData.posts ? profileData.posts.map((indivPost, idx) => {
                    console.log("I am the individual post from the map: ", indivPost)
                    return <div key={idx}>
                        <p>{indivPost.title}</p>
                        <Link to={`/profile/${indivPost._id}`}>See Detailed View</Link>
                        </div>
                        }) : null
                }
             </div>
    )
}

export default Profile;
