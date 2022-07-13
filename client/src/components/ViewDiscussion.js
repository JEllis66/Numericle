import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";
import logo from "../images/logo.png";

const OnePost = (props) =>{

    const [post, setPost] = useState({});
    const navigate = useNavigate();
    const {id} = useParams();


    useEffect(()=>{

        axios.get(`http://localhost:8000/api/discussion/${id}`)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setPost(res.data);
        })
        .catch((err)=>{
            console.log("Get one post query has failed", err)
        })

    },[id])

    return (
        <div class="container ">
            <header class="container d-flex justify-content-between align-middle">    
                <h1 class="text-primary pt-3">
                    <Link class='text-decoration-none' to={"/"}><p><span><img class="icons mb-2" id="logoTop" src={logo} alt="numericleLogo.png"/></span>umericle</p></Link>
                </h1>
                <Link class="text-decoration-none mt-3 pt-3" to={"/discussion"}>Back to Discussion Board</Link>
            </header>
            
            <hr class="mt-0"/>

            <div class="col-4"></div>
                <div class="col-4 text-start mt-4 mb-4">        
                    
                            <div key={post._id}>
                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <th scope="row">Posted by:</th>
                                            <td>{post.name}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Date:</th>
                                            <td>{post.date}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Description:</th>
                                            <td>{post.description}</td>
                                        </tr>
                                        <Link to={`/discussion/edit/${post._id}`}><button class="btn btn-warning mt-3">Edit Post</button></Link>
                                    </tbody>
                                </table>
                                    
                            </div>
                </div>
                <div class="col-4"></div>  
        </div>
    )
}



export default OnePost;