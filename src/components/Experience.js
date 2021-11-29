import React, { Component } from 'react'

export default class Experience extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="experience">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Work Experience</h2>              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-briefcase" />
                      </div>
                      <div className="timeline-label">
                        <h2>Senior Software Engineer R&D Medical Department <span>2021-present</span></h2>
                        <ul>
                          <li>Research and development activities in the field of medical laser systems: feasibility studies, 
                            analysis and implementation of algorithms, analysis and integration of new features; analysis of new instruments and software technologies.
                          </li>
                          <li>Software architecture design and implementation on Windows 10 platforms and Windows CE platforms: .NET framework, C, C++</li>
                          <li>Firmware implementation in C language on Renesas 32 bit microcontrollers.</li>
                          <li>Drafting of documentation according to the company quality system</li>
                         </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-briefcase" />
                      </div>
                      <div className="timeline-label">
                        <h2>Team Leader & Senior Software Engineer <span>2014-2021</span></h2>
                        <ul>
                          <li>Responsible for the overseeing of the day-to-day operation of a Team of four software developers; allocating jobs and workloads to individual staff members based on their ability; coordination of team meetings to monitor activities and progress;making sure all tasks given to the staff are done on time; implementing new initiatives.</li>
                          <li>Software project management activities; requirements analysis with the Customer; planning and monitoring activities.</li>
                          <li>Management and development of internal procedures relating to SW production and testing of Embedded Linux boards.</li>
                          <li>Overseeing the development of the custom Linux kernel based on Yocto Project: drafting of the requirements documents for Supplier, supervision of Supplier activity, testing and implementation activities.</li>
                          <li>Software architecture design and implementation of machine control software and GUI applications on Linux Embedded systems with C++ and Qt Framework. Knowledge of OOP design principles, design patterns and unit testing. Also knowledge of Shell Scripting, Java, .NET framework and C#.</li>
                          <li>Development of web application:  HTML 5, CSS, Javascript, REST API</li>
                        </ul>

                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-briefcase" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Developer<span>2013-2014</span></h2>
                        <p>I have completed my higher secondary education with major subjects as Physics,Chemistry & Maths with 91 merit. During my time at school, I have developed interest in solving complex problems of the fundamental physics which helped me to improve my understanding of any problem and also my mathematical skills to actually solve the problems.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
