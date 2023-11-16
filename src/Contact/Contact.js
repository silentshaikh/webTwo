import React from 'react'
import '../Contact/Contact.css';
function Contact() {
  return (
    <div className="formBox">
    <h1 className='con'>Contact Page</h1>
   <form action="" className='formCont' >
     <label htmlFor="">Name</label>
     <input type="text" name="" id="" autoComplete='off' required placeholder='Enter Your Name' />
     <label htmlFor="">Email</label>
     <input type="email" name="" id="" required placeholder='Enter Your Email' />
     <label htmlFor="">Message</label>
     <textarea name="" id="" cols="30" rows="10" required placeholder='Enter Your Message'></textarea>
     <button>Submit</button>
   </form>
    </div>
  )
}

export default Contact
