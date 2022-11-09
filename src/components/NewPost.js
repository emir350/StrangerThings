import React, {useState} from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';

const NewPost = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const [posts, setPosts] = useOutletContext();

    const navigate = useNavigate();

    async function handleSubmit (event) {
        event.preventDefault();
        try {
            if(!localStorage.getItem("token").length) {
                alert("You are not logged in.")
                return;
            }
            const response = await fetch("https://strangers-things.herokuapp.com/api/2209-FTB-MT-WEB-FT/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    post: {
                        title,
                        description,
                        price
                    }
                })
            });

            const data = await response.json();

            console.log("This is newPosts data: ",)

            setPosts([...posts, data.data.post])

            navigate("/posts")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1><u>Creating Post</u></h1>
            <create>
              
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}
                ></input>
                <br />
                <label>Description</label>
                <input type="text" value={description} onChange={(event) => setDescription(event.target.value)}></input>
                <br />
                <label>Price</label>
                <input type="text" value={price} onChange={(event) => setPrice(event.target.value)}></input>
                <br />
                <button type="submit">Submit</button>
            </form>
            </create>
            
        </div>
    )
}

export default NewPost;

            


            
        
    
