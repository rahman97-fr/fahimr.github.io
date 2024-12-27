import React from 'react'
import './about.css'
import ME from '../../assets/my_avatar.png'

const About = () => {
  return (
    <section id= 'about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      
      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt='About Image' />
          </div>
        </div>
        <div className='about_content'>
          <p>
            I am a dedicated web developer and skilled UI/UX designer with a talent for creating immersive and user-centric websites. 
            Possessing a robust proficiency in both front-end and back-end technologies, I have a specialization in transforming concepts into 
            vibrant digital experiences. My job is to build your website so that it is functional and user-friendly but at the same time attractive.
            Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring
            across your message and identity in the most creative way.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About