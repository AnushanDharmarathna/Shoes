import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { HomeContext } from '../../Context/HomeContext'

const Navbar = () => {
    const [menu,setMenu] = useState("home");
    const {getTotalCartItems} = useContext(HomeContext);
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt=''/>
            <p>SHOES</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration: 'none'}} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("nike")}}><Link style={{textDecoration: 'none'}} to='/nike'>Nike</Link>{menu==="nike"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("addidas")}}><Link style={{textDecoration: 'none'}} to='/addidas'>Addidas</Link>{menu==="addidas"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("reebok")}}><Link style={{textDecoration: 'none'}} to='/reebok'>Reebok</Link>{menu==="reebok"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
            <Link to='/login'><button>Login</button></Link>
            <Link to='cart'><img src={cart_icon} alt='' /></Link>
            <div className='nav-cart-count'>{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar