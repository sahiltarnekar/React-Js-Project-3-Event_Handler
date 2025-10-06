import React from 'react'

 function Footer() {
  return (
    <footer className='bg-light text-center text-muted py-3 mt-4 border-top'>
      <div className='container'>
        <small>© {new Date().getFullYear()} StudentForms — Built with Bootstrap</small>
      </div>
    </footer>
  )
}
export default Footer
