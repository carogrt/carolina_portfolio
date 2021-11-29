import React from 'react'
import { useTranslation } from 'react-i18next';

function Sidebar(){
  const { t, i18n } = useTranslation();
  return (
    <div>
      <div>
        <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
        <aside id="colorlib-aside" className="border js-fullheight">
          <div className="text-center" style={{margin: '0px 0px 10px'}}>
            <div className="author-img" style={{backgroundImage: 'url(/carolina_portfolio/images/about.jpg)'}} />
            <h1 id="colorlib-logo"><a href="index.html">Carolina Gritti</a></h1>
            <span className="email"><i className="icon-mail"></i>caro.grt@gmail.com</span>
            <span className="email"><i className="icon-phone"></i>+39 3469624345</span>
          </div>
          <nav id="colorlib-main-menu" role="navigation" className="navbar">
            <div id="navbar" className="collapse">
              <ul>
                <li className="active"><a href="#home" data-nav-section="home">{t('introduction')}</a></li>
                <li><a href="#about" data-nav-section="about">{t('about')}</a></li>
                <li><a href="#whatido" data-nav-section="whatido">{t('whatido')}</a></li>
                <li><a href="#experience" data-nav-section="experience">{t('experience')}</a></li>
                <li><a href="#education" data-nav-section="education">{t('education')}</a></li>
                <li><a href="#skill" data-nav-section="skill">{t('skills')}</a></li>
                <li><a href="#blog" data-nav-section="blog">{t('blog')}</a></li>
                <li><a href="#contact" data-nav-section="contact">{t('contact')}</a></li>
                {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
              </ul>
            </div>
          </nav>
          <nav id="colorlib-main-menu">
            <ul>
              {/*<li><a href="https://www.instagram.com/ddbarochiya/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>*/}
              <li><a href="https://www.linkedin.com/in/carolina-gritti/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
            </ul>
          </nav>
          <div className="colorlib-footer">
            <p><small>
                Thanks <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> for inspiration 
            </small></p>          
          </div>
        </aside>
      </div>
    </div>
  )
}
export default Sidebar;
// class Sidebar extends Component {
 
//   render() {
//     const { t } = this.props;
//     return (
//       <div>
//         <div>
//           <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
//           <aside id="colorlib-aside" className="border js-fullheight">
//             <div className="text-center" style={{margin: '0px 0px 10px'}}>
//               <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
//               <h1 id="colorlib-logo"><a href="index.html">Carolina Gritti</a></h1>
//               <span className="email"><i className="icon-mail"></i>caro.grt@gmail.com</span>
//               <span className="email"><i className="icon-phone"></i>+39 3469624345</span>
//             </div>
//             <nav id="colorlib-main-menu" role="navigation" className="navbar">
//               <div id="navbar" className="collapse">
//                 <ul>
//                   <li className="active"><a href="#home" data-nav-section="home">{t('introduction')}</a></li>
//                   <li><a href="#about" data-nav-section="about">About</a></li>
//                   <li><a href="#education" data-nav-section="about">Education</a></li>
//                   <li><a href="#experience" data-nav-section="about">Experience</a></li>
//                   <li><a href="#skill" data-nav-section="about">Skills</a></li>
//                   {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
//                   <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
//                   <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
//                 </ul>
//               </div>
//             </nav>
//             <nav id="colorlib-main-menu">
//               <ul>
//                 <li><a href="https://www.facebook.com/dhruv.barochia" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
//                 <li><a href="https://www.instagram.com/ddbarochiya/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
//                 <li><a href="https://www.linkedin.com/in/dbarochiya/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
//                 <li><a href="https://github.com/dbarochiya" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
//               </ul>
//             </nav>
//             <div className="colorlib-footer">
//               <p><small>
//                   Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-beer" aria-hidden="true"></i><br></br>
//                   Thanks <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> for inspiration 
//               </small></p>
//               <p><small>
//                 Something coming soon !!
//               </small></p>
//             </div>
//           </aside>
//         </div>
//       </div>
//     )
//   }
// }
// export default withTranslation()(Sidebar)
