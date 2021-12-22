import React, { useEffect, useState } from 'react'
import { getApiClient } from '../module/axios'

const UserForm = () => {
  const [value, setValue] = useState({})

  const handleChange = (fieldname) => (e) => {
    setValue((prevValue) => ({ ...prevValue, [fieldname]: e.target.value }))
  }

  const handleSubmit = () => {
    console.log('values:', value)
    getApiClient()
      .post('/user/add-user', value)
      .then((res) => {
        console.log(res)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getApiClient()
      .get('/user/getall')
      .then((res) => {
        console.log(res)
      })
      .catch((e) => console.log(e))
    // console.log('value', value)
  },[value])
  return (
    <form>
      <ul>
        <li>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={value.name}
              onChange={handleChange('name')}
            />
          </label>
        </li>
        <li>
          <label>
            userName:
            <input
              type="text"
              name="username"
              value={value.username}
              onChange={handleChange('username')}
            />
          </label>
        </li>
        <li>
          <label>
            password:
            <input
              type="password"
              name="password"
              value={value.password}
              onChange={handleChange('password')}
            />
          </label>
        </li>
        <li>
          <label>
            gender:
            <input
              type="text"
              name="gender"
              value={value.gender}
              onChange={handleChange('gender')}
            />
          </label>
        </li>
      </ul>

      <button type="button" onClick={handleSubmit}>
        Submit User
      </button>
    </form>
  )
}

export default UserForm
