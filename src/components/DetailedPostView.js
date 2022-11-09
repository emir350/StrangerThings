import { useEffect, useState } from 'react';
import { useOutletContext, useParams } from "react-router-dom";
import  EditPost  from './EditPost.js';

const DetailedPostView = () => {
    const [,, profileData, setProfileData] = useOutletContext();
    
    const [detailedSpecificPost, setDetailedSpecificPost] = useState({})
    
    const [toggleEditForm, setToggleEditForm] = useState(false)

    const { id } = useParams();

    function handleToggleEditForm () {
        setToggleEditForm(!toggleEditForm);
    }

    useEffect(() => {
        async function findSpecificPost () {
            try {
                const [specificPost] = await profileData.posts.filter((element) => element._id == id);
                setDetailedSpecificPost(specificPost);
            } catch(error) {
                console.log(error);
            }
        }
        findSpecificPost()
    }, [])
 
    return (
        <div>
            <button onClick={handleToggleEditForm}>Edit Post</button>
            
           

            {
                toggleEditForm ? <EditPost indivPost={detailedSpecificPost} setProfileData={setProfileData} handleToggleEditForm=
                {handleToggleEditForm}/> : null
            }
        <div>
            <h3>Post Info:</h3>
            {
                detailedSpecificPost.title ? <p>{detailedSpecificPost.title}</p> : <p>Untitled Post</p>
            }
            </div>
        </div>
    )
}

export default DetailedPostView;
    

