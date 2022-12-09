import React from 'react'
import './service.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Wire framing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Usability studies, and user research.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Prototyping.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Storyboarding .</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Visual Design.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Interaction Design .</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Flow Mapping .</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Single and Multiple page websites.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Conceptual and Dynamic websites.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Online Payment Integration.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Custom Forms.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Striking Hover effects.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Social Media Integration.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> PHP, React, JQuery,JavaScript.
              </p>
              
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Word Press, Shopify.
              </p>
              
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services