import React from 'react';
import './contacts.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Contact = () => {
  return (
    <section id='contact'>
      <h5>More Information</h5>
      <h2>Contacts & Credentials</h2>

      <div className='container contact_container'>
        <div>
          <h3>Contact Info</h3>
          <div className='contact_content'>
            <article className='contact_details'>
              <BsPatchCheckFill className='contact_details-icon' />
              <div>
                <h4>Email</h4>
                <small className='tect_light'>
                  <a href='mailto:rahman.fahim@icloud.com'>rahman.fahim@icloud.com</a>
                </small>
              </div>
            </article>

            <article className='contact_details'>
              <BsPatchCheckFill className='contact_details-icon' />
              <div>
                <h4>Phone</h4>
                <small className='tect_light'>+1(819)238-3618</small>
              </div>
            </article>

            <article className='contact_details'>
              <BsPatchCheckFill className='contact_details-icon' />
              <div>
                <h4>LinkedIn</h4>
                <small className='text_light'>
                  <a href='https://www.linkedin.com/in/your-linkedin-profile' target='_blank' rel='noopener noreferrer'>
                    LinkedIn Profile
                  </a>
                </small>
              </div>
            </article>

            <article className='contact_details'>
              <BsPatchCheckFill className='contact_details-icon' />
              <div>
                <h4>GitHub</h4>
                <small className='text_light'>
                  <a href='https://github.com/your-github-profile' target='_blank' rel='noopener noreferrer'>
                    GitHub Profile
                  </a>
                </small>
              </div>
            </article>
          </div>
        </div>

        <div className='contact_backend'>
          <h3>Credentials</h3>
          <div className='contact_content'>
            <article className='contact_details'>
              <BsPatchCheckFill className='contact_details-icon' />
              <div>
                <h4>Bachelor of Science in Computer Science</h4>
                <small className='tect_light'>Carleton University, Ottawa, ON</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
