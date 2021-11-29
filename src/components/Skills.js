import React, { Component } from 'react'


const skills = [

    {id: 1, name: "OOP Design Patterns & Principles", value: "90", color: "color-2"},
    {id: 2, name: "C++", value: "85", color: "color-2"},
    {id: 3, name: "Qt", value: "85", color: "color-2"},
    {id: 4, name: "C#", value: "80", color: "color-3"},
    {id: 5, name: "Embedded Linux", value: "75", color: "color-3"},
    {id: 6, name: "HTML/CSS/Javascript", value: "70", color: "color-1"},
    {id: 7, name: "React", value: "65", color: "color-1"},

]


const listDivSkills = skills.map((item)=>        
    <div className="col-md-6 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
        <div className="progress-wrap">
                <h3>{item.name}</h3>
                <div className="progress">
                    <div className={"progress-bar " + item.color} style={{width: item.value + '%'}} role="progressbar" aria-valuenow={item.value} aria-valuemax="100">
                    <span>{item.value + '%'}</span>
                    </div>  
                </div>
        </div>        
    </div>
);

export default class Skills extends Component {  
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="skill">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Skills</span>
                <h2 className="colorlib-heading">Here are some of my skills</h2>
            </div>
            </div>    
            <div>
            {listDivSkills}
            </div>          
        </div>
        </section>
      </div>
    )
  }
}
