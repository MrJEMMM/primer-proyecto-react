import React from 'react'
import Card from './Card'
import image1 from "../assets/dbxpuvq-1e663f59-be2b-4786-9662-67c7559fe4c9.png"
import image2 from "../assets/3968880954_de0d90b1e9_n.jpg"
import image3 from "../assets/R (1).jpg"


const Cards = [
  {
    id: 1,
    title: " EFFECTS",
    image: image1,
    instructor: "Joses"
  },
  {
    id: 2,
    title: "Doggers",
    image: image2,
    instructor: "MRJEMM"    
  },
  {
    id: 3,
    title: "Trueno",
    image: image3,
    instructor: "JEMM"      
  }
]

export default function cards(){
  console.log()
  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
      <div className='row'>
          {
            Cards.map(c => (
              <div className='col-md-4' key={Cards.id}>
                <Card
                key={c.id}
                id = {c.id}
                title = {c.title}
                  image = {c.image}
                instructor = {c.instructor}
                />
                      </div>                              
            ))
          }
        </div>
      </div>
  );
}
