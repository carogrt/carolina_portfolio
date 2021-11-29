import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
      	<section class="colorlib-blog" data-section="blog">
				<div class="colorlib-narrow-content">
					<div class="row">
						<div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span class="heading-meta">Read</span>
							<h2 class="colorlib-heading">Blog</h2>
						</div>
					</div>
					<div class="row">
						<div class="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
							<div class="blog-entry">
								<a href="http://nerdityourself.altervista.org/" class="blog-img"><img src='carolina_portfolio/images/nerdityourself.JPG' class="img-responsive" alt="Nerd It Yourself blog"/></a>
								<div class="desc">
									<h3><a href="http://nerdityourself.altervista.org/">Nerd It Yourself</a></h3>
									<p>Hi! We are Davide and Carolina, two engineers with passion for technologies! And this is our blog with articles, reviews and tutorilas for newbie!</p>
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
