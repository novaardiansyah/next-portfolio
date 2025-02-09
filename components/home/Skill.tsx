import React from 'react'

function Skill() {
  return (
    <section id="skills" className="skills section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
          <p>Embarking on the journey of development, I've honed a versatile skill set that empowers me to create impactful digital solutions. Here's a glimpse of my capabilities:</p>
        </div>

        <div className="row skills-content">
          <div className="col-lg-6" data-aos="fade-up">
            <div className="progress">
              <span className="skill">Laravel <i className="val">95%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill
