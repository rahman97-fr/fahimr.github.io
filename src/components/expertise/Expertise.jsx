import React from 'react'
import './expertise.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Expertise = () => {
  return (
    <section id= 'expertise'>
      <h5>Presenting My</h5>
      <h2>Skills</h2>

     <div className='container expertise_container'>
        <div className='expertise_frontend'>
        <h3>Frontend Development</h3>
          <div className='expertise_content'>
             <article className='expertise_details'>
              <BsPatchCheckFill className='expertise_details-icon'/>
             <div> 
              <h4>HTML</h4>
              <small className='tect_light'>Intermediate</small>
             </div>
             </article>

             <article className='expertise_details'>
              <BsPatchCheckFill className='expertise_details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='tect_light'>Intermediate</small>
              </div>
             </article>

             <article className='expertise_details'>
              <BsPatchCheckFill className='expertise_details-icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className='tect_light'>Intermediate</small>
              </div>
             </article>

             <article className='expertise_details'>
              <BsPatchCheckFill className='expertise_details-icon'/>
              <div>
              <h4>jQuery</h4>
              <small className='tect_light'>Basic</small>
              </div>
             </article>

             <article className='expertise_details'>
              <BsPatchCheckFill className='expertise_details-icon'/>
              <div>
              <h4>Bootstrap</h4>
              <small className='tect_light'>Basic</small>
              </div>
             </article>

             <article className='expertise_details'>
              <BsPatchCheckFill className='expertise_details-icon'/>
              <div>
              <h4>React</h4>
              <small className='tect_light'>Intermediate</small>
              </div>
             </article>

          </div>
        </div>

      
        <div className='expertise_backend'>
           <h3>Backend Development</h3>
             <div className='expertise_content'>
              <article className='expertise_details'>
              <BsPatchCheckFill className='expertise_details-icon'/>
              <div>
              <h4>C#</h4>
              <small className='tect_light'>Basic</small>
              </div>
             </article>

             <article className='expertise_details'>
              <BsPatchCheckFill className='expertise_details-icon'/>
              <div>
              <h4>MongoDB</h4>
              <small className='tect_light'>Intermediate</small>
              </div>
             </article>

             <article className='expertise_details'>
              <BsPatchCheckFill className='expertise_details-icon'/>
              <div>
              <h4>MySQL</h4>
              <small className='tect_light'>Basic</small>
              </div>
             </article>

             <article className='expertise_details'>
              <BsPatchCheckFill className='expertise_details-icon'/>
              <div>
              <h4>Python</h4>
              <small className='tect_light'>Basic</small>
              </div>
             </article>

             <article className='expertise_details'>
              <BsPatchCheckFill className='expertise_details-icon'/>
              <div>
              <h4>Node.js</h4>
              <small className='tect_light'>Intermediate</small>
              </div>
             </article>

        </div>
        </div>
     </div>
    </section>
  )
}

export default Expertise