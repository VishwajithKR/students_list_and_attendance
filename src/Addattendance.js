import { useFormik } from 'formik';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Addattendance() {
let params = useParams()
let navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
          attendance : '',
          date:'',
          userid :parseInt( params.id)
        },
        onSubmit:async (values) => {
            console.log(values);
       await  fetch("https://637398230bb6b698b610942d.mockapi.io/attendance",{
            method:"POST",
            body:JSON.stringify(values),
            headers:{
                "Content-type":"application/json"
            }
         })
         navigate(`/student/${params.id}`)
        },
      });
        return (
            <>
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 class="h3 mb-0 text-gray-800">Add Attendance</h1>

                </div>

                <div className='container'>
                   <form onSubmit={formik.handleSubmit}>
                   <div className='row'>
                        <div className='col-lg-6'>
                            <select name="attendance" className='form-control'
                            onChange={formik.handleChange}
                            value={formik.values.attendance}>
                                <option value="present ">Present</option>
                                <option valuse="absent ">Absent</option>
                            </select>
                        </div>
                        <div className='col-lg-6'>
                           <input name= "date" type="date" className='form-control'
                             onChange={formik.handleChange}
                             value={formik.values.date}/>
                        </div>
                        <div className='col-lg-6'>
                           <input type="submit" className='btn btn-primary btn-sm mt-3'/>
                        </div>
                    </div>
                   </form>

                </div>

            </>
        )
    }

    export default Addattendance