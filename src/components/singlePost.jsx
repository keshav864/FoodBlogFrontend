import Banner from "./banner";
import { useState,useEffect } from "react";
import axios from "axios";

const SinglePost = ({_id}) => {
    const title = "Single Post";
    const [post,setPosts] = useState({})

    useEffect(()=>{
        let fetchData = async () => {
            const res = await axios.get(`http://localhost:4000/posts/${_id}`)
            const data = res.data
            setPosts(data)
        }
        fetchData()
    },[_id])
    return ( 
        <div className="singlepost">
            <Banner data={title} />
            <h1>{post.title}</h1>
        </div>
     );
}
 
export default SinglePost;