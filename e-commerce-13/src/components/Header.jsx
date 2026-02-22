import React, { useState } from 'react'
import '../css/header.css'
import logo from "../images/logo.jpg";
import { FaShoppingBasket } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawer } from '../redux/slices/basketSlice';
import {useNavigate} from 'react-router-dom'


function Header() {
    const [theme, setTheme] = useState(false);

    var {products} = useSelector((store)=>store.basket)
    const dispatch = useDispatch();
    const navigator = useNavigate();

    const changeTheme = () => {
        setTheme(!theme);
        const root = document.getElementById("root");
        setTimeout(() => {
            if (theme) {
                root.style.backgroundColor = 'black';
                root.style.color = "#fff"
            } else {
                root.style.backgroundColor = '#fff';
                root.style.color = "black"
            }
        }, 100);


    }

    return (
        <div style={{ display: 'flex', flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <div className='flex-row'>
                <img className='logo' src={logo} onClick={()=>{navigator('/')}}/>
                <p className='logoText'>A Company</p>
            </div>
            <div className='flex-row'>
                <input className="input-search" type='text' placeholder='Aramak için yazın' />
                <div >                    
                    {
                        theme ? (<FaMoon className='icon' onClick={changeTheme} />) : <CiLight className='icon' onClick={changeTheme} />
                    }
                    <Badge onClick={()=>{dispatch(setDrawer())}} badgeContent={products.length} color="error">
                        <FaShoppingBasket style={{marginRight:'8px'}} className='icon' />
                    </Badge>
                   

                </div>

            </div>
        </div>
    )
}

export default Header