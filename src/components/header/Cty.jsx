import React from 'react'
import cvv from '../../images/SanaSainath Resumee.pdf'
const Cty = () => {
  return (
    <div className='cta'>
        <a href={cvv} download className='btn'> Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      
    </div>
  )
}

export default Cty
