import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { url } from "../App";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function Register() {
  
 
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  let navigate = useNavigate();
useEffect(() => {

}, []);
 
  let handleSubmit = async () => {
    let reqBody = {
     name,
     password,
     email
    };
    let res = await axios.post(`${url}/signup`, reqBody);
    if (res.data.statusCode >= 200) {
      navigate("/Login");
    } else {
      console.log(res.data.message);
    }
  };

 
  return (
    <>
      <Form >
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

      

        <Button variant="primary" onClick={() => handleSubmit()}>
          Submit
        </Button>
      </Form>
      <div >
               
                <Link to='/Login'><button >Login?</button></Link>
            </div>
    </>
  );
}

export default Register;
