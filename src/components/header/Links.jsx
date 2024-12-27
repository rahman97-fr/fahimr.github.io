import React from 'react'
import resume from '../../assets/Resume.pdf'

const Links = () => {
  return (
    <div className='links'>
        <a href={resume} download className='btn'>Download CV</a>
        <a href="contacts" className='btn btn-primary'>let's Chat</a>
    </div>
  )
}

export default Links