import React, { use, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,signInWithPopup,GoogleAuthProvider  } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";

const provider = new GoogleAuthProvider();

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigator = useNavigate();

  const register = async () => {
    try {
      
      const registerResult = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = registerResult.user;

      if (user) {
        toast.success("Kullanıcı başarıyla oluşturuldu");
        setEmail("");
        setPassword("");
      }
    } catch (e) {
      toast.error("Hata oluştu: " + e.message);
    }
  };

const login = async ()=>{
  try{
     var loginResponse = await signInWithEmailAndPassword(auth, email, password);
     if(loginResponse.user){
      toast.success("Kullanıcı oturumu başarıyla açıldı");
      navigator('/');
     }
  }catch(e){
    toast.error("Oturum Açılamadı: " + e.message)
  }
}

const loginWithGoogle = async() => {
  try {
    const response = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(response);
    const token = credential.accessToken;
    const user= response.user;

    if(user){
      toast.success("Google ile oturum açma başarılı");
      navigator("/");
    }
  } catch (error) {
    toast.error("Hata oluştu: " + error.message)
    
  }
}


  return (
    <div className="auth">
      <h3 className="auth-header">Giriş Yap / Kayıt ol </h3>
      <div className="input-div">
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email adresinizi giriniz"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="parolanızı girin"
        />
      </div>
      <div>
        <button className="google-button" onClick={loginWithGoogle}>
          <FaGoogle style={{ marginTop: "2px" }} /> Google ile Giriş Yap
        </button>
        <button className="login-button" onClick={login}>Giriş Yap</button>
        <button className="register-button" onClick={register}>
          Kaydol
        </button>
      </div>
    </div>
  );
}

export default Auth;
