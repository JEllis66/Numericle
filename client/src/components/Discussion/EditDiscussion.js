import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";
import logo from "../../images/logo.png"

const NewPost = (props) =>{

    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const {id} = useParams();


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/discussion/${id}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setName(res.data.name);
                setDate(res.data.date);
                setDescription(res.data.description);
            })
            .catch((err)=>{
                console.log("Retrieval of edit form data failed", err);
            }
            )
    },[id])

    const submitHandler = (e) =>{
        e.preventDefault();

        axios.put(`http://localhost:8000/api/discussion/${id}`,
        {
            name,
            date,
            description,
        })
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                navigate("/discussion");
            })
            .catch((err)=>{
                console.log("Put request failed for submitting edits for the Discussion Post", err);
                console.log("err.response:", err.response);
                console.log("err.response.data:", err.response.data);
                console.log("err.response.data.errors:", err.response.data.errors);
                setErrors(err.response.data.errors)
            })
    }

    const deleteHandler = (id)=>{
        axios.delete(`http://localhost:8000/api/discussion/${id}`)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            navigate("/discussion");
        })
        .catch((err)=>{
            console.log("Delete one post Delete Handler has failed", err)
        })
    }

    return (
        <div class="container">
            <header class="container d-flex justify-content-between align-middle">    
                <h1 class="text-primary pt-3">
                    <Link class='text-decoration-none' to={"/"}><p><span><img class="icons mb-2" id="logoTop" src={logo} alt="numericleLogo.png"/></span>umericle</p></Link>
                </h1>
                <Link class="text-decoration-none mt-3 pt-3" to={"/discussion"}>Back to Discussion Board</Link>
            </header>
            
            <hr class="mt-0"/>

            <div class="text-start">
                <form class="form-inline" onSubmit={submitHandler}>
                    <div class="form-group mt-3">
                        <label class="text-start">
                            Name: {errors.name ? <span class="text-danger font-italic">{errors.name.message}</span>:null}
                            <input class="form-control" value={name} onChange={(e) => setName(e.target.value)} type="text" />
                        </label>
                    </div>
                    <div class="form-group mt-3">
                        <label class="text-start">
                            Date: {errors.date ? <span class="text-danger font-italic">{errors.date.message}</span>:null}
                            <input class="form-control"  value={date} onChange={(e) => setDate(e.target.value)} type="date" />
                        </label>
                    </div>
                    <div class="form-group mt-3">
                        <label class="text-start">
                            Description: {errors.description ? <span class="text-danger font-italic">{errors.description.message}</span>:null}
                            <input class="form-control"  value={description} onChange={(e) => setDescription(e.target.value)} type="text" />
                        </label>
                    </div>
                    <div class="form-group">
                        <label class=" text-start mt-4">
                            <button class="btn btn-success">Submit Edit</button>
                        </label>
                    </div>
                </form>
                <button onClick={()=> deleteHandler(id)} class="btn btn-danger mt-3">Delete Post</button>
            </div>
        </div>
    )
}



export default NewPost;