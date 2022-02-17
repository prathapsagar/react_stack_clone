import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { url } from "../App";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";


function Login() {
  
 
 let [password, setPassword] = useState("");
 let [email, setEmail] = useState("");
 let navigate = useNavigate();
 useEffect(() => {}, []);

 let handleSubmit = async () => {
   let reqBody = {
  
     password,
     email,
   };
   let res = await axios.post(`${url}/login`, reqBody);
   if (res.data.statusCode === 200) {
     navigate("/questions");
   } else {
     console.log(res.data.message);
   }
 };

 return (
   <>
     <Form>
      
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
     
   </>
 );
}

export default Login;
