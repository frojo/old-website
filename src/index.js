import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

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


// function ProjectThumbnailList(props) {
// 
// 
// }

function Name(props) {
  return <b>francisco rojo</b>;
}

function InfoButton(props) {
  return <a href="info">info</a>;
}

function AllProjectsButton(props) {
  return <a href="complete-works">work</a>;
}

function NavBar(props) {
  return (
    <div>
      <Name />
      <AllProjectsButton />
      <InfoButton />
    </div>
  );
}

function App(props) {
  return (
   <div>
    <NavBar />
    <Routes />
   </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
