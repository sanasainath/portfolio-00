import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const experience = () => {
  return (
    <section id="experiences">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
        <div className='experience__frontend'>
<h3>Frontend Development</h3>
<div className='experience__content'>
  <article className='experience__details'>
<BsPatchCheckFill className='experience__details__icon'/>
<div className='experience__details1'>
<h4>HTML</h4>
<small className='text-light'>experienced</small>
</div>
  </article>
  <article className='experience__details'>
<BsPatchCheckFill className='experience__details__icon'/>
<div className='experience__details1'>
<h4>CSS</h4>
<small className='text-light'>experienced</small>
</div>
  </article>
  <article className='experience__details'>
<BsPatchCheckFill className='experience__details__icon'/>
<div className='experience__details1'>

<h4>JavaScript</h4>

<small className='text-light'>experienced</small>
</div>
  </article>
  <article className='experience__details'>
<BsPatchCheckFill className='experience__details__icon'/>
<div className='experience__details1'>

<h4>BootStrap</h4>
<small className='text-light'>experienced</small>
</div>
  </article>
  <article className='experience__details'>
<BsPatchCheckFill className='experience__details__icon'/>
<div className='experience__details1'>

<h4>React</h4>
<small className='text-light'>experienced</small>
</div>
  </article>
 
</div>
        </div>
        <div className='experience__backend'>
<h3>Backend Development</h3>
<div className='experience__content'>
  <article className='experience__details'>
<BsPatchCheckFill className='experience__details__icon'/>
<div className='experience__details1'>
<h4>PhP</h4>
<small className='text-light'>experienced</small>
</div>
  </article>
  <article className='experience__details'>
<BsPatchCheckFill className='experience__details__icon'/>
<div className='experience__details1'>
<h4>Node.Js</h4>
<small className='text-light'>experienced</small>
</div>
  </article>
  <article className='experience__details'>
<BsPatchCheckFill className='experience__details__icon'/>
<div className='experience__details1'>
<h4>Express.Js</h4>

<small className='text-light'>experienced</small>
</div>
  </article>
  <article className='experience__details'>
<BsPatchCheckFill className='experience__details__icon'/>
<div className='experience__details1'>
<h4>MongoDB</h4>
<small className='text-light'>experienced</small>
</div>
  </article>
  <article className='experience__details'>
<BsPatchCheckFill className='experience__details__icon'/>
<div className='experience__details1'>
<h4>MySQL</h4>
<small className='text-light'>experienced</small>
</div>
  </article>
</div>
        </div>
      </div>

    </section>
  )
}

export default experience
