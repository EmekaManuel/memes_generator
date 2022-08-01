import React from 'react'
import Data from '../Data'


const Main = () => {
  const [memeImage, setMemeImage] = React.useState('')

  // let url
  
  const getMeme = () => {
    const memesArray = Data.data.memes
    const randomMeme = Math.floor(Math.random()*memesArray.length)
    // console.log(randomMeme);
    // url = memesArray[randomMeme]
    // console.log(url);
    setMemeImage(memesArray[randomMeme].url)
  }


  return (
    <div className='main'>
    <div className='form'>
      <input type="text" placeholder='top text' className='input-text'/>
      <input type="text" placeholder='botton text' className='input-text' />
      <button className='form--button' onClick={getMeme}>Get a new meme image</button>
      <img src={memeImage} alt="" className='meme-image' />
      

    </div>
    </div>

  )
}

export default Main