import React from 'react';
import ReactDOM from 'react-dom';

function formatName(user) {
  return user.first_name + ' ' + user.last_name
}

const me = {
  first_name: 'fran',
  last_name: 'rojo'
}
const name = 'francisco';
var portfolio_container = <div></div>;

// function Heading(props) {
//   return <h1>my name is {props.name}</h1>;
// }

function Project(props) {
  return <div>this project is {props.name}!</div>;
}

function ProjectPage(props) {
  return <div>this project is {props.name}!</div>;
}

class ProjectThumbnail extends React.Component {
  render () {
    return (
      <a href="/poop/poop">
	<img 
      	  src={this.props.url}
      	  alt={this.props.title}
      	/>
      </a>
    )
  }
}

function ProjectThumbnailList(props) {


}


function App(props) {
  return (
    <div>
      <h1>francisco rojo</h1>
      <div>
	<ProjectThumbnail url='poop' title='what do you wish you could say?' />
	<ProjectThumbnail url='poop' title='a summer afternoon in bloomfield' />
      </div>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);







