import './assets/css/style.css';
import './assets/css/style-switcher.css';
import { useEffect, useState } from 'react';
import Typed from 'typed.js';

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(false); // <-- moved inside function

  const setActiveStyle = (color) => {
    const styles = document.querySelectorAll(".alternate-style");
    styles.forEach((style) => {
      style.disabled = true;
      if (style.getAttribute("title") === color) {
        style.disabled = false;
      }
    });
  };

  useEffect(() => {
    const typed = new Typed('.typing', {
      strings: ['Web Designer', 'Web Developer', 'Freelancer'],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  useEffect(() => {
    const toggler = document.querySelector(".style-switcher-toggler");
    const panel = document.querySelector(".style-switcher");

    const togglePanel = () => panel.classList.toggle("open");

    if (toggler && panel) toggler.addEventListener("click", togglePanel);
    return () => toggler?.removeEventListener("click", togglePanel);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const onScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const dayNight = document.querySelector(".day-night");
    const icon = dayNight?.querySelector("i");
  
    const toggleDarkMode = () => {
      document.body.classList.toggle("dark");
      setIsDarkMode(document.body.classList.contains("dark"));
  
      if (icon) {
        if (document.body.classList.contains("dark")) {
          icon.classList.remove("fa-moon");
          icon.classList.add("fa-sun");
        } else {
          icon.classList.remove("fa-sun");
          icon.classList.add("fa-moon");
        }
      }
    };
  
    if (dayNight) {
      dayNight.addEventListener("click", toggleDarkMode);
    }
  
    // Initial check (on page load)
    if (icon) {
      if (document.body.classList.contains("dark")) {
        icon.classList.add("fa-sun");
      } else {
        icon.classList.add("fa-moon");
      }
    }
  
    return () => {
      if (dayNight) dayNight.removeEventListener("click", toggleDarkMode);
    };
  }, []);
  
  

  return (
    <>
      {/* Main Container Start */}
      <div className="main-container">

        {/* Aside Start */}
        <div className="aside">
          <div className="logo">
            <a href="#"><span>S</span>hailesh</a>
          </div>

          <div className="nav-toggler">
            <span></span>
          </div>

          <ul className="nav">
  <li><a href="#home" className={activeSection === "home" ? "active" : ""}><i className="fa fa-home"></i>Home</a></li>
  <li><a href="#about" className={activeSection === "about" ? "active" : ""}><i className="fa fa-user"></i>About</a></li>
  <li><a href="#services" className={activeSection === "services" ? "active" : ""}><i className="fa fa-list"></i>Services</a></li>
  <li><a href="#portfolio" className={activeSection === "portfolio" ? "active" : ""}><i className="fa fa-briefcase"></i>Portfolio</a></li>
  <li><a href="#contact" className={activeSection === "contact" ? "active" : ""}><i className="fa fa-comments"></i>Contact</a></li>
</ul>

        </div>
        {/* Aside End */}
        {/* Main Content Start */}
        <div className="main-content">

          {/* Home Section Start */}
          <section className="home section" id="home">
            <div className="container">
              <div className="row">
                <div className="home-info padd-15">
                  <h3 className="hello">Hello, my name is <span className="name">Shailesh Pawale</span></h3>
                  <h3 className="my-profession">I'm a <span className="typing">Web Designer</span></h3>
                  <p>I'm a Web Designer with extensive experience for over xyz years. My expertise is to create website design, graphic design and many more...</p>
                  <a className="btn hire-me" href="#contact">Hire Me</a>
                </div>
                <div className="home-img padd-15">
                  <img src="images/Formal_Photo.jpg" alt="" />
                </div>
              </div>
            </div>
          </section>
          {/* Home Section End */}
          {/* About Section Start */}
          <section className="about section" id="about">
            <div className="container">
              <div className="row">
                <div className="section-title padd-15">
                  <h2>About Me</h2>
                </div>
              </div>

              <div className="row">
                <div className="about-content padd-15">
                  <div className="row">
                    <div className="about-text padd-15">
                      <h3>I'm Shailesh Pawale an <span>Web Developer</span></h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo quasi id dolore, voluptates at nam? Nisi necessitatibus alias eius consequuntur ab autem incidunt doloribus neque suscipit dolore!</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="personal-info padd-15">
                      <div className="row">
                        <div className="info-item padd-15"><p>Birthday: <span>12 Jan 2004</span></p></div>
                        <div className="info-item padd-15"><p>Age: <span>20</span></p></div>
                        <div className="info-item padd-15"><p>Website: <span>www.domain.com</span></p></div>
                        <div className="info-item padd-15"><p>Email: <span>shaileshpawale734@gmail.com</span></p></div>
                        <div className="info-item padd-15"><p>Degree: <span>CS graduate</span></p></div>
                        <div className="info-item padd-15"><p>Phone: <span>+91 9448863977</span></p></div>
                        <div className="info-item padd-15"><p>City: <span>Belgaum</span></p></div>
                        <div className="info-item padd-15"><p>Freelance: <span>Available</span></p></div>
                      </div>
                      <div className="row">
                        <div className="buttons padd-15">
                          <a href="#" className="btn">Download CV</a>
                          <a href="#contact" className="btn hire-me">Hire Me</a>
                        </div>
                      </div>
                    </div>
                    <div className="skills padd-15">
                      <div className="row">
                        <div className="skill-item padd-15">
                          <h5>JS</h5>
                          <div className="progress">
                            <div className="progress-in" style={{ width: "86%" }}></div>
                            <div className="skill-percent">86%</div>
                          </div>
                        </div>
                        <div className="skill-item padd-15">
                          <h5>CSS</h5>
                          <div className="progress">
                            <div className="progress-in" style={{ width: "66%" }}></div>
                            <div className="skill-percent">66%</div>
                          </div>
                        </div>
                        <div className="skill-item padd-15">
                          <h5>HTML</h5>
                          <div className="progress">
                            <div className="progress-in" style={{ width: "96%" }}></div>
                            <div className="skill-percent">96%</div>
                          </div>
                        </div>
                        <div className="skill-item padd-15">
                          <h5>Bootstrap</h5>
                          <div className="progress">
                            <div className="progress-in" style={{ width: "76%" }}></div>
                            <div className="skill-percent">76%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="education padd-15">
                      <h3 className="title">Education</h3>
                      <div className="row">
                        <div className="timeline-box padd-15">
                          <div className="timeline shadow-dark">
                            <div className="timeline-item">
                              <div className="circle-dot"></div>
                              <h3 className="timeline-date">
                                <i className="fa fa-calendar"></i>2013 - 2015
                              </h3>
                              <h4 className="timeline-title">Graduation in Computer Science</h4>
                              <p className="timeline-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                            <div className="timeline-item">
                              <div className="circle-dot"></div>
                              <h3 className="timeline-date">
                                <i className="fa fa-calendar"></i>2015 - 2017
                              </h3>
                              <h4 className="timeline-title">Intermediate Education</h4>
                              <p className="timeline-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                            <div className="timeline-item">
                              <div className="circle-dot"></div>
                              <h3 className="timeline-date">
                                <i className="fa fa-calendar"></i>2017 - 2020
                              </h3>
                              <h4 className="timeline-title">High School</h4>
                              <p className="timeline-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="experience padd-15">
                      <h3 className="title">Experience</h3>
                      <div className="row">
                        <div className="timeline-box padd-15">
                          <div className="timeline shadow-dark">
                            <div className="timeline-item">
                              <div className="circle-dot"></div>
                              <h3 className="timeline-date">
                                <i className="fa fa-calendar"></i>2021 - 2023
                              </h3>
                              <h4 className="timeline-title">Frontend Developer</h4>
                              <p className="timeline-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                            <div className="timeline-item">
                              <div className="circle-dot"></div>
                              <h3 className="timeline-date">
                                <i className="fa fa-calendar"></i>2019 - 2021
                              </h3>
                              <h4 className="timeline-title">UI/UX Designer</h4>
                              <p className="timeline-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                            <div className="timeline-item">
                              <div className="circle-dot"></div>
                              <h3 className="timeline-date">
                                <i className="fa fa-calendar"></i>2018 - 2019
                              </h3>
                              <h4 className="timeline-title">Intern</h4>
                              <p className="timeline-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* About Section End */}

          {/* Services Section Start */}
          <section className="service section" id="services">
            <div className="container">
              <div className="row">
                <div className="section-title padd-15">
                  <h2>Services</h2>
                </div>
              </div>
              <div className="row">
                {/* Service Item Start */}
                <div className="service-item padd-15">
                  <div className="service-item-inner">
                    <div className="icon">
                      <i className="fa fa-mobile-alt"></i>
                    </div>
                    <h4>Web Design</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ipsam at.</p>
                  </div>
                </div>
                {/* Service Item End */}

                <div className="service-item padd-15">
                  <div className="service-item-inner">
                    <div className="icon">
                      <i className="fa fa-laptop-code"></i>
                    </div>
                    <h4>Web Development</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ipsam at.</p>
                  </div>
                </div>

                <div className="service-item padd-15">
                  <div className="service-item-inner">
                    <div className="icon">
                      <i className="fa fa-palette"></i>
                    </div>
                    <h4>Graphic Design</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ipsam at.</p>
                  </div>
                </div>

                <div className="service-item padd-15">
                  <div className="service-item-inner">
                    <div className="icon">
                      <i className="fa fa-code"></i>
                    </div>
                    <h4>Clean Code</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ipsam at.</p>
                  </div>
                </div>

                <div className="service-item padd-15">
                  <div className="service-item-inner">
                    <div className="icon">
                      <i className="fa fa-search"></i>
                    </div>
                    <h4>SEO Optimization</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ipsam at.</p>
                  </div>
                </div>

                <div className="service-item padd-15">
                  <div className="service-item-inner">
                    <div className="icon">
                      <i className="fa fa-bullhorn"></i>
                    </div>
                    <h4>Marketing</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ipsam at.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Services Section End */}

          {/* Portfolio Section Start */}
          <section className="portfolio section" id="portfolio">
            <div className="container">
              <div className="row">
                <div className="section-title padd-15">
                  <h2>Portfolio</h2>
                </div>
              </div>
              <div className="row">
                <div className="portfolio-heading padd-15">
                  <h2>My Last Projects:</h2>
                </div>
              </div>
              <div className="row">
                {/* Portfolio Item Start */}
                <div className="portfolio-item padd-15">
                  <div className="portfolio-item-inner shadow-dark">
                    <div className="portfolio-img">
                      <img src="images/portfolio/portfolio-1.jpg" alt="Project 1" />
                    </div>
                  </div>
                </div>
                {/* Portfolio Item End */}

                <div className="portfolio-item padd-15">
                  <div className="portfolio-item-inner shadow-dark">
                    <div className="portfolio-img">
                      <img src="images/portfolio/portfolio-2.jpg" alt="Project 2" />
                    </div>
                  </div>
                </div>

                <div className="portfolio-item padd-15">
                  <div className="portfolio-item-inner shadow-dark">
                    <div className="portfolio-img">
                      <img src="images/portfolio/portfolio-3.jpg" alt="Project 3" />
                    </div>
                  </div>
                </div>

                <div className="portfolio-item padd-15">
                  <div className="portfolio-item-inner shadow-dark">
                    <div className="portfolio-img">
                      <img src="images/portfolio/portfolio-4.jpg" alt="Project 4" />
                    </div>
                  </div>
                </div>

                <div className="portfolio-item padd-15">
                  <div className="portfolio-item-inner shadow-dark">
                    <div className="portfolio-img">
                      <img src="images/portfolio/portfolio-5.jpg" alt="Project 5" />
                    </div>
                  </div>
                </div>

                <div className="portfolio-item padd-15">
                  <div className="portfolio-item-inner shadow-dark">
                    <div className="portfolio-img">
                      <img src="images/portfolio/portfolio-6.jpg" alt="Project 6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Portfolio Section End */}
          {/* Contact Section Start */}
          <section className="contact section" id="contact">
            <div className="container">
              <div className="row">
                <div className="section-title padd-15">
                  <h2>Contact</h2>
                </div>
              </div>
              <h3 className="contact-title padd-15">Do you have any Questions?</h3>
              <h4 className="contact-sub-title padd-15">I'm at your Services</h4>
              <div className="row">
                <div className="contact-item-info padd-15">
                  <div className="icon"><i className="fa fa-phone"></i></div>
                  <h4>Call us on</h4>
                  <p>+91 9448863977</p>
                </div>

                <div className="contact-item-info padd-15">
                  <div className="icon"><i className="fa fa-map-marker-alt"></i></div>
                  <h4>Office</h4>
                  <p>Belgaum</p>
                </div>

                <div className="contact-item-info padd-15">
                  <div className="icon"><i className="fa fa-envelope"></i></div>
                  <h4>Email</h4>
                  <p>shaileshpawale734@gmail.com</p>
                </div>

                <div className="contact-item-info padd-15">
                  <div className="icon"><i className="fa fa-globe-europe"></i></div>
                  <h4>Website</h4>
                  <p>www.domain.com</p>
                </div>
              </div>

              <h3 className="contact-title padd-15">Send me an Email</h3>
              <h4 className="contact-sub-title padd-15">I'm very responsive to your messages</h4>

              <div className="row">
                <div className="contact-form padd-15">
                  <div className="row">
                    <div className="form-item col-6 padd-15">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Name" />
                      </div>
                    </div>
                    <div className="form-item col-6 padd-15">
                      <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-item col-12 padd-15">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Subject" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-item col-12 padd-15">
                      <div className="form-group">
                        <textarea className="form-control" placeholder="Message"></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-item col-12 padd-15">
                      <button type="submit" className="btn">Send Message</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Contact Section End */}
          {/* Style Switcher Start */}
          <div className="style-switcher">
            <div className="style-switcher-toggler s-icon">
              <i className="fas fa-cog fa-spin"></i>
            </div>
            <div className="day-night s-icon">
              <i className="fas"></i>
            </div>
            <h4>Theme Colors</h4>
            <div className="colors">
              <span className="color-1" onClick={() => setActiveStyle("color-1")}></span>
              <span className="color-2" onClick={() => setActiveStyle("color-2")}></span>
              <span className="color-3" onClick={() => setActiveStyle("color-3")}></span>
              <span className="color-4" onClick={() => setActiveStyle("color-4")}></span>
              <span className="color-5" onClick={() => setActiveStyle("color-5")}></span>
            </div>
          </div>
          {/* Style Switcher End */}

        </div> {/* End of main-content */}
      </div> {/* End of main-container */}
    </>
  );
}

export default App;
