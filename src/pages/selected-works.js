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

function ProjectThumb(props) {
  return <img className='project-thumb' src={props.image_path} alt={props.alt}/>;
}

function ProjectList(props) {
  // const projects = props.projects
  const list_items = projects.map((project) =>
    <li>
      <ProjectThumb image_path={project.image_path} alt={project.name} />
    </li>
  );
  return <ul className='project-thumb-container'>{list_items}</ul>;

}

function SelectedWorks(props) {
  return(
    <div>
      <h2>selected works</h2>
      <ProjectList />
    </div>
  );
}
export default SelectedWorks;

