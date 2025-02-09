import React from 'react'

function Resume() {
  let btn_contact = "Hi Nova, I would like to connect with you soon, please get back to me as soon as possible!";
  btn_contact = 'https://wa.me/6289506668480?text=' + btn_contact.replace(/ /g, '%20');

  return (
    <section id="resume" className="resume pb-0">
      <div className="container">

        <div className="section-title">
          <h2>Resume</h2>
          <p>Welcome to my professional journey—a path where passion meets purpose and innovation knows no bounds. With each step I've taken, I've embraced challenges and grown as a developer. My story is one of dedication, creativity, and a relentless pursuit of excellence. As you delve into my resume, you'll discover the experiences and skills that have shaped me into the developer I am today. Let's explore how I can bring value and expertise to your projects and initiatives.</p>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Nova Ardiansyah</h4>
              <p><em>Passionate and deadline-driven Web and Mobile Developer with 2+ years of experience crafting and delivering user-focused web and mobile applications from initial ideation to polished, functional products.</em></p>
              <ul>
                <li><a href="mailto:novaardiansyah78@gmail.com" target="_blank">novaardiansyah78@gmail.com</a></li>
                <li><a href={btn_contact} target="_blank">(+62) 895 0666 8480</a></li>
                <li><a href="https://novaardiansyah.my.id" target="_blank">https://novaardiansyah.my.id</a></li>
                <li><a href="https://maps.app.goo.gl/1hfjSNUMQzGKPDhy5" target="_blank">Tangerang Selatan, Banten, Indonesia</a></li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelor of Science in Computer Science</h4>
              <h5>2021 - present</h5>
              <p><em>Universitas Pamulang, Tangerang Selatan, Indonesia</em></p>
            </div>
            <div className="resume-item">
              <h4>Diploma in Software Engineering</h4>
              <h5>2017 - 2019</h5>
              <p><em>SMK Negeri 1 Trimurjo, Lampung Tengah, Indonesia.</em></p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Junior Web and Mobile Development</h4>
              <h5>2021 - Present</h5>
              <p><em>SofwareHouse, Tangerang, Indonesia.</em></p>
              <ul>
                <li>Play a pivotal role in identifying and resolving complex backend and frontend challenges for clients, ensuring seamless application functionality and user satisfaction.</li>
                <li>Take charge of application orchestration, overseeing its smooth operation for both clients and customers within the company.</li>
                <li>Collaborate closely with cross-functional teams, directing the implementation of solutions and ensuring efficient problem resolution</li>
                <li>Serve as a key liaison between clients and internal teams, facilitating effective communication and alignment of project goals.</li>
                <li>Streamline application workflows and processes, enhancing overall user experiences and driving customer satisfaction.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
