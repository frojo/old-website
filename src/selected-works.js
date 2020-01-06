import React from 'react';


function ProjectThumbnail(props) {
    return (
      <a href="/poop/poop">
	<img 
      	  src={props.url}
      	  alt={props.title}
      	/>
      </a>
    )
}


function SelectedWorks(props) {
  return (
    <div>
      <ProjectThumbnail url='poop' title='what do you wish you could say?' />	  <ProjectThumbnail url='poop' title='a summer afternoon in bloomfield' />
    </div>
  );
}
export default SelectedWorks;

