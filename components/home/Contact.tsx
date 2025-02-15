'use client'

import React, { useEffect, useState } from 'react'
import Turnstile from "react-turnstile";

function Contact() {
  const hasAutoForm = true;
  const [token, setToken] = useState<string | null>(null)
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [invalidFields, setInvalidFields] = useState<Record<string, string[]>>({})
  const [captchaKey, setCaptchaKey] = useState<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setError("")
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setInvalidFields({});

    if (!token) {
      setError("Please complete the captcha before submitting.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/contact_messages", {
        body: JSON.stringify({ ...formData, captcha_token: token }),
        method: "POST",
      }).then((res) => res.json())
      
      if (res?.errors) {
        setInvalidFields(res.errors);
        return;
      }

      if (res?.status == 200) {
        setFormData({ name: "", email: "", subject: "", message: "" })
        setSuccess(res?.message ?? "Message sent successfully");
        return
      } 
      
      throw new Error(res.message)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
      setToken("")
      setCaptchaKey((prev) => prev + 1);
    }
  }

  useEffect(() => {
    hasAutoForm && setFormData({
      name: "John Doe",
      email: "johndoe@example.com",
      subject: "Hello",
      message: "Hello, I'm interested in working with you."
    })
  }, []);

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
              
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1402103273913!2d106.64711587326333!3d-6.2452467611483105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fbe305fd83c3%3A0x2b95e8d6d18aca25!2sBundaran%20Alam%20Sutera!5e0!3m2!1sid!2sid!4v1691053130612!5m2!1sid!2sid" frameBorder={0} style={{ border: 0, width: '100%', minHeight: 350 }} allowFullScreen></iframe>
            </div>
          </div>

          <div className="col-lg-7 mt-4 mt-lg-0 d-flex align-items-stretch">
            <form onSubmit={handleSubmit} className="php-email-form">
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name<span className="text-danger">*</span></label>
                  <input type="text" className="form-control" name="name" id="name" required onChange={handleChange} defaultValue={formData.name} />
                  {invalidFields?.name && <div className="text-danger small">{invalidFields.name[0]}</div>}
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="email">Your Email<span className="text-danger">*</span></label>
                  <input type="email" className="form-control" name="email" id="email" required onChange={handleChange} defaultValue={formData.email} />
                  {invalidFields?.email && <div className="text-danger small">{invalidFields.email[0]}</div>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject<span className="text-danger">*</span></label>
                <input type="text" className="form-control" name="subject" id="subject" required onChange={handleChange} defaultValue={formData.subject} />
                {invalidFields?.subject && <div className="text-danger small">{invalidFields.subject[0]}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message<span className="text-danger">*</span></label>
                <textarea className="form-control" name="message" id="message" rows={10} required onChange={handleChange} defaultValue={formData.message}></textarea>
                {invalidFields?.message && <div className="text-danger small">{invalidFields.message[0]}</div>}
              </div>

              {error && <div className="alert alert-danger fade show" role="alert">{error}</div>}

              <div className="text-center">
                {success ? (
                  <div className="alert alert-info fade show mb-0" role="alert">
                    {success}
                  </div>
                ) : (
                  <>
                    <Turnstile
                      sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY as string}
                      onVerify={(token) => setToken(token)}
                      key={captchaKey}
                    />
                    {invalidFields?.captcha_token && <div className="text-danger small mb-3">{invalidFields.captcha_token[0]}</div>}

                    <button type="submit" disabled={loading} className="mt-2 btn btn-primary">
                      {loading ? 'Sending Message...' : 'Send Message'}
                    </button>
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}export default Contact
