import React, { useEffect, useState } from 'react'
import AdminSidebar from '../../../Components/Admin/AdminSidebar'
import { useDispatch, useSelector } from 'react-redux'

import { ToastContainer, toast } from 'react-toastify';

import { createSetting, getSetting, updateSetting } from "../../../Redux/ActionCreators/SettingActionCreators"
export default function AdminSettingPage() {
  let [data, setData] = useState({
    siteName: '',
    address: '',
    map1: '',
    map2: '',
    email: '',
    phone: '',
    whatsapp: '',
    facebook: '',
    twitter: '',
    instagram: '',
    youtube: '',
  })

  function getInputData(e) {
    let { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  function postData(e) {
    e.preventDefault()
    let item = { ...data }
    if (SettingStateData.length)
      dispatch(updateSetting(item))
    else
      dispatch(createSetting(item))

    toast("Your Record Has Been Updated!!!");
  }

  let SettingStateData = useSelector(state => state.SettingStateData)
  let dispatch = useDispatch()

  useEffect(() => {
    (() => {
      dispatch(getSetting())
      if (SettingStateData.length) {
        setData({ ...data, ...SettingStateData[0] })
      }
    })()
  }, [SettingStateData.length])
  return (
    <>
      <ToastContainer />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <AdminSidebar />
          </div>
          <div className="col-md-9 mb-3">
            <h5 className='bg-primary text-light text-center p-2'>Setting</h5>
            <form onSubmit={postData}>
              <div className="row">

                <div className="col-12 mb-3">
                  <label>Map1</label>
                  <input type="url" name="map1" value={data.map1} onChange={getInputData} placeholder='Map1' className='form-control border-primary' />
                </div>

                <div className="col-12 mb-3">
                  <label>Map2</label>
                  <input type="url" name="map2" value={data.map2} onChange={getInputData} placeholder='Map2' className='form-control border-primary' />
                </div>

                <div className="col-12 mb-3">
                  <label>Address</label>
                  <textarea name="address" value={data.address} onChange={getInputData} placeholder='Address' className='form-control border-primary' />
                </div>

                <div className="col-md-6 mb-3">
                  <label>Site Name</label>
                  <input type="text" name="siteName" value={data.siteName} onChange={getInputData} placeholder='Site Name' className='form-control border-primary' />
                </div>

                <div className="col-md-6 mb-3">
                  <label>Email Address</label>
                  <input type="email" name="email" value={data.email} onChange={getInputData} placeholder='Email Address' className='form-control border-primary' />
                </div>

                <div className="col-md-6 mb-3">
                  <label>Phone Number</label>
                  <input type="text" name="phone" value={data.phone} onChange={getInputData} placeholder='Phone Number' className='form-control border-primary' />
                </div>

                <div className="col-md-6 mb-3">
                  <label>Whatsapp Number</label>
                  <input type="text" name="whatsapp" value={data.whatsapp} onChange={getInputData} placeholder='Whatsapp' className='form-control border-primary' />
                </div>

                <div className="col-12 mb-3">
                  <label>Facebook Profile Page URL</label>
                  <input type="url" name="facebook" value={data.facebook} onChange={getInputData} placeholder='Facebook Profile Page Url' className='form-control border-primary' />
                </div>
                <div className="col-12 mb-3">
                  <label>Twitter Profile Page URL</label>
                  <input type="url" name="twitter" value={data.twitter} onChange={getInputData} placeholder='Twitter Profile Page Url' className='form-control border-primary' />
                </div>
                <div className="col-12 mb-3">
                  <label>Instagram Profile Page URL</label>
                  <input type="url" name="instagram" value={data.instagram} onChange={getInputData} placeholder='Instagram Profile Page Url' className='form-control border-primary' />
                </div>
                <div className="col-12 mb-3">
                  <label>Youtube Profile Page URL</label>
                  <input type="url" name="youtube" value={data.youtube} onChange={getInputData} placeholder='Youtube Profile Page Url' className='form-control border-primary' />
                </div>
                <div className="col-12 mb-3">
                  <label>Linkedin Profile Page URL</label>
                  <input type="url" name="linkedin" value={data.linkedin} onChange={getInputData} placeholder='Linkedin Profile Page Url' className='form-control border-primary' />
                </div>

                <div className="col-12">
                  <button type="submit" className='btn btn-primary w-100'>Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
