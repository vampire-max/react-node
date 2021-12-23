import React, { useEffect, useState } from "react";
import { getApiClient } from "../module/axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getApiClient()
      .get("/user/getall")
      .then((res) => {
        console.log(res);
        setUsers(res.data.users);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div>
      <UserForm
        onSuccess={(newUser) => setUsers((prev) => [newUser, ...prev])}
      />
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>name</th>
              <th>username</th>
              <th>password</th>
              <th>gender</th>
              <th>country</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>{user.gender}</td>
                <td>{user.country}</td>
                <td>
                  <button
                    onClick={() => {
                      // use edit props to fill the form with this user data.
                      // on handleSubmit, check if edit prop has data, if so
                      // call update-user, or call add-user
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      console.log(
                        `Call delete api with id ${user._id}. then filter out this user.`
                      );
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
const UserForm = ({ edit, onSuccess }) => {
  const [name, setName] = useState(edit?.name || "");
  const [username, setUsername] = useState(edit?.username || "");
  const [password, setPassword] = useState(edit?.password || "");
  const [gender, setGender] = useState(edit?.gender || "");
  const [country, setCountry] = useState(edit?.country || "");
  const handleSubmit = (e) => {
    e.preventDefault();
    getApiClient()
      .post("/user/add-user", {
        name,
        username,
        password,
        gender,
        country,
      })
      .then((res) => {
        if (res.status === 200) {
          onSuccess?.(res.data);
          setName("");
          setUsername("");
          setPassword("");
          setGender("");
          setCountry("");
        }
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <ul>
        <li>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </li>
        <li>
          <label>
            userName:
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </li>
        <li>
          <label>
            password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </li>
        <li>
          <label>
            gender:
            <input
              type="text"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </label>
        </li>
        <li>
          <label>
            country:
            <input
              type="text"
              name="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </label>
        </li>
      </ul>

      <button>Submit User</button>
    </form>
  );
};

export default Users;
