import React,{useState,useEffect} from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth , GoogleAuthProvider , signInWithPopup} from 'firebase/auth';

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
    return <div>
      <h1>Welcome {user.displayName}. You have successfully signed in!!</h1>
      <img  src={user.photoURL} alt=""/>
      <br/>
      <button onClick={()=>{
        auth.signOut();
      }
      }>Sign Out</button>
    </div>
  }
  return <div>
    
    <button onClick={handleGoogleSignIn}>Sign In with Google</button>
  </div>

}

export default App;