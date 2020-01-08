import React from 'react'
import { Link } from 'react-router-dom'

// todo: generate this dynamically or whatever
const projects = [
  {
    id: 'wdywycs',
    name: 'what do you wish you could say?',
    image_path: '/images/wdywycs-cover.jpg',
    link: '/wdywycs',
  },
  {
    id: 'bloomfield',
    name: 'a summer afternoon in bloomfield',
    image_path: '/images/bloomfield-cover.png',
    link: 'https://frojo.itch.io/a-summer-afternoon-in-bloomfield',
  }
]

function ProjectThumb(props) {
  return <img className='project-thumb' 
	  src={props.image_path} 
	  alt={props.alt}
	  />
}

function ProjectList(props) {
  // const projects = props.projects
  const list_items = projects.map((project) =>
    <li>
      <a href={project.link}>
	<ProjectThumb image_path={project.image_path} alt={project.name} />
      </a>
    </li>
  )
  return <ul className='project-thumb-container'>{list_items}</ul>

}

function SelectedWorks(props) {
  return(
    <div>
      <h2>selected works</h2>
      <ProjectList />
    </div>
  )
}
export default SelectedWorks

