import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function Studentlist() {

    const [Students, setStudents] = useState([])


    let Name = async () => {
        try {
            let StudentData = await fetch("https://637398230bb6b698b610942d.mockapi.io/student")
            let Studentlist = await StudentData.json();
            setStudents(Studentlist);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        Name()
    }, []);



    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Student list</h1>
                <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
            </div>
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Avatar</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Avatar</th>
                        <th>Action</th>


                    </tr>
                </tfoot>
                <tbody>


                    {
                        Students.map((student) => {
                            return (
                                <tr>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>
                                        <img src={student.avatar} />
                                    </td>
                                    <td>
                                        <Link to={`/student/${student.id}`}>
                                            <button className='btn btn-primary'>View</button>
                                        </Link>



                                    </td>
                                </tr>

                            )
                        })
                    }





                </tbody>
            </table>

        </>
    )
}

export default Studentlist