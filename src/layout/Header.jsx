import React from 'react'

function Header() {
  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary bg-gradient'>
        <div className='container'>
          <a className='navbar-brand fw-bold' href='#'>StudentForms</a>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navMenu' aria-controls='navMenu' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navMenu'>
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='page' href='#'>Register</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>Students</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>Help</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
 export default Header