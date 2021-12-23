import React, { useEffect, useState } from 'react'
import { getApiClient } from '../module/axios'

const UserForm = () => {
  const [value, setValue] = useState({})
  const [users, setUsers] = useState([])

  const handleChange = (fieldname) => (e) => {
    setValue((prevValue) => ({ ...prevValue, [fieldname]: e.target.value }))
  }

  const handleSubmit = () => {
    console.log('values:', value)
    getApiClient()
      .post('/user/add-user', value)
      .then((res) => {
        console.log(res)
        fetchUsers()
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const fetchUsers = () => {
    getApiClient()
      .get('/user/getall')
      .then((res) => {
        console.log(res)
        setUsers(res.data.users)
      })
      .catch((e) => console.log(e))
  }

  useEffect(() => {
    
    console.log('users', users)
  }, [users])
  return (
    <div>
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
          <li>
            <label>
              country:
              <input
                type="text"
                name="country"
                value={value.country}
                onChange={handleChange('country')}
              />
            </label>
          </li>
        </ul>

        <button type="button" onClick={handleSubmit}>
          Submit User
        </button>
      </form>
      <div>
        <table className="table">
          <tr>
            <th>name</th>
            <th>username</th>
            <th>password</th>
            <th>gender</th>
            <th>country</th>
          </tr>
          {users.map((user) => (
            <tr>
              <td key={user._id}>{user.name}</td>
              <td key={user._id}>{user.username}</td>
              <td key={user._id}>{user.password}</td>
              <td key={user._id}>{user.gender}</td>
              <td key={user._id}>{user.country}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  )
}

export default UserForm
