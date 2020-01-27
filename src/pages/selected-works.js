import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import Matter from 'matter-js';

let Engine = Matter.Engine,
      Render = Matter.Render,
      World = Matter.World,
      Bodies = Matter.Bodies,
      Body = Matter.Body,
      Vector = Matter.Vector,
      Events = Matter.Events,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint;

// todo: generate this dynamically or whatever
const projects = [
  {
    id: 'wdywycs',
    name: 'what do you wish you could say?',
    image_path: '/images/wdywycs-thumb.png',
    link: '/wdywycs',
  },
  {
    id: 'bloomfield',
    name: 'a summer afternoon in bloomfield',
    image_path: '/images/bloomfield-thumb.png',
    link: '/bloomfield',
  },
  {
    id: 'haven',
    name: 'Haven',
    image_path: '/images/haven-thumb.png',
    link: '/haven',
  },
  {
    id: 'sail',
    name: 'sail',
    image_path: '/images/sail-thumb.png',
    link: '/sail',
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

class FloatyProjThumbArea extends React.Component {
  // const elm = <div class='canvas-container' />;
  // createFloatyBoxArea(props.width, props.height)
  //
  componentDidMount() {
    const canvas_ref = this.refs.canvas
    var engine = Engine.create();
    
    var render = Render.create({
//       element: myRef.current,
      canvas: canvas_ref,
      engine: engine,
      options: {
        background: '#ffffff',
        wireframes: false
      }
    });

    console.log('canvas ref: ' + canvas_ref)

    var boxA = Bodies.rectangle(400, 200, 80, 80, {
                 render: {
                   sprite: {
                     texture: '/images/sail-thumb.png',
                     xScale: 0.1,
                     yScale: 0.1
                   }
                 }
               })

    var boxB = Bodies.rectangle(450, 50, 80, 80);
    // var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });
    let allBodies = [boxA, boxB];

    // let proj;
    // for (var i = 0; i < projects.length; i++) {
    //   let projBox = createFloatyProjThumb(projects[i], i*50, i*50);
    //   allBodies.push(projBox);
    // }

    World.add(engine.world, allBodies);
    engine.world.gravity.y = 0;

    let mouse = Mouse.create(render.canvas);
    let mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        render: {
          visible: false
        }
      }
    });
    World.add(engine.world, mouseConstraint);
    render.mouse = mouse;

    // const history = useHistory();

    // Events.on(mouseConstraint, 'mousedown', function(event) {
    //   let hoveredBodies = Matter.Query.point(allBodies, mouse.position)
    //   // history.push('/wdywycs')
    //   if (hoveredBodies.length > 0) {
    //     console.log(hoveredBodies[0].label + ' clicked!')
    //   } else {
    //     console.log('no bodies clicked');
    //   }
    // });
    // 
    Body.applyForce(boxA, boxA.position, Vector.create(0, -.01));
    // Body.applyForce(boxB, boxB.position, Vector.create(0, -1));
    
    Engine.run(engine);
    
    Render.run(render);
    

  }
  render() {
    // const myRef = React.createRef();

    return <canvas ref='canvas' width={640} height={640} />
  }


}

// creates a Matter.Body for a project thumbnail
// x and y is position on canvas
function createFloatyProjThumb(project_info, x, y) {
  
  return Bodies.rectangle(x, y, 80, 80);


}

// make a floaty box interactable area object 
// with the given width and height
function createFloatyBoxArea(width, height) {
  // set the canvas properties


  return 

}

function SelectedWorks(props) {
  const floaty = true;
  let projects;

  if (floaty) {
    projects = <FloatyProjThumbArea />
  } else {
    projects = <ProjectList />
  }
  return(
    <div>
      <h2>selected works</h2>
      <p> <i> what follows are some projects that i've worked on. click on an image to find out more </i>
      </p>
      {projects}
    </div>
 )
}
export default SelectedWorks

