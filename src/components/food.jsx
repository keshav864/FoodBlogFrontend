import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "./banner";
import axios from "axios";
const Food = () => {
    let title = "All Posts"
    let navigate = useNavigate()
    let [posts, setPosts] = useState([])
    useEffect(() => {
        let fetchData = async () => {
            const res = await axios.get("http://localhost:4000/posts")
            const data = res.data
            setPosts(data)
        }
        fetchData()
    }, [])

    const readPost = (id) =>{
        navigate(`/posts/${id}`)
    }
    return (
        <div className="food">
            <Banner data={title} />
            <div className="posts_list d-flex flex wrap my-5">
                {posts.map((post) => {
                    return (
                        <div className="post mx-3" key={post._id}>
                            <img src={post.image} className="rounded-2 homePostImage" width="300" height="350" alt="" />
                            <div className="info mt-3">
                                <h2 style={{ fontFamily: "inherit" }}>{post.title}</h2>
                                <p className="text-secondary">- Written by {post.author}</p>
                                <button onClick={()=>readPost(post._id)} className="btn btn-dark rounded-1 homeBtn">Read more &gt;</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Food;