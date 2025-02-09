import React from 'react'

function Contact() {
  const hasAutoForm = false;
  return (
    <section id="contact" className="contact section-bg pb-5">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>Feel free to reach out to me if you have any inquiries or if you're interested in collaborating on projects. I'm just an email or phone call away! Let's connect and explore the possibilities of working together to bring innovative ideas to life.</p>
        </div>

        <div className="row" data-aos="fade-in">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>Tangerang Selatan, Banten, Indonesia.</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>novaardiansyah78@gmail.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Phone:</h4>
                <p>(+62) 895 0666 8480</p>
              </div>
              {/* style="border:0; width: 100%; min-height: 350px;" */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1402103273913!2d106.64711587326333!3d-6.2452467611483105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fbe305fd83c3%3A0x2b95e8d6d18aca25!2sBundaran%20Alam%20Sutera!5e0!3m2!1sid!2sid!4v1691053130612!5m2!1sid!2sid" frameBorder={0} style={{ border: 0, width: '100%', minHeight: 350 }} allowFullScreen></iframe>
            </div>
          </div>

          <div className="col-lg-7 mt-4 mt-lg-0 d-flex align-items-stretch">
            <form action="{{ route('sendMessage') }}" method="post" role="form" className="php-email-form" id="formContactUs">
              @csrf

              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" className="form-control" name="name" id="name" defaultValue={hasAutoForm ? 'John Doe' : ''} />
                  <div className="invalid-feedback name"></div>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="email">Your Email</label>
                  <input type="email" className="form-control" name="email" id="email" defaultValue={hasAutoForm ? 'novaardiansyah817@gmail.com' : ''} />
                  <div className="invalid-feedback email"></div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" className="form-control" name="subject" id="subject" defaultValue={hasAutoForm ? 'Testing Contact Us' : ''} />
                <div className="invalid-feedback subject"></div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" name="message" id="message" rows={10} defaultValue={hasAutoForm ? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, suscipit.' : ''}></textarea>
                <div className="invalid-feedback message"></div>
              </div>

              <div className="form-group row">
                <div className="col-md-12">
                  <label htmlFor="captcha">Captcha</label>
                </div>

                {/* <div className="col-md-5 text-md-end">
                  <div className="captcha">
                    <span>{!! captcha_get_html() !!}</span>
                    <button type="button" className="btn btn-danger" className="reload" onclick="return reloadCaptcha(event)" data-url="{{ route('reloadCaptcha') }}">
                      &#x21bb;
                    </button>
                  </div>
                </div> */}

                <div className="col-md">
                  <input type="text" className="form-control" placeholder="Enter Captcha" name="captcha" id="captcha" />
                  <div className="invalid-feedback captcha"></div>
                </div>
              </div>

              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message"></div>
              </div>

              <span id="alert-cant-contact"></span>

              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
