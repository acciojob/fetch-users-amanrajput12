import React from 'react'

const UserList = ({user}) => {
  return (
    <div className='user'>
        <table>
          <thead>
            <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
            </tr>
          </thead>
          <tbody>
            {!user && <p>No data found to display.</p> }
            {user && user.map((data)=><tr key={data.id}>
              <td>{data.first_name}</td>
              <td>{data.last_name}</td>
              <td>{data.email}</td>
              <td><img src={data.avatar} /></td>
              

            </tr>)}
          </tbody>
        </table>
    </div>
  )
}

export default UserList