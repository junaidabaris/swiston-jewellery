// ProfilePage.js
import React, { useState } from 'react';
import InputField from './InputField';
import SelectOption from './SelectOption';
import './Profile_page.css'

const selectLanguage = [{ id: 1, value: 'Hindi' }, { id: 2, value: 'English' }];
const selectCurrency = [{ id: 1, value: 'INR' }, { id: 2, value: 'Dollar' }];

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    image: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    language: '',
    currency: '',
  });

  const handleChange = (updatedData) => {
    setFormData((prevData) => ({ ...prevData, ...updatedData }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields here
    console.log(formData); 
  };

  return (
    <div className='profile_page  '>
      <h4 style={{borderBottom :'2px solid gray', padding:'8px'}}>Basic Info</h4>
      <form className=' p-2  form_field' onSubmit={handleSubmit}>
        <InputField
          title={'Image'}
          placeholder={'Choose File'}
          type={'file'}
          name={'image'}
          value={formData.image}
          onChange={handleChange}
        />
        <InputField
          title={'First Name'}
          placeholder={'eg:- Md Daud '}
          type={'text'}
          name={'firstName'}
          value={formData.firstName}
          onChange={handleChange}
        />
        <InputField
          title={'Last Name'}
          placeholder={'eg:- Ansarii'}
          type={'text'}
          name={'lastName'}
          value={formData.lastName}
          onChange={handleChange}
        />
        <InputField
          title={'Email'}
          placeholder={'mddaud@gmail.com'}
          type={'email'}
          name={'email'}
          value={formData.email}
          onChange={handleChange}
        />
        <InputField
          title={'Your Number'}
          placeholder={'832983433'}
          type={'number'}
          name={'phoneNumber'}
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <SelectOption
          value={selectLanguage}
          title={'Choose Language'}
          name={'language'}
          valueD={formData.language}
          onChange={handleChange}
        />
        <SelectOption
          value={selectCurrency}
          title={'Choose Currency'}
          name={'currency'}
          valueD={formData.currency}
          onChange={handleChange}
        />
        <button type="submit" className='btn btn-success m-2 ' style={{width:'100px'}}>Updata</button>
      </form>
    </div>
  );
};

export default ProfilePage