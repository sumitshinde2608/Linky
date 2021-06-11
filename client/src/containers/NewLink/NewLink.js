import React from 'react'
import Form from 'react-bootstrap/Form'
import './NewLink.css'

 const NewLink = () => {
    return (
        <div className="Main">
        <div className="Form">
        <p>Username : Sumit</p>
        <label>Link Name : </label>
        <input type="text" id="fname" name="fname"/><br/><br/>
        <div className="formfield">
        <label>
          Essay:
          <textarea/>
        </label>
        </div>
        <p>Generated Link : </p>
        </div>
        </div>
    )
}

export default NewLink;