import React, { useState } from 'react'
import '../css/header.css'
import logo from "../images/logo.jpg";
import { FaShoppingBasket } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";

function Header() {
    const [theme,setTheme] = useState(false);

    const changeTheme = () => {
        const root = document.getElementById("root");
        setTheme(!theme);
        if(theme){
            root.style.backgroundColor='black';
            root.style.color="#fff"
        }else{
            root.style.backgroundColor='#fff';
            root.style.color="black"
        }
    }

    return (
        <div style={{display:'flex',flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
            <div className='flex-row'>
                <img className='logo' src={logo} />
                <p className='logoText'>A Company</p>
            </div>
            <div className='flex-row'>
                <input className="input-search" type='text' placeholder='Aramak için yazın'/>
                <div >
                    <FaShoppingBasket className='icon' />
                    {
                        theme ? (<FaMoon className='icon' onClick={changeTheme} /> ) :<CiLight className='icon' onClick={changeTheme}/> 
                    }                     
                    
                </div>
                
            </div>
        </div>
    )
}

export default Header