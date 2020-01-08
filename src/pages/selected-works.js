import React from 'react'
import { Link } from 'react-router-dom'

// todo: generate this dynamically or whatever
const projects = [
  {
    id: 'wdywycs',
    name: 'what do you wish you could say?',
    image_path: '/images/wdywycs-cover.jpg'
  },
  {
    id: 'bloomfield',
    name: 'a summer afternoon in bloomfield',
    image_path: '/images/bloomfield-cover.png'
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
      <Link to={'/work/' + project.id}>
	<ProjectThumb image_path={project.image_path} alt={project.name} />
      </Link>
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

