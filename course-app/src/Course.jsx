import React from 'react'

function Course({course}) {
   const {id,description,price,link,image,title} = course; 
  return (
    <div className='course'>
      <div>
        <img src={image} alt={title} width={300} height={300}/>
        <h4>{title}</h4>
        <h5>{description}</h5>
        <h3>{price}₺</h3>
        <h6><a href={link} target='_blank'>Ürüne Git</a></h6>
      </div>
    </div>
  )
}

export default Course
