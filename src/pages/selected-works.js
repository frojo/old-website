import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'

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

class ProjectThumb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {isMouseHovering: false};

    this.color = '#FF0000';

    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  // hide the image and text and change the color?
  mouseEnter() {
    this.setState(state => ({
      isMouseHovering: true
    }));
  }

  mouseLeave() {
    this.setState(state => ({
      isMouseHovering: false
    }));
  }
  
  render() {
    const isHovering = this.state.isMouseHovering;

    const image = (
	<img src={this.props.image_path} 
	      height='180px'
	      width='180px'
	      border='0px solid black'
	      >
	</img>
    )
    const text = (
	<div className='project-thumb-text'>
	  <h3>{this.props.name}</h3>
	  <p><i>{this.props.subtitle}</i></p>
	</div>
    )

    const solidFillStyle = {
      backgroundColor: 'black',
      width: 'inherit',
      height: 'inherit',
    };

    const solidCol = (
      <div style={solidFillStyle}>
      </div>
    )

    return (
      <div className='project-thumb' 
	   onMouseEnter={this.mouseEnter}
	   onMouseLeave={this.mouseLeave}>
	{isHovering ? null : image}
	{isHovering ? null : text}
	{isHovering ? solidCol : null }
      </div>
    )
  };

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

