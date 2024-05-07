// import googleLogo from "../assets/images/googleLogo.webp";
// import { Link } from "react-router-dom";
// import {
//   signInWithPopup,
//   GoogleAuthProvider,
//   getAuth
// } from "firebase/auth";
// import { useState } from "react";

// const GoogleSignUp = () => {
//   const [error, setError] = useState(false);
//   const [googleErrorMessage, setGoogleErrorMessage] = useState("");

//   // Instantiate the auth service SDK
//   const auth = getAuth();

//   // Handle user sign up with google
//   const handleGoogleSignUp = async (e) => {
//     e.preventDefault();

//      // Instantiate a GoogleAuthProvider object
//     const provider = new GoogleAuthProvider();
    
//     try {
//       // Sign in with a pop-up window
//       const result = await signInWithPopup(auth, provider);

//       // Pull signed-in user credential.
//       const user = result.user;
//     } catch (err) {
//       // Handle errors here.
//       const errorMessage = err.message;
//       const errorCode = err.code;

//       setError(true);

//       switch (errorCode) {
//         case "auth/operation-not-allowed":
//           setGoogleErrorMessage("Email/password accounts are not enabled.");
//           break;
//         case "auth/operation-not-supported-in-this-environment":
//           setGoogleErrorMessage("HTTP protocol is not supported. Please use HTTPS.")
//           break;
//         case "auth/popup-blocked":
//           setGoogleErrorMessage("Popup has been blocked by the browser. Please allow popups for this website.")
//           break;
//         case "auth/popup-closed-by-user":
//           setGoogleErrorMessage("Popup has been closed by the user before finalizing the operation. Please try again.")
//           break;
//         default:
//           setGoogleErrorMessage(errorMessage);
//           break;
//       }
//     }
//   };

//   return (
//     <div className='signupContainer'>
//       <div className='signupContainer__box__google'>
//         <button onClick={handleGoogleSignUp}>
//           <span>
//             <img src={googleLogo} alt='Google Logo' />
//           </span>
//             Sign Up with Google
//         </button>
//           {error && <p>{googleErrorMessage}</p>}
//       </div>

//           <div className='signupContainer__box__login'>
//             <p>
//               Already have an account? <Link to='/signin'>Sign In</Link>
//             </p>
//           </div>
//         </div>
//     //   </div>
//     // </div>
//   );
// };

// export default GoogleSignUp;
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
