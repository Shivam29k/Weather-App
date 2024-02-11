import React from 'react'
import earthGIF from '../assets/earth.gif'

function Home() {
  return (
    <div className='body home'>
      <h1>Weather App</h1>
      <img src={earthGIF} alt="" />
      <p>Click on the seach bar above and type your city name to get your area weather</p>
      <p>Source code is available on <a href="https://github.com/Shivam29k/Weather-App">github</a></p>
      <div className="fotter">Made with love 💖 by Shivam</div>
    </div>
  )
}

export default Home