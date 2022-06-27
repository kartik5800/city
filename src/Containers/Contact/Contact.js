import { Form, Formik, useFormik } from "formik";
import React from 'react';
// import InputBox from '../../Components/InputBox/InputBox';
import * as yup from "yup";

function Contact(props) {

  let contact_data = {
    name: yup.string().required("enter name"),
    email: yup.string().required("please enter email"),
    subject: yup.string().required("please enter subject"),
    message: yup.string().required("please enter message")


  };

  let schema = yup.object().shape(contact_data);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },

    validationSchema: schema,
    onSubmit: (values) => {

      const {
        name,
        email,
        subject,
        message
      } = values

      console.log(values);


      const cnt = {
        id: Math.floor(Math.random() * 1000),
        name,
        email,
        subject,
        message
      }


      let contactdata = JSON.parse(localStorage.getItem("contact_data"));
      console.log(contactdata);

      if (contactdata === null) {
        localStorage.setItem("contact_data", JSON.stringify([cnt]));
      } else {
        contactdata.push(cnt)
        localStorage.setItem("contact_data", JSON.stringify(contactdata));
      }


    }

  })


  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>

        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt" />
                <h4>Location:</h4>
                <p> F-505, Inovative Plazza New Delhi, India</p>
              </div>
              <div className="email">
                <i className="bi bi-envelope" />
                <h4>Email:</h4>
                <p>cityhospital@example.com</p>
              </div>
              <div className="phone">
                <i className="bi bi-phone" />
                <h4>Call:</h4>
                <p>+91 9988776655</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 mt-5 mt-lg-0">
            <Formik values={formik} >
              <Form action method="post" role="form" className="php-email-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      value={formik.values.name}

                    />

                    {
                      formik.errors.name? <p>{formik.errors.name}</p> : ''
                    }
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      value={formik.values.email}
                    />
                     {
                      formik.errors.email? <p>{formik.errors.email}</p> : ''
                    }
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    value={formik.values.subject}
                  />
                   {
                      formik.errors.subject? <p>{formik.errors.subject}</p> : ''
                    }
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={5}
                    placeholder="Message"
                    defaultValue={""}
                    value={formik.values.message}
                  />
                     {
                      formik.errors.message? <p>{formik.errors.message}</p> : ''
                    }
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center"><button type="submit">Send Message</button></div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Contact;