import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const[photo,setPhoto] = useState(null)

  let images =[
    'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1611267254323-4db7b39c732c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGN1dGUlMjBjYXR8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1566847438217-76e82d383f84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGN1dGUlMjBjYXR8ZW58MHx8MHx8fDA%3D'

  ]

  function handelImage(image){
    setPhoto(image)

  }

  
  

  return (
    <>
      <h1 >Select a Image</h1>
    <div className='container'>
      {
        images.map( (image,index) =>{
          return (
          <img src={image} alt="" srcset="" key={index}  onClick={() => handelImage(image)}/>
          )         
        })
      }

    </div>


     <div className='box'> 
      <h1>Selected Image</h1>
      <img src={photo} alt="" className='selectedimage' />

     </div>
    </>
  )
}

export default App
