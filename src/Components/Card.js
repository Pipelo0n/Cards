import React from 'react'
import image1 from '../assets/image1.jpg'

function Card () {
  return (
    <div className='card text-center bg-dark '>
      <img src={image1} alt='' />
      <div className='card-body text-light'>
        <h4 className='card-tittle'>My Tittle</h4>
        <p className='card-text text-secondary'> Era un pueblecito rayano, Ribamoura, vivero de contrabandistas, donde esta profesión de riesgo y lucro hacía a la gente menos dormida de lo que suelen ser los pueblerinos. Abundaban los mozos de cabeza caliente, y se desdeñaba al que no era capaz de coger una escopeta y salir a la ganancia.</p>
        <a href='#!' className='btn btn-outline-secondary rounded-5'>
          Go to this wabsite
        </a>
      </div>
    </div>
  )
}

export default Card