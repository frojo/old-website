import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
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

// some global variable to keep track of mouseClick
let clickedBody
let mousedownTime = 0
let mousedownPos = {x: 0, y: 0}

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

//     id: 'wdywycs',
//     name: 'what do you wish you could say?',
//     image_path: '/images/wdywycs-thumb.png',
//     link: '/wdywycs',
//   },
// creates a Matter.Body for a project thumbnail
// x and y is position on canvas
// this call is async (since it has to wait for the image to load)
function createFloatyProjThumbAsync(world, proj, x, y) {

  let box_height = 150

  // find the image's height and width in pixels
  let img = new Image()
  img.src = proj.image_path
  img.onload = (function(x,y) {
    return function () {
    let ratio = img.width / img.height
    let box_width = box_height * ratio
    let scale = box_height / img.height

    console.log('x = ' + x)

    console.log('height = ' + img.height)
    let box = Bodies.rectangle(x, y, box_width, box_height, {
                 render: {
                   sprite: {
                     texture: proj.image_path,
                     xScale: scale,
                     yScale: scale
                   }
                 }
               })
    box.link = proj.link
  
    World.add(world, [box])
  }})(x,y);

}

// initializes the floaty box interactable area
// in the given world
function initFloatyBoxArea(world, render) {
  let width = 800
  let height = 600

  // set the bounds
  // they end up looking like this:
  // ______________
  // |  ________  | 
  // | |        | |
  // | | canvas | |
  // | |________| |
  // |____________|
  //

  let bounds_thickness = 1000
  World.add(world, [
    // top (aka dom)
    Bodies.rectangle(width/2, -bounds_thickness/2, 
                     width + bounds_thickness*2, bounds_thickness, 
                     { isStatic: true }),
    // bottom (aka sub)
    Bodies.rectangle(width/2, height + bounds_thickness/2,
                     width + bounds_thickness*2, bounds_thickness, 
                     { isStatic: true }),
    // left (aka big spoon)
    Bodies.rectangle(-bounds_thickness/2, height/2, 
                     bounds_thickness, height + bounds_thickness,
                     { isStatic: true }),
    // right (aka lil spoon)
    Bodies.rectangle(width + bounds_thickness/2, height/2, 
                     bounds_thickness, height + bounds_thickness*2, 
                     { isStatic: true }),
  ])

  let proj;
  for (var i = 0; i < projects.length; i++) {
    createFloatyProjThumbAsync(world, projects[i], i*50, i*50);
  }

  world.gravity.y = 0;
}



class FloatyProjThumbArea extends React.Component {
  componentDidMount() {
    var engine = Engine.create();
    var render = Render.create({
      canvas: this.refs.canvas,
      engine: engine,
      options: {
        background: '#ffffff',
        wireframes: false
      }
    });

    initFloatyBoxArea(engine.world, render)

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


    // register event callbacks for mouse_down and mouse_up
    // this makes it so that you can click on a box, and it'll
    // go to a link
    Events.on(mouseConstraint, 'mousedown', function(event) {
      let body = mouseConstraint.body
      if (body) {
	      clickedBody = body
        mousedownTime = Date.now()
        mousedownPos.x = mouse.position.x
        mousedownPos.y = mouse.position.y
      }
    })

    Events.on(mouseConstraint, 'mouseup', function(event) {
      let mouseupPos = {x: mouse.position.x, y: mouse.position.y}

      if (Date.now() - mousedownTime < 250 &&
          mousedownPos.x == mouseupPos.x && 
          mousedownPos.y == mouseupPos.y && 
          clickedBody) {

        // change the URL path to the project link
        window.location.href = clickedBody.link
      }
    })
    
    Engine.run(engine);
    Render.run(render);
  }
  render() {
    return <canvas ref='canvas' width={640} height={640} />
  }


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
      <h2>projects</h2>
      <p> <i> click in a project for more info </i>
      </p>
      {projects}
    </div>
 )
}
export default SelectedWorks

