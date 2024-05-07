// Login.js
'use client'
import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from './firebase';
import { Form, Button, Container,Card } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import { TextField } from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email';
import Link from 'next/link';
import KeyIcon from '@mui/icons-material/Key';
import styles from './login.module.css';
import {toast} from "react-toastify"
import { useRouter } from 'next/navigation';
 
function Login  ()  {

    const router = useRouter();
    // const navigate = useNavigate();
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [verified, setVerified] = useState(false);
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
        // Display toast notification
        toast.success("Login successfully");
        router.push("/home");
        // Navigate to home page after a slight delay
        
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
            if (errorCode === 'auth/invalid-credential') {
                toast.error("Invalid email or password. Please try again.");
            } else if (errorCode === 'auth/wrong-password') {
                toast.error("Invalid email or password. Please try again.");
            } else if (errorCode === 'auth/too-many-requests') {
                toast.error("Too many unsuccessful login attempts. Please try again later.");
            } else {
                toast.error(errorMessage);
            }
        });
       
    }
    const handleRecaptchaChange = () => {
        setVerified(true);
    };
 
    return(
        
        <div className="mylogin">
        <div className="container-fluid" >
            <div className="row justify-content-center align-items-center" style={{ minHeight: "5vh" }}>
                <div className="col-md-3  pb-5 ">
                    <Card className="pl-2 mt-4">
                        <Card.Body>
                            <h1 className="text-center mb-4"> Login Form</h1>
                            <Form onSubmit={onLogin}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <div className="input-group">
                                        <span className="input-group-text"><EmailIcon/></span>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter email"
                                            name="email"
                                            value={email}
                                            onChange={(e)=>setemail(e.target.value)}
                                        />
                                    </div>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <div className="input-group">
                                        <span className="input-group-text"><KeyIcon/></span>
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            name="password"
                                            value={password}
                                            onChange={(e)=>setpassword(e.target.value)}
                                        />
                                    </div>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Remember me" />
                                </Form.Group>

                                <Form.Group   className="mb-3 " controlId="formBasicRecaptcha">
                                    <ReCAPTCHA 
                                        sitekey="6LeBJ9QpAAAAAJ9LGQy8IoArqeVmkvUruQrRcwfQ"
                                        onChange={handleRecaptchaChange}
                                    />
                                </Form.Group>

                                
                                
                                <Button
                                    variant="primary"
                                    type="submit"
                                    onClick={()=>{router.push("/forgotpassword")}}
                                    className="btn btn-primary  w-100"
                                    // style={{width:"10%"}}
                                >
                                    Forgot password
                                </Button>
                                <Button
                                    variant="primary"
                                    type="submit"
                                    className="btn btn-success mt-3 w-100"
                                    disabled={!verified}
                                >
                                    Login
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
        </div>
    )
}
 
export default Login
