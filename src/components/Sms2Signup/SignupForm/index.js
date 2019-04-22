import React  from 'react';
import { connect } from "react-redux";
import mobileAction from '../../../redux/Actions/MobileRegisterAction';

const  SignupForm = (props) => {

        return (
            <form>
                <h1>Create Account</h1>
                <div className="form-group">
                    <input value={props.name} onChange={props.nameOnChangeHandler} placeholder="Enter your name" type="text" className="form-control form-control-sm" id="name" />
                </div>
                <div className="form-group">
                    <input placeholder="Enter your mobile number e.g +63" type="text" className="form-control form-control-sm" id="mobile" />
                </div>
                <button onClick={props.onFormSubmit({})} type="button" className="btn btn-primary btn-sm">Create Account</button>
            </form>
        );

}

const mapStateToProps = (state) => {
    return { name: state.name, mobile: state.mobile };
}

export default connect(mapStateToProps,mobileAction)(SignupForm);