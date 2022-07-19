import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import logo from "../../images/logo.png"

const NewPet = (props) =>{

    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const submitHandler = (e) =>{
        e.preventDefault();

        axios.post(`http://localhost:8000/api/discussion`,
        {
            name,
            date,
            description
        })
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                navigate("/discussion");
                setName('');
                setDate('');
                setDescription('');
            })
            .catch((err)=>{
                console.log("Post request failed for creating new Discussion entry", err);
                console.log("err.response:", err.response);
                console.log("err.response.data:", err.response.data);
                console.log("err.response.data.errors:", err.response.data.errors);
                setErrors(err.response.data.errors)
            })
    }



    return (
        <div class="container ">
            <header class="container d-flex justify-content-between align-middle">    
                <h1 class="text-primary pt-3">
                    <Link class='text-decoration-none' to={"/"}><p><span><img class="icons mb-2" id="logoTop" src={logo} alt="numericleLogo.png"/></span>umericle</p></Link>
                </h1>
                <Link class="text-decoration-none mt-3 pt-3" to={"/discussion"}>Back to Discussion Board</Link>
            </header>
            
            <hr class="mt-0"/>

            <div class="text-start">
                <h2 class="text-secondary"> Add a Discussion Post!</h2>
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
                            <button class="btn btn-primary">Add Post</button>
                        </label>
                    </div>
                </form>
            </div>
        </div>
    )
}



export default NewPet;