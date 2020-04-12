import React from 'react'
import TweetEmbed from 'react-tweet-embed'

export function WordGardenBlog(props) {
  return (
    <div className='blogpost'>
      <h1>word garden (WIP)</h1>
      <p><a>"word garden"</a>(LINK to proj) is a simulation toy prototype made in p5.js.</p>
      <p> I sort of stole this idea from a friend. I sent her this tweet of this delightful thing that Karina Popp made: </p>
    <TweetEmbed id="1215341340080427009" />
    <p>She responded that she wanted to make something like that, but growing a garden. That text exchange happened a while ago, but I think the idea stuck with me because it's somewhat a synthesis of a few different things that have been rolling around my brain:</p>

    <h2>falling sand</h2>
    <p>I remember wasting a lot of my childhood afternoons playing falling sand sims on Newgrounds (LINK). In the *fall* (HA!—GET IT, *FALL*ING S-), while at SFPC (LINK), I learned about Sandspiel (LINK), and this winter I played Noita (LINK), a roguelike videogame where the environment is extremely interactable (the tagline is "every pixel is simulated").</p>

    <p>The interesting thing that Sandspiel and Noita both do is leverage the on-the-fly experimentation and creativity of falling sand sims to create something new (a community centered around a creative tool, and a procedural roguelike (LINK), respectively). In both cases, the spontaneity and experimental creativity inherent to falling sand sims is core to their success.</p>

    <p>I'm interested in the process that a person takes in exploring a new system or world, in figuring out the rules and the interactions of a mini alternate universe. This process happens in any game or simulation, but falling sand sims are a pure example in that they achieve so much emergent behavior with so few codified rules.</p>

    <h2>virtual gardens</h2>

    <p>Last summer, I read two articles (LINKS) on virtual gardens in videogames. Published at around the same time, the articles take very different approaches in analyzing gardening games. One looks at gardening games as an escape from our increasingly stressful and nature-alienated lives, while the other draws parallels between the history of colonial botany and the games industry.</p>

    <p>I started thinking about what assumptions and ideologies we bake into our games when we make them. When we model a gardening simulation, what are we saying about what it means to garden? Why do I enjoy tending to my Stardew Valley garden, but some forms of maintenance in my life feel like a chore, including watering my real cactus?</p>

    <h2>text</h2>
    <p>Text is useful for physical simulations because a noun can semantically represent the physical object it describes, so then I don't need to draw which is good because I can't</p>
    <p>Words also have the convenient property of fitting neatly into axis-parallel rectangles, which makes them easy for being used in a simple physics simulations. p5.js has this built-in function for getting the bounding box (LINK) of any string of text.</p>
    <p>The idea of composing text to convey meaning visually in digital media is not new (LINK), but besides some recent work, there aren't many examples of interactive work for drawing or building visual forms out of text. (LINKS to karina popp, pen, memory, fernando class?). In some ways, these are just really weird Microsoft Words.</p>

    <h2>technical notes</h2>

    <p>This is made in vanilla p5.js (no addons/libraries). The code is here (LINK).</p>

    <p>Since the main physics loop is in Javascript, and since I didn't really try to optimize it at all, having more than ~10 words on screen makes it *chug*.</p>

    <p>There's tons of obvious improvements and polish for it (e.g. make the UI even a little pretty, be able to handle more than 10 words, more than literally 1 plant) but I'm happy with what it is. I got what I needed from it.</p>

    <p>Be gentle with it and enjoy!</p>

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

