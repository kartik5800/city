import React from 'react';
import { NavLink } from 'react-router-dom';
import { boolean } from 'yup';
import InputBox from '../../Components/InputBox/InputBox';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';

function Appointment(props) {
  let Make_Appointment = {
    name: yup.string().required('enter name'),
    email: yup.string().required('please enter email'),
    phone: yup.string().required('please enter phone'),
    date: yup.string().required('please enter date'),
    department: yup.string().required('please enter department'),
    message: yup.string().required('please enter message'),
  }

  let schema = yup.object().shape(Make_Appointment);
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      date: '',
      department: '',
      message: '',
    },
    validationSchema: schema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const{handleChange ,errors ,handleSubmit} = formik;


  return (
    <section id="appointment" className="appointment">
      <div className="container">
        <div className="section-title">
          <h2>Make an Appointment</h2>
          <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
            blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
            Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
        </div>
        <div className='row text-center'>
          <div className='col-6'>
            <NavLink activeClassName='aptnav' to={"/Make_Appointment"}>Make_Appointment</NavLink>
          </div>
          <div className='col-6'>
            <NavLink activeClassName='aptnav' to={"/ListAppointment"}>List_Appointment</NavLink>
          </div>
        </div>
        <Formik value={formik}>
          <Form onSubmit={handleSubmit}  className="php-email-form">
            <div className="row">
              <div className="col-md-4 form-group">
                <InputBox
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  errors={Boolean(errors.name)}
                  errormessage = {errors.name}
                  onchange={handleChange}
                />
                <div className="validate" />
              </div>
              <div className="col-md-4 form-group mt-3 mt-md-0">
                <InputBox
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  errors={Boolean(errors.email)}
                  errormessage = {errors.email}
                  onchange={handleChange}
                  />
                <div className="validate" />
              </div>
              <div className="col-md-4 form-group mt-3 mt-md-0">
                <InputBox
                  type="tel"
                  className="form-control"
                  name="phone"
                  id="phone"
                  placeholder="Your Phone"
                  errors={Boolean(errors.phone)}
                  errormessage = {errors.phone}
                  onchange={handleChange}
                />
                <div className="validate" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 form-group mt-3">
                <InputBox
                  type="datetime"
                  name="date"
                  className="form-control datepicker"
                  id="date"
                  placeholder="Appointment Date"
                  errors={Boolean(errors.date)}
                  errormessage = {errors.date}
                  onchange={handleChange}
                  />
                <div className="validate" />
              </div>
              <div className="col-md-4 form-group mt-3">
                <select name="department" id="department" className="form-select">
                  <option value>Select Department</option>
                  <option value="Department 1">Department 1</option>
                  <option value="Department 2">Department 2</option>
                  <option value="Department 3">Department 3</option>
                </select>
                <div className="validate" />
              </div>
            </div>
            <div className="form-group mt-3">
              <textarea
                className="form-control"
                name="message"
                rows={5}
                placeholder="Message (Optional)"
                defaultValue={""} />
              <div className="validate" />
            </div>
            <div className="mb-3">
              <div className="loading">Loading</div>
              <div className="errors-message" />
              <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
            </div>
            <div className="text-center"><button type="submit">Make an Appointment</button></div>
          </Form>
        </Formik>
      </div>
    </section >

  );
}

export default Appointment;