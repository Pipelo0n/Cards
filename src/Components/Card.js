import React from 'react'
import image1 from '../assets/image1.jpg'

function Card () {
  return (
    <div className='card text-center bg-dark '>
      <img src={image1} alt='' />
      <div className='card-body text-light'>
        <h4 className='card-tittle'>Este es un titulo</h4>
        <p className='card-text text-secondary'> hola, este es un parrafo, chao</p>
        <a href='#!' className='btn btn-outline-secondary rounded-5'>
          entra a este botoncito
        </a>
      </div>
    </div>
  )
}

export default Card