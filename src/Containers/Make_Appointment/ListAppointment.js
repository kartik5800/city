import React, { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function ListAppointment(props) {

  const [data, setData] = useState([])

  const showData = () => {
    let localData = JSON.parse(localStorage.getItem("Appointment"));
    setData(localData);
    // console.log('listdata', listData.apt);
    // console.log('data', data);
  }

  

  const handleDelete = (id) => {
    let localData= JSON.parse(localStorage.getItem("Appointment"))
    let dData =localData.filter((l,i) => l.id !== id);
    localStorage.setItem("Appointment", JSON.stringify(dData));
    showData();

  }

  const handleEdit = () => {
    
  }

  useEffect(() => {
    showData();
  }, [])


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
            <NavLink activeClassName='aptnav' to={"/Appointment"}>Make_Appointment</NavLink>
          </div>
          <div className='col-6'>
            <NavLink activeClassName='aptnav' to={"/ListAppointment"}>List_Appointment</NavLink>
          </div>
        </div>
        <div>
        {
          data.map((d, i) => {
            return (
              <>
                <h6 key={i}>{d.name}</h6>
                <h6 key={i}>{d.email}</h6>
                <h6 key={i}>{d.phone}</h6>
                <h6 key={i}>{d.date}</h6>
                <button onClick={(() =>handleDelete(d.id))} > delete</button>
                <button onClick={(() =>handleEdit())} > Edit</button>
              </>
            )
          })
        }
      </div>
      </div>

      
    </section>

  );
}

export default ListAppointment;
