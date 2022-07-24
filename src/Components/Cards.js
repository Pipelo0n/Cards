import React from 'react'
import Card from './Card'

import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

const cards = [
    {
        id: 1,
        title: 'Pipee Web',
        image: image1
    },
    {
        id: 2,
        title: 'Sofii Web',
        image: image2
    },
    {
        id: 3,
        title: 'Matii Web',
        image: image3
    }
]

function Cards() {
    console.log(cards)
  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
        <div className='row'>
            <div className='col-md-4'> 
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
        
    </div>
  )
}

export default Cards