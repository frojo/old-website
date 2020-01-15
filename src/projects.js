import React from 'react'


function Secrets(props) {
  return (
    <div>
      <h1>what do you wish you could say?</h1>
      <img className='project-main-image' src='/images/wdywycs-main.jpg' />
      <p>An experiment in vulnerability. Reality is messy and complicated. We are messy and complicated. What happens when we choose to sit with our immediate experience and devote attention to the reality within and without?</p>
      <p>Created for the <a href="https://sfpc.io/">School of Poetic Computation</a> Fall 2019 showcase. A closet in the exhibit space was turned into a cozy, alternate space that people could hang out in to momentarily escape the exhibition. Participants were let in one a time and were invited to take as much time as they wanted in the room, and to write down a secret on a piece of paper before leaving. By the end of the showcase, the room was full of secrets.</p>
      <p><a href="https://www.instagram.com/llisonchan/">Allison Chan</a> made the sign with the beautiful lettering on the door!</p>
      <p>Materials: Custom lighting, shelves, a bean bag, speakers, a couple of Arduinos, LEDs, paper</p>
      <div>
	<video className='project-image' controls>
	  <source src='/images/wdywycs-video.mp4' type='video/mp4' />
	</video>
      </div>
      <img className='project-image' src='/images/wdywycs-beanbag.jpg' />
      <img className='project-image' src='/images/wdywycs-paper.jpg' />
    </div>
  )
}
export default Secrets

