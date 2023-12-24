import React from 'react'
import '../index.css'
import Mountain1 from '../images/1.jpg'
import Mountain2 from '../images/6.jpg'
import Mountain3 from '../images/4.jpg'
import Mountain4 from '../images/10.jpg'
import DestinationData from './DestinationData'

const Destination = () => {
  return (
    <div className='destination'>
    <h1>Popular Destination</h1>
    <p>Tours give you the opportunity to see a lot, Within a tiem frame.</p>

   <DestinationData
   className="first-des"
   heading="Taal Volcano, Batangas"
   text="
   One of the most iconic views in Luzon, Mt Taal boasts a 
              volcano inside a lake inside on island. if you fany a closer
              look, the hike up to the crater is a mere 45 miuutes, and is 
              easy enough for beginners, Guides will assist you most of
              the way, And You'll see the peculior environment found on 
              an active volcano, including volcanic rocks and seteam
              vents. The hike can then unwind with some bulalo before
              heading back home!
   "
   img1={Mountain1}
   img2={Mountain2}
   />

   <DestinationData
   className="first-des-revers"
   heading="Mt. Daguldul, Batangas"
   text="
   If you'r looking for a hike thats a little more challenging
   but still good for a beginner mountaineer, check out Mt.
   Doguldul in San Juan, Batangas. You'll start your hike from 
   the beach and pass through tropical forest, different rock
   formations, and smail streams. There's a small store
   halfway up the trail where you can take a break and drink
   buko juice, and though the summit itseif may not have the
   best view, the breeze is fantastic, Once you've made it
   back down, head straight to the beach for a refreshing,
   well-deserved swim. 
   "
   img1={Mountain3}
   img2={Mountain4}
   />
    </div>
  )
}

export default Destination
