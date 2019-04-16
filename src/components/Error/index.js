import React from 'react';
import '../../styles/components/_home.scss';

const Error = () => {
    return (
        <div className="container">
            <div className="col-md-6 offset-md-3 mt-8" style={{marginTop:'250px'}}>
                <h1 style={{textAlign:'center'}}>Oops! 404 Page Not Found!</h1>
            </div>
        </div>
    );
}

export default Error;