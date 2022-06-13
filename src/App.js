import React,{useState,useEffect} from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth , GoogleAuthProvider , signInWithPopup} from 'firebase/auth';
import GoogleButton from 'react-google-button'
import 'bootstrap/dist/css/bootstrap.css';
import { Container,Button } from 'react-bootstrap';
import './bootstrap.min.css'
import './App.css';



const firebaseConfig = {
  apiKey: "AIzaSyCnHmvJAbXMX11ZR8R31Vung1UEya-ciMA",
  authDomain: "g-signin-84cf8.firebaseapp.com",
  projectId: "g-signin-84cf8",
  storageBucket: "g-signin-84cf8.appspot.com",
  messagingSenderId: "995714433330",
  appId: "1:995714433330:web:fa424d83404d769c6c972b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const SignInFirebase =()=>{
  const google_provider = new GoogleAuthProvider();
 signInWithPopup(auth,google_provider)
  .then((re) =>{
    console.log(re)
  }).catch((err)=>{
    console.log(err);
  })
};
const handleGoogleSignIn = () => {  
  const google_provider = new GoogleAuthProvider();
 signInWithPopup(auth,google_provider)
  .then((re) =>{
    console.log(re)
  }).catch((err)=>{
    console.log(err);
  })
}
const App = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setUser(user);
    });
  }
  , []);
  if(user){
    return (<Container style={{display: 'flex',flexDirection: 'column', justifyContent:'center', alignItems:'center', height: '70' ,width:'80vh',marginTop:'20vh',border:'6px solid black'}}>
    <div style={{display: 'flex',flexDirection: 'column', justifyContent:'center', alignItems:'center',marginTop:'2vh'}}>
      <h1>Welcome {user.displayName}!!</h1>
      <h5>{user.email}</h5>
      <h4>You have successfully logged in</h4>
      <img  src={user.photoURL} alt=""/>
      <br/>
      <Button onClick={()=>{
        auth.signOut();
      }
      } variant="danger">
      Sign Out </Button>
    </div>
    </Container>
    );
  }
  return (
    <>
<Container  style={{display: 'flex',flexDirection: 'column', justifyContent:'center', alignItems:'center', height: '50vh',width:'50vh',marginTop:'20vh',border:'10px solid black'}}  className="contact-content debug-border">
    <h1 className="text-center"> Sign-In to continue</h1>
    <br/>
    <GoogleButton mt={50} className="justify-content-center" onClick={handleGoogleSignIn}/>
    </Container>  
    </>
  
  );
}

export default App;