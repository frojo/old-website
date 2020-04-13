import React from 'react'
import P5Wrapper from 'react-p5-wrapper';
import word_garden from './word-garden';

export function Secrets(props) {
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

export function Bloomfield(props) {
  return (
    <div>
      <h1>a summer afternoon in bloomfield</h1>
      <img className='project-main-image' src='/images/bloomfield-thumb.png' />
      <p>Playable <a href='https://frojo.itch.io/a-summer-afternoon-in-bloomfield'>here</a>.</p>
      <p>A love letter to my neighborhood. I lived in Bloomfield, Pittsburgh for 3 years and created this digital vignette to coney the feeling ofcomfort and love that I have for that street and the people that spend their time there. I designed the experience, wrote the dialogue, made the visual art and animation and programmed the AI and interactions.</p>
      <p>Made with <a href='https://godotengine.org/'>Godot</a>.</p>
    </div>
  )
}

export function Haven(props) {
  return (
    <div>
      <h1>Haven</h1>
      <img className='project-main-image' src='/images/haven-poster.png' />
      <p>Playable <a href='https://frojo.itch.io/haven'>here</a>.</p>
      <p>A tiny teaser/prototype for a story game trying to reconcile my experience going to high school in a rich suburb in CT, seemingly unaffected by time.</p>
      <p>Writing (storyboarding and dialogue) by <a href='https://www.slantmagazine.com/author/aeaker/'>Alex Eaker</a></p>
      <p>Made with <a href='https://unity.com/'>Unity</a>.</p>
    </div>
  )
}

export function WordGarden(props) {
  return (
    <div>
      <h1>word garden </h1>
      <p>a little toy. grow a couple flowers </p>
      <p>too many words on screen makes it go very slow so please be gentle</p>
      <div id='toolbar'></div>
      <div id='sketch-holder'></div>
      <P5Wrapper sketch={word_garden} />
    </div>
  )
}
