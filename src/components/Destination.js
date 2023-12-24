import React from 'react'
import '../index.css'
import Mountain1 from '../images/1.jpg'
import Mountain2 from '../images/3.jpg'

const Destination = () => {
  return (
    <div className='destination'>
    <h1>Popular Destination</h1>
    <p>Tours give you the opportunity to see a lot, Within a tiem frame.</p>

    <div className='first-des'>
        <div className='des-text'>
            <h2>Taal Volcano, Batangas</h2>
            <p>One of the most iconic views in Luzon, Mt Taal boasts a 
              volcano inside a lake inside on island. if you fany a closer
              look, the hike up to the crater is a mere 45 miuutes, and is 
              easy enough for beginners, Guides will assist you most of
              the way, And You'll see the peculior environment found on 
              an active volcano, including volcanic rocks and seteam
              vents. The hike can then unwind with some bulalo before
              heading back home!
            
            </p>
        </div>
        <div className='image'>
            <img alt='Img' src={Mountain1} />
            <img alt='Img' src={Mountain2} />
        </div>
    </div>
    </div>
  )
}

export default Destination
