import React from 'react'
import ME from '../../assets/meeeeee.jpeg'
import './About.css'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


import {FaAward} from 'react-icons/fa'
const About = () => {
  return (
    <section id='about'>
     <h5>Get To Know </h5>
     <h2>About Me</h2>

     <div className= 'container about__container'> 
         <div className="about__me">               
              <div className="about__me-image">
                <img src={ME} alt=''/>
              </div>
         </div>
         
         <div className="about__content">
          <div className="about__cards">
              <article className='about__card'>
                  <FaAward className='about__icon'/>
               <h5>Experience</h5>
               <small> 1 year working</small>
              </article>
              <article className='about__card'>
                  <FiUsers className='about__icon'/>
               <h5>Clients</h5>
               <small> Many Clients in Canada</small>
              </article>
              <article className='about__card'>
                  <VscFolderLibrary className='about__icon'/>
               <h5>Projects</h5>
               <small> 4 Projects Completed from scratch, <br></br>and many projects updated/debugged</small>
              </article>
          </div>
          <p>Innovative, knowledgeable, detail oriented, and task-driven Web App Developer and designer equipped with a diverse and promising
             skill-set including different programming languages. </p>
               <a href="contact" className='btn btn-primary'>Lets's Talk</a>
         </div>
     </div>
    
    </section>
  )
}

export default About