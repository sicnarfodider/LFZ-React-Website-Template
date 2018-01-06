import React from 'react';
import projects from './project-content';
import prototypes from './prototype-content';


export default props=>{
  return(
    <div>
      {props.contents.summary}
      <div className="content-detail collapse"  id="collapseContent">
          <div><i className="fa fa-expand fa-lg" aria-hidden="true"></i> <h1 className="card-title ml-3 center-align">{props.name}</h1></div>
          {props.contents.phase1}
          {props.contents.phase2}
          {props.contents.phase3}
      </div>
    </div>
  )
}