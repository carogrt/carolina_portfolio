import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>        			
			<section class="colorlib-services" data-section="whatido">
				<div class="colorlib-narrow-content">
					<div class="row">
						<div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span class="heading-meta">What I do?</span>
							<h2 class="colorlib-heading">Here are some of my expertise</h2>
						</div>
					</div>
					<div class="row row-pt-md">
						<div class="col-md-4 text-center animate-box">
							<div class="services color-2">
								<span class="icon">
									<i class="icon-data"></i>
								</span>
								<div class="desc">
									<h3>Software</h3>
									<p>Design of software architecture and software development both for Embedded Systems and for Desktop.
                                     Main technologies: C++, C#, Qt Framework, .NET Framework
                                    </p>
								</div>
							</div>
						</div>
						<div class="col-md-4 text-center animate-box">
							<div class="services color-3">
								<span class="icon">
									<i class="icon-phone3"></i>
								</span>
								<div class="desc">
									<h3>Web Development</h3>
									<p>Web Application and Website devolopment.<br />Using pure HTML/CSS/Javascript, React framework, or CMS like Wordpress.</p>
								</div>
							</div>
						</div>
						<div class="col-md-4 text-center animate-box">
							<div class="services color-4">
								<span class="icon">
									<i class="icon-speech-bubble"></i>
								</span>
								<div class="desc">
									<h3>Counseling & Teaching</h3>
									<p>Consultancy for Companies and Individuals.
                                    <br/> Private lessons and tutorials on blogs.									
									<br/>CCollaborations for hardware and software prototyping </p>
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
