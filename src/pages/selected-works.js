import React from 'react';

// todo: generate this dynamically or whatever
const projects = [
  {
    name: 'what do you wish you could say',
    image_path: '/images/wdywycs-cover.jpg'
  },
  {
    name: 'a summer afternoon in bloomfield',
    image_path: 'poop'
  }
];

function ProjectThumbnail(props) {
  return <img src={props.image_path} />;
}

function SelectedWorks(props) {
  // const projects = props.projects
  const list_items = projects.map((project) =>
    <li>
      <ProjectThumbnail image_path={project.image_path} title={project.name} />
      <b>{project.name}</b>
    </li>
  );
  return <ul>{list_items}</ul>;
}
export default SelectedWorks;

