import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I am a passionate software engineer currently working for a leading company in the medical laser device market and as a freelance software developer.                         
                       I studied electronic engineering but immediately after graduation I realized that my real passion was software and therefore I studied and worked a lot to become a good Software Engineer                   
                       I love exploring new technologies and I never stop studying because I always try to improve myself.</p>
                    <p>Of course, I'm not just that! I'm a very dynamic person: climbing, photograpy and handmade crafts, are just some of the things I love to do in my free time.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>        
      </div>
    )
  }
}
