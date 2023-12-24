import '../index.css'
import TripData from './TripData'
import Trip1 from '../images/5.jpg'
import Trip2 from '../images/6.jpg'
import Trip3 from '../images/8.jpg'

import React from 'react'

function Trip() {
  return (
    <div className='trip'>
      <h1>Recent Trips</h1>
      <p>
        You can discover unique
        destination using Google Maps.
      </p>
      <div className='tripcard'>
        <TripData 
        image={Trip1}
        heading="Trip in Indonesia"
        text="
        Indonesia, officially the
        Republic of Indonesia, is a
        country in Doutheast Asia and 
        Oceania between the Tndian and 
        Pacific oceans. It consists of
        over 17 ,000 islands, including
        Sumatra, Java, Sulawesi, and Parts of Borneo and New Guinea.
        "
        />
        <TripData 
        image={Trip2}
        heading="Trip in Indonesia"
        text="
        Indonesia, officially the
        Republic of Indonesia, is a
        country in Doutheast Asia and 
        Oceania between the Tndian and 
        Pacific oceans. It consists of
        over 17 ,000 islands, including
        Sumatra, Java, Sulawesi, and Parts of Borneo and New Guinea.
        "
        />
        <TripData 
        image={Trip3}
        heading="Trip in Indonesia"
        text="
        Indonesia, officially the
        Republic of Indonesia, is a
        country in Doutheast Asia and 
        Oceania between the Tndian and 
        Pacific oceans. It consists of
        over 17 ,000 islands, including
        Sumatra, Java, Sulawesi, and Parts of Borneo and New Guinea.
        "
        />
      </div>
    </div>
  )
}

export default Trip


