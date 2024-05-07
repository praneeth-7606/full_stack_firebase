// // import Image from "next/image";
// // import styles from "./page.module.css";

// // export default function Home() {
// //   return (
// //     <main className={styles.main}>
// //       <div className={styles.description}>
// //         <p>
// //           Get started by editing&nbsp;
// //           <code className={styles.code}>app/page.js</code>
// //         </p>
// //         <div>
// //           <a
// //             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //           >
// //             By{" "}
// //             <Image
// //               src="/vercel.svg"
// //               alt="Vercel Logo"
// //               className={styles.vercelLogo}
// //               width={100}
// //               height={24}
// //               priority
// //             />
// //           </a>
// //         </div>
// //       </div>

// //       <div className={styles.center}>
// //         <Image
// //           className={styles.logo}
// //           src="/next.svg"
// //           alt="Next.js Logo"
// //           width={180}
// //           height={37}
// //           priority
// //         />
// //       </div>

// //       <div className={styles.grid}>
// //         <a
// //           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
// //           className={styles.card}
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           <h2>
// //             Docs <span>-&gt;</span>
// //           </h2>
// //           <p>Find in-depth information about Next.js features and API.</p>
// //         </a>

// //         <a
// //           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
// //           className={styles.card}
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           <h2>
// //             Learn <span>-&gt;</span>
// //           </h2>
// //           <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
// //         </a>

// //         <a
// //           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
// //           className={styles.card}
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           <h2>
// //             Templates <span>-&gt;</span>
// //           </h2>
// //           <p>Explore starter templates for Next.js.</p>
// //         </a>

// //         <a
// //           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
// //           className={styles.card}
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           <h2>
// //             Deploy <span>-&gt;</span>
// //           </h2>
// //           <p>
// //             Instantly deploy your Next.js site to a shareable URL with Vercel.
// //           </p>
// //         </a>
// //       </div>
// //     </main>
// //   );
// // }
"use client"
import React from 'react';
import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
// import './styles/globals.css'; 
// import Google from './google/page';
import Signup from './signup';
import { Button, Card,Stack, Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image'; // Import Image component from next/image
import myimg from "./myimage1.jpeg"; // Correct the file extension to ".jpg"
import EmailIcon from '@mui/icons-material/Email';
import GoogleIcon from '@mui/icons-material/Google';
// import { Button } from 'react-bootstrap';
// import { GoogleIcon } from './GoogleIcon';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
const Page = () => {
  const router=useRouter()
  const [error, setError] = useState(null);

  // Instantiate the auth service SDK
  const auth = getAuth();

  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    try {
      // Sign in with a pop-up window
      await signInWithPopup(auth, provider);
      router.push("/home")
      // toast.success("Login successfully")



    } 
    catch (err) {
      setError(err.message);
      console.log(err.message)
      alert(err.message)
      toast.error(err.message)
    }
  };

  const email=()=>{
    router.push("/login")

  }
  const buttonStyle = {
    border: '1px solid rgba(0, 0, 0, 0.1)', // Border with very light opacity
   
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Transparent background
    color: '#000000', // Text color
    opacity: 0.9 // Adjust opacity as needed
};
    return (
      <div style={{ backgroundColor: '#001f3f', color: '#ffffff', overflow: 'hidden' }}>
      <Container fluid>
        <Row>
          <Col xs={12} md={6} className="p-0">
            <div className="half-page-image d-flex align-items-center justify-content-center" style={{ height: '100vh', }}>
              <Image src={myimg} alt="Half page image" className="img-fluid" style={{  height: '100vh' }} />
            </div>
          </Col>
          <Col xs={12} md={6} className="p-0">
          
          {/* <span style={{ textAlign: "center"}}>Journey of trillion miles starts from here</span> */}
            <div className="half-page-card d-flex align-items-center justify-content-center">
            
              <div className="p-2 w-50 ">
              <p style={{ textAlign: "center", paddingBottom: "40%" }}>Journey to a trillion miles starts from here</p>
                <center><h1><strong>Sign up</strong></h1></center>
                <center><p>Choose a sign up method</p></center>
                <Stack gap={3} style={{ paddingTop: "20%" }}>
                  <Button style={buttonStyle} onClick={handleGoogleSignUp}>
                    <GoogleIcon />
                    <span className="ms-2">Sign in with Google</span>
                  </Button>
                  <Button style={buttonStyle} onClick={email}>
                    <EmailIcon />
                    <span className="ms-2">Sign in with Email</span>
                  </Button>
                  <br />
                  <center><p>Already a user ? <a style={{ textDecoration: "none" }} href="/login">Login</a></p></center>
                </Stack>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    );
}

export default Page;
