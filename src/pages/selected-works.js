import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import Matter from 'matter-js';

let Engine = Matter.Engine,
      Render = Matter.Render,
      World = Matter.World,
      Bodies = Matter.Bodies,
      Body = Matter.Body,
      Vector = Matter.Vector,
      Events = Matter.Events,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint;

// some global variable to keep track of mouseClick
let clickedBody
let mousedownTime = 0
let mousedownPos = {x: 0, y: 0}

// todo: generate this dynamically or whatever
const projects = [
  {
    id: 'wdywycs',
    name: 'what do you wish you could say?',
    subtitle: 'an experiment in vulnerability',
    image_path: '/images/wdywycs-thumb.png',
    link: '/wdywycs',
  },
  {
    id: 'bloomfield',
    name: 'a summer afternoon in bloomfield',
    subtitle: 'a love letter to the neighborhood',
    image_path: '/images/bloomfield-thumb.png',
    link: '/bloomfield',
  },
  {
    id: 'haven',
    name: 'Haven',
    subtitle: 'a town stuck in time',
    image_path: '/images/haven-thumb.png',
    link: '/haven',
  },
  {
    id: 'sail',
    name: 'sail.p8',
    subtitle: 'a 2-player sailing sim in pico 8',
    image_path: '/images/sail-thumb.png',
    link: '/sail',
  }
]

function ProjectThumb(props) {
  return (
    <div className='project-thumb'>
      <img src={props.image_path} 
	    height='180px'
	    width='180px'
	    >
      </img>
      <div className='project-thumb-text'>
	<h3>{props.name}</h3>
	<p><i>{props.subtitle}</i></p>
      </div>
    </div>
  )

}

function ProjectList(props) {
  // const projects = props.projects
  const list_items = projects.map((project) =>
      <a className='project-thumb-link' href={project.link}>
	<ProjectThumb {...project} />
      </a>
  )
  return <div className='project-thumb-container'>{list_items}</div>
}

class Projects extends React.Component {
  render() {
    return(
      <div>
	<ProjectList />
      </div>
    )
  }
}
export default Projects

