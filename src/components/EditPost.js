import { useState, useEffect } from 'react';
import { json, useNavigate } from 'react-router-dom';

const EditPost = (props) => {
    console.log("EditPost props", props)
    const [title, setTitle] = useState(props.indivPost.title);

    const navigate = useNavigate();

    async function handleEditPost (event) {
        event.preventDefault();
        try {
            const response = await fetch(`https://strangers-things.herokuapp.com/api/2209-FTB-MT-WEB-FT/posts/${props.indivPost._id}
            `,{
                method: "PATCH",
                headers: {
                    "content-Type": "application/json",
                    authorization: `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    post: {
                        title
                    }
                })

        })

        const editedPosts = await fetch(`https://strangers-things.herokuapp.com/api/2209-FTB-MT-WEB-FT/posts/`);
        const translatedEditPosts = await editedPosts.json();

        props.setProfileData([,,,translatedEditPosts.data.posts])
       // props.handleToggledEditForm();

        navigate("/profile")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <p>Welcome to my editpost</p>
            <form onSubmit={handleEditPost} >
                <label>Edit Title</label>
                <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}></input>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default EditPost;


    
