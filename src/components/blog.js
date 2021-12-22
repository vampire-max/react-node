import React, { useState } from 'react'

const BlogForm = () => {
  // const [value, setValue] = useState('')
  // const handleSubmit = () => {
  //   setValue(value)
  //   console.log(value)
  // }
  return (
    <div>
      <p>This is BlogForm</p>
      {/* <form onSubmit={handleSubmit}> */}
      <form>
        <label>
          name:
          <input type="text"></input>
        </label>
        {/* <label>username:</label>
        <input type="text"></input>
        <label>password:</label>
        <input type="password"></input>
        <label>dob:</label>
        <input type="text"></input>
        <label>gender:</label>
        <input type="text"></input>
        <label>country:</label>
        <input type="text"></input> */}
        <input type="submit" value="submit">
          Submit Blog
        </input>
      </form>
    </div>
  )
}

export default BlogForm
