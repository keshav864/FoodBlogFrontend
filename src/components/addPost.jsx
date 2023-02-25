import Banner from "./banner";
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useState } from "react";

const AddPost = () => {
    let [title, setTitle] = useState("")
    let [summary, setSummary] = useState("")
    let [file, setFile] = useState("")
    let [content, setContent] = useState("")

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean']
        ],
    }
    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ]
    let addPost = async(e) =>{
        let data = {title,summary,content,file:file[0]}
        e.preventDefault();

       const response =  await fetch('http://localhost:4000/post',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:data
    })
    console.log(await reponse.json());
    }
    return (
        <div className="addPost">
            {/* <Banner image={BannerImage} /> */}
            <div className="postForm my-5 d-flex justify-content-center">
                <div className="image mx-4">
                    <img src="/images/pancakes.jpg" className="rounded-2" width="500" height="600" alt="" />
                </div>
                <div className="form">
                    <h1 className="text-secondary">ADD POST</h1>
                    <form action="" onSubmit={addPost}> 
                        <input className="form-control my-4 rounded-0" type="text" placeholder="title of the post" value={title} onChange={(e)=>setTitle(e.target.vlue)} />
                        <input className="form-control my-4 rounded-0" type="text" placeholder="summary" value={summary} onChange={(e)=>setSummary(e.target.vlue)} />
                        <input className="form-control my-4 rounded-0" type="file" onChange={(e)=>setFile(e.target.files)} />
                        <ReactQuill value={content} onChange={newValue => setContent(newValue)}  modules={modules} formats={formats} />
                        {/* <textarea className="form-control my-4 rounded-0" placeholder="description for post" name="" id="" cols="30" rows="10"></textarea> */}
                        <button className="btn orange rounded-2 btn-lg my-4">Submit Post</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddPost;