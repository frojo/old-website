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
    image_path: '/images/wdywycs-thumb.png',
    link: '/wdywycs',
  },
  {
    id: 'bloomfield',
    name: 'a summer afternoon in bloomfield',
    image_path: '/images/bloomfield-thumb.png',
    link: '/bloomfield',
  },
  {
    id: 'haven',
    name: 'Haven',
    image_path: '/images/haven-thumb.png',
    link: '/haven',
  },
  {
    id: 'sail',
    name: 'sail',
    image_path: '/images/sail-thumb.png',
    link: '/sail',
  }
]

function ProjectThumb(props) {
  return (
    <div className='project-thumb'>
      <img  src={props.image_path} 
	    alt={props.alt}
	    height='150'
	    width='150'
	    />
    </div>
  )

}

function ProjectList(props) {
  // const projects = props.projects
  const list_items = projects.map((project) =>
      <a href={project.link}>
	<ProjectThumb image_path={project.image_path} alt={project.name} />
      </a>
  )
  return <div className='project-thumb-container'>{list_items}</div>
}

class Projects extends React.Component {
  render() {
    return(
      <div>
        <h2>projects</h2>
        <p> <i> click on a thumbnail for more info </i>
        </p>
	<ProjectList />
      </div>
    )
  }
}
export default Projects

