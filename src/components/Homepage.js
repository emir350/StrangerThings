import React, { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom';

const Homepage = () => {
    const [posts, setPosts] = useState([]);
    const [profileData, setProfileData] = useState({});

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("https://strangers-things.herokuapp.com/api/2209-FTB-MT-WEB-FT/posts");
                const data = await response.json();
                console.log("My data: ", data)
                setPosts(data.data,posts);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    },[]);

    useEffect(() => {
        async function fetchProfileData() {
            try {
                const response = await fetch("https://strangers-things.herokuapp.com/api/2209-FTB-MT-WEB-FT/users/me", {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: 'Bearer ${localStorage.getItem("token")}'
                    }
                })
                const data = await responsee.json();
                console.log("Profile data: ", data);
                setProfileData(data.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchProfileData();
    }, [])

    return (
        <div>
         <nav>
               <h2> <h2>Strangers Things</h2> </h2>
            
                <div class="navbar"></div>
                <Link to="/">Homepage</Link>
                <Link to="/new-post">Create New Post</Link>
                <Link to="/register">Register</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/login">Login</Link>
        </nav>
            

            <Outlet context={[posts, setPosts, profileData, setProfileData]}/>
        </div>
    )
 }

 export default Homepage;