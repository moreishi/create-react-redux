import React from 'react';
import SignupForm from './SignupForm';

const Sms2Signup = () => {
    return (
        <div className='container'>
           <div className="row">
               <div className="col-md-10">
                   <div className="col-md-6 mt-5">
                       <SignupForm></SignupForm>
                   </div>
                   <div className="col-md-6"></div>
               </div>
           </div>
        </div>
    );
}

export default Sms2Signup;