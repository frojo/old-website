import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import './index.css';

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


function Name(props) {
  return <a className='navbar-name' href="/">francisco rojo</a>;
}


function InfoButton(props) {
  return <a className='navbar-item' href="info">about</a>;
}

function SelectedWorksButton(props) {
  return <a className='navbar-item' href="selected-works">work</a>;
}

function Menu(props) {
  return (
    <span className='navbar-menu'>
      <SelectedWorksButton />
      <InfoButton />
    </span>
  )
  
}

function NavBar(props) {
  return (
    <header className='navbar'>
      <Name />
      <Menu />
    </header>
  );
}

function Footer(props) {
  return (
  <footer>
  </footer>
  )
}

function App(props) {
  return (
   <div>
    <NavBar />
    <Routes />
    <Footer />
   </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
