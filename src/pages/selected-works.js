import React from 'react';

// todo: generate this dynamically or whatever
const projects = [
  {
    name: 'what do you wish you could say?',
    image_path: '/images/wdywycs-cover.jpg'
  },
  {
    name: 'a summer afternoon in bloomfield',
    image_path: '/images/bloomfield-cover.png'
  }
];

function ProjectThumbnail(props) {
  return <img className='project-thumb' src={props.image_path} alt={props.alt}/>;
}

function SelectedWorks(props) {
  // const projects = props.projects
  const list_items = projects.map((project) =>
    <li>
      <ProjectThumbnail image_path={project.image_path} alt={project.name} />
    </li>
  );
  return <ul>{list_items}</ul>;
}
export default SelectedWorks;

