import React from 'react'
import ME from '../../assets/meee.png'
import CTA from './CTA'
import Hedersocial from './hedersocial'
import './Header.css'



const Header = () => {
  return (
<header>
<div className="container header__container">

<h5>Hi I'm</h5>
<h1>MOSTAFA ISMAIL</h1>
<h5 className="text-light"> Fullstack Developer</h5>
<CTA/>
<Hedersocial/>
<div className='me'>

   <img src={ME} alt='me'></img> 
</div>
<a href='#contact' className='scrll__down'>Scrll Down</a>
</div>

</header>
  )
}

export default Header;