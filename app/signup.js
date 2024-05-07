// SignUp.js
"use client"
import React, {useState} from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from './firebase';
import { Form, Button, Container,Card } from "react-bootstrap";
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import {toast} from "react-toastify"
import { useRouter } from 'next/navigation';
const Signup = () => {
    // const navigate = useNavigate();
    const [name, setname] = useState("")
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('');
    const  router=useRouter()
    const onSubmit = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            router.push("login")
            toast.success("successfully signup completed")
            // navigate("/login")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            if (errorCode === 'auth/email-already-in-use') {
                toast.error("The provided email is already in use.");
            } else {
                // Handle other errors
                toast.error(errorMessage);
            }
        });
 
   
    }
 
  return (
    <div className='signup'>
    <div className="container-fluid">
        
            <div className=" row justify-content-center align-items-center" style={{ minHeight: "5vh" }}>
                <div className="col-md-3  pb-5 ">
                    <Card className=" pl-2 mt-4  ">
                        <Card.Body>
                            <h1 className="text-center mb-3">Welcome To Signup Page</h1>
                            <Form onSubmit={onSubmit}>
                                <Form.Group className="mb-2" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <div className="input-group">
                                        <span className="input-group-text"><EmailIcon/></span>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter email"
                                            name="email"
                                            required
                                            value={email}
                                            onChange={(e)=>setemail(e.target.value)}
                                        />
                                    </div>
                                </Form.Group>

                                <Form.Group className="mb-2" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <div className="input-group">
                                        <span className="input-group-text"><KeyIcon/></span>
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            name="password"
                                            value={password}
                                            required
                                            onChange={(e)=>setpassword(e.target.value)}
                                        />
                                    </div>
                                </Form.Group>
                                <Form.Group className="mb-2" controlId="formBasicName">
                                    <Form.Label>Name</Form.Label>
                                    <div className="input-group">
                                        <span className="input-group-text"><KeyIcon/></span>
                                        <Form.Control
                                            type="text"
                                            placeholder="Name"
                                            name="name"
                                            required
                                            value={name}
                                            onChange={(e)=>setname(e.target.value)}
                                        />
                                    </div>
                                </Form.Group>
                                {/* <Form.Group className="mb-2" controlId="formBasicRole">
                                    <Form.Label>Role</Form.Label>
                                    <div className="input-group">
                                        <span className="input-group-text"><KeyIcon/></span>
                                        <Form.Control
                                            type="number"
                                            placeholder="role"
                                            name="role"
                                            value={role}
                                            required
                                            onChange={(e)=>setrole(e.target.value)}
                                        />
                                    </div>
                                    </Form.Group> */}
                                    {/* <Form.Group className="mb-2" controlId="formBasicName">
                                    <Form.Label>Your Question</Form.Label>
                                    <div className="input-group">
                                        <span className="input-group-text"><KeyIcon/></span>
                                        <Form.Control
                                            type="text"
                                            placeholder="what is your  favorite  sports "
                                            name="question"
                                            required
                                            value={question}
                                            onChange={(e)=>setquestion(e.target.value)}
                                        />
                                    </div>
                                </Form.Group> */}
                                  
                                

                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Remember me" />
                                </Form.Group>

                                

                                <Button
                                    variant="primary"
                                    type="submit"
                                    className="btn btn-primary w-100" 
                                >
                                    Submit
                                </Button>
                                <div className="text-center pt-2">
                                <a   style={{textDecoration:"none"}}href="/login">login</a>
                                </div>
                                
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            </div>
        </div>
  )
}
 
export default Signup