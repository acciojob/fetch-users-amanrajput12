import React from 'react'

const Header = ({val}) => {
  return (
    <div>
        <section className='top'>
            <h1>Blue Whales</h1>
            <button onClick={()=>val()} className='.btn'>Get User List</button>
        </section>
       
    </div>
  )
}

export default Header