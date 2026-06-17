import React from 'react'
import AdminSidebar from '../../Components/Admin/AdminSidebar'

export default function AdminHomePage() {
    return (
        <div className='container-fluid my-3'>
            <div className="row">
                <div className="col-md-3">
                    <AdminSidebar />
                </div>
                <div className="col-md-9">
                    <h5 className='bg-primary p-2 text-light text-center'>Admin</h5>
                    <table className='table table-bordered text-dark'>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <td>Nitin Chauhan</td>
                            </tr>
                            <tr>
                                <th>Username</th>
                                <td>nitin</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>vishankchauhan@gmail.com</td>
                            </tr>
                            <tr>
                                <th>Phone</th>
                                <td>9873848046</td>
                            </tr>
                            <tr>
                                <th>Role</th>
                                <td>Super Admin</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
