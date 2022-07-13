import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const DiscussionContent = (props) =>{
    
    const [postList, setPostList] = useState([]);

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/discussion`)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setPostList(res.data);
        })
        .catch((err)=>{
            console.log("Issue retrieving all discussion posts!", err);
        })
    })

    return (
        
        <div class="container mt-5 mb-5">

            <Link class="text-decoration-none" to={"/discussion/new"}>Add New Discussion Post</Link>
            
            <table class="table mt-4">
                <thead>
                    <tr>
                        <th>Author:</th>
                        <th scope="col">Discussion Topic:</th>
                        <th scope="col">Date:</th>
                        <th>Actions: </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        postList.map((post, index)=>(
                            <tr key={post._id}>
                                <td class="text-secondary font-weight-bold">{post.name}</td>
                                <td>{post.description}</td>
                                <td>{post.date.substr(0,10)}</td>
                                <td><Link class="text-decoration-none" to={`/discussion/view/${post._id}`}>View</Link> | <Link class="text-decoration-none" to={`/discussion/edit/${post._id}`}>Edit</Link></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}



export default DiscussionContent;