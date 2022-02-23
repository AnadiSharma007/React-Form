import React from 'react';
import { useState } from 'react';
import './Form.css';

function Form() {

    const [value, setValue] = useState({
        Name: '',
        Email: '',
        Contact: '',
        Gender: '',
        Message: ''
    });

    const handleName = e => setValue({ ...value, Name: e.target.value});
    const handleEmail = e => setValue({ ...value, Email: e.target.value});
    const handleContact = e => setValue({ ...value, Contact: e.target.value});
    const handleGender = e => setValue({ ...value, Gender: e.target.value});
    const handleMessage = e => setValue({ ...value, Message: e.target.value});
    
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        setSubmitted(true);
        console.log(value);
    }


    return (
        <div className="container" >
            <div className='form-container'>
                <form className='register-form' onSubmit={handleSubmit} >
                    
                    {submitted ? <div className="success-message">Success! Form Submitted</div> : null}
                    <div>
                        <label htmlFor="">Name:</label><br />
                        <input type="text" placeholder='Name' name="name" onChange={handleName} value={value.Name} id="name" />
                    </div>
                    <div>
                        <label htmlFor="">Email:</label><br />
                        <input type="email" onChange={handleEmail} value={value.Email}  placeholder='Email' id="email" />
                    </div>
                    <div>
                        <label htmlFor="">Contact No:</label><br />
                        <input type="tel" onChange={handleContact} value={value.Contact} placeholder='Phone' id="contact" />
                    </div>
                    <div>
                        <input type="radio" name="gender" onChange={handleGender} defaultValue="Male" id="radio" />
                        <label htmlFor="male">Male</label><br />
                        <input type="radio" name="gender" onChange={handleGender} defaultValue="Female" id="radio" />
                        <label htmlFor="female">Female</label>
                    </div>
                    <div>
                        <label htmlFor="">Message:</label><br />
                        <textarea rows="4" cols="50" onChange={handleMessage} value={value.Message} placeholder='Message' id='message'></textarea>
                    </div>
                    <button type='submit' className='button'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Form;