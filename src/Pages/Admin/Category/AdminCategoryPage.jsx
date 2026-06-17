import React from 'react'
import AdminSidebar from '../../../Components/Admin/AdminSidebar'
import { Link } from 'react-router-dom'

export default function AdminCategoryPage() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
            <div className="col-md-3">
                <AdminSidebar/>
            </div>
            <div className="col-md-9">
                <h5 className='bg-primary text-light text-center p-2'>Category
                    <Link to="/admin/category/create"><i className='bi bi-plus text-light float-end'></i></Link>
                </h5>
            </div>
        </div>
      </div>
    </>
  )
}
