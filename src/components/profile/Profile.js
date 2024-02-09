import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useEditUserDetailMutation, useGetCurrencyQuery, useGetLanguageQuery, useGetUserDetailQuery } from "../products/productSlice";
import BillingAddres from "./BillingAddres";
import axios from "axios";

function Profile() {
  const user_id = window.localStorage.getItem('user_id')
  const token = window.localStorage.getItem('token')
  const [sendDataUser] = useEditUserDetailMutation()
  const [show, setShow] = useState(false)
  // const { data: language } = useGetLanguageQuery()
  // const { data: currency } = useGetCurrencyQuery()
  // const { data, isSuccess } = useGetUserDetailQuery(user_id)

  const [language, setlanguage] = useState(null)
  const [currency, setcurrency] = useState(null)

  const getData2 = async () => {
    const res = await axios.get(`https://onlineparttimejobs.in/api/language`)
    const res2 = await axios.get(`https://onlineparttimejobs.in/api/currency`)
    setlanguage(res.data)
    setcurrency(res2.data)
  }

  let isSuccess = false
  const [data, setData] = useState(null)
  const dispach = useDispatch()

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    currency: "",
    language: "",
    image: ''
  })

  const getData = async () => {
    const res = await axios.get(`https://onlineparttimejobs.in/api/user/profile`, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    })
    setData(res.data)
  }

  useEffect(() => {
    getData2()
    getData()
  }, [])

  const onchengeHandle = (e) => {
    const clone = { ...state }
    clone[e.target.name] = e.target.value
    if (e.target.name === 'language' || e.target.name === 'currency') {
      clone[e.target.id] = e.target.value
    }
    setState(clone)
  }


  const [file, setFile] = useState(null)
  const onchagePhoto = (e) => {
    setFile(e.target.files[0])
  }

  const sendData = async () => {
    const obj = {
      firstname: state.firstName,
      lastname: state.lastName,
      email: state.email,
      mobile: state.mobile,
      userid: user_id,
      currency: state.currId,
      language: state.languId
    }
    const formData = new FormData();
    formData.append('image', file);
    if (file) {
      try {
        const res = await axios.put(`https://onlineparttimejobs.in/api/user/updateProfile`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        window.localStorage.setItem('profilePic', res.data.profilePhoto?.url)
      } catch (error) {
        alert('Server Error Image Not Update')
      }
    }
    formData.delete('image')

    sendDataUser({ data: obj, token, token })
    setShow(true)
    window.localStorage.setItem('userName', state.firstName + " " + state.lastName)
    setTimeout(() => {
      setShow(false)
    }, 1000);
  }

  useEffect(() => {
    const obj = {
      firstName: data?.getaUser?.firstname,
      lastName: data?.getaUser?.lastname,
      email: data?.getaUser?.email,
      mobile: data?.getaUser?.mobile,
      currency: data?.getaUser?.currency?.name,
      language: data?.getaUser?.language?.name,
      currId: data?.getaUser?.currency?._id,
      languId: data?.getaUser?.language?._id
    }
    window.localStorage.setItem('profilePic', data?.getaUser?.profilePhoto?.url)
    setState(obj)
  }, [data])


  return (
    <>
      <div className="profilePage p-30">
        <div className="container">
          <div className="pageTitle">
            <h1 className="fs-3">Manage Profile</h1>
          </div>
          <div className="row">
            <div className="col-lg-9">
              <form>

                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0 h6">Basic Info</h5>
                  </div>
                  <div className="card-body">



                    <div className="form-group row mb-3">
                      <label className="col-md-2 col-form-label">
                        Image
                      </label>
                      <div className="col-md-10">
                        {/* <input
                        
                         
                          placeholder="Image"
                          name="image"
                          autoComplete="off"
                          value={state.image}
                         
                        /> */}
                        <input  type="file"  className="form-control"  onChange={onchagePhoto}/>
                        <img style={{ width: "100px", height: "100px" }} src={window.localStorage.getItem('profilePic')} />
                      </div>
                    </div>



                    <div className="form-group row mb-3">
                      <label className="col-md-2 col-form-label">
                        First Name
                      </label>
                      <div className="col-md-10">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="John"
                          name="firstName"
                          autoComplete="off"
                          value={state.firstName}
                          onChange={onchengeHandle}
                        />
                      </div>
                    </div>
                    <div className="form-group row mb-3">
                      <label className="col-md-2 col-form-label">
                        Last Name
                      </label>
                      <div className="col-md-10">
                        <input
                          type="text"
                          className="form-control"
                          name="lastName"
                          autoComplete="off"
                          value={state.lastName}
                          onChange={onchengeHandle}
                        />
                      </div>
                    </div>

                    <div className="form-group row mb-3">
                      <label className="col-md-2 col-form-label">
                        Email
                      </label>
                      <div className="col-md-10">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Smith"
                          name="email"
                          value={state.email}
                          onChange={onchengeHandle}
                          autoComplete="off"
                        />
                      </div>
                    </div>
                    <div className="form-group row mb-3">
                      <label className="col-md-2 col-form-label">
                        Your Phone
                      </label>
                      <div className="col-md-10">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="+91-123456789"
                          name="mobile"
                          onChange={onchengeHandle}
                          value={state.mobile}
                        />
                      </div>
                    </div>




                    <div className="form-group row mb-3">
                      <label className="col-md-2 col-form-label">
                        Your Language
                      </label>
                      <div className="col-md-10">
                        <select className="form-select" name="language" id="languId" onChange={onchengeHandle} aria-label="Default select example">
                          <option selected>{state?.language ? state.language : 'Select Language'}</option>
                          {language && language.map((item) => {

                            if (item.name === state?.language) {
                              return
                            } else {
                              return <option key={item._id} value={item._id}>{item.name}</option>
                            }

                          })}
                        </select>
                      </div>


                    </div>
                    <div className="form-group row mb-3">
                      <label className="col-md-2 col-form-label">
                        Your Currency
                      </label>
                      <div className="col-md-10">
                        <select className="form-select" name="currency" id="currId" onChange={onchengeHandle} aria-label="Default select example">
                          <option selected>{state?.currency ? state.currency : 'Select Currency'}</option>
                          {currency && currency.map((item) => {
                            if (item.name === state?.currency) {
                              return
                            } else {
                              return <option key={item._id} value={item._id}>{item.name}</option>
                            }

                          })}
                        </select>
                      </div>
                    </div>


                  </div>
                </div>
                <div className="form-group mt-3 text-right">
                  {show && (<div className="alert alert-success" role="alert">
                    Profile Update Successfully!
                  </div>)}
                  <button style={{ display: "flex", alignItems: "center" }} type="button" onClick={sendData} className="btn btn-primary">
                    Update Profile
                    {show && <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>}
                  </button>
                </div>
              </form>

              {/* <BillingAddres /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
