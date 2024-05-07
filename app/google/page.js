
"use client"

import { useState } from "react";
import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
// import { Button } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import { Button } from "react-bootstrap";
// import { Toast } from "react-bootstrap";
import {toast} from "react-toastify";
import app from "../firebase";
import { useRouter } from "next/navigation";
// import googleLogo from "../assets/images/googleLogo.webp";

const Page = () => {
  const router=useRouter()
  const [error, setError] = useState(null);

  // Instantiate the auth service SDK
  const auth = getAuth();

  const buttonStyle = {
    border: '1px solid rgba(0, 0, 0, 0.1)', // Border with very light opacity
    backgroundColor: 'transparent', // Transparent background
    color: '#000000', // Text color
    opacity: 0.9 // Adjust opacity as needed
};
  // Handle user sign up with Google
  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    try {
      // Sign in with a pop-up window
      await signInWithPopup(auth, provider);
      router.push("/home")
      // toast.success("Login successfully")



    } catch (err) {
      setError(err.message);
      console.log(err.message)
      alert(err.message)
      toast.error(err.message)
    }
  };

  return (
    <div className='signupContainer'>
      <div className='signupContainer__box__google'>
      
        <Button style={buttonStyle}  onClick={handleGoogleSignUp}>
        <GoogleIcon/> 
            <span className="ms-2">Sign in with Google</span> {/* Text next to the icon */}
        </Button>
        {/* {error && <p>{error}</p>} */}
      </div>
    </div>
  );
};

export default Page;
