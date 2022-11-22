import { useState } from "react"
import { Link } from "react-router-dom";


import React, { useEffect } from 'react'
import { useParams } from "react-router-dom"

function Attendancelist() {

    let params = useParams()

    const [Students, setStudents] = useState([])


    let Name = async () => {
        try {
            let StudentData = await fetch("https://637398230bb6b698b610942d.mockapi.io/attendance")
            let Studentlist = await StudentData.json();
            setStudents(Studentlist);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        Name()
    }, []);

    // const [attendance, setAttendance] = useState([])


    // let name = async () => {
    //     try {

    //         let attendanceData = await fetch("https://637398230bb6b698b610942d.mockapi.io/attendance");
    //         let attendanceform = await attendanceData.json
    //         setAttendance(attendanceform)
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // useEffect(() => {
    //     name()
    // }, []);
    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Student list</h1>
                <Link to={`/add-attendance/${params.id}`} class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i>Add Attendance</Link>
            </div>



            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Attendance</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    
                                    <th>Attendance</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Attendance</th>
                                    <th>Date</th>

                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                    Students.map((attendance) => {
                                        return (
                                            <tr>
                                                <td>{attendance.attendance}</td>

                                                <td>{attendance.date}</td>
                                            </tr>
                                        )
                                    })
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Attendancelist