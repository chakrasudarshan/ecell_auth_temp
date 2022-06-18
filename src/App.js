import React,{useState,useEffect} from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth , GoogleAuthProvider , signInWithPopup} from 'firebase/auth';
import GoogleButton from 'react-google-button'
import 'bootstrap/dist/css/bootstrap.css';
import { Container,Button } from 'react-bootstrap';
import './bootstrap.min.css'
import './App.css';



const firebaseConfig = {
  apiKey: "AIzaSyBcQr-xm0gqX0C0eB025v63feoRXRyx6dM",
  authDomain: "team-expansion-54ae7.firebaseapp.com",
  databaseURL: "https://team-expansion-54ae7-default-rtdb.firebaseio.com",
  projectId: "team-expansion-54ae7",
  storageBucket: "team-expansion-54ae7.appspot.com",
  messagingSenderId: "932038990518",
  appId: "1:932038990518:web:b67532c58cf678c6bfa417",
  measurementId: "G-W310M4WJL0"
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
      <img  src={user.photoURL} alt="Error loading"/>
      <br/>
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