import React, { useState } from "react"
import { connect } from "react-redux"

import Input from "../components/ui/input"
import Button from "../components/ui/button"
import classes from "./form.module.css"
import * as actions from "../store/actions/index"
import { navigate } from "gatsby"

const SignupForm = props => {
    const [signupForm, setSignupForm] = useState({
        email: {
            inputType: 'input',
            value: '',
            title: 'Email',
            elementConfig: {
                placeholder: 'username@example.com',
                type: 'text'
            }
        },
        password: {
            inputType: 'input',
            value: '',
            title: 'Password',
            elementConfig: {
                placeholder: 'password',
                type: 'password'
            }
        }
    });

    let elementArray = [];
    for (let key in signupForm) {
        elementArray.push({
            id: key,
            config: signupForm[key]
        });
    }

    const inputChangedHandler = (e, input) => {
        const updatedInput = {
            ...signupForm[input],
            value: e.target.value
        };
        const updatedForm = {
            ...signupForm,
            [input]: updatedInput
        };
        setSignupForm(updatedForm);
    }

    const submitHandler = e => {
        e.preventDefault();
        const email = signupForm.email.value;
        const password = signupForm.password.value;
        const isSignup = true;
        props.onAuthenticate(email, password, isSignup);
        navigate('/');
    }

    const cancelHandler = e => {
        e.preventDefault();
        const clearEmail = {
            ...signupForm['email'],
            value: ''
        }
        const clearPassword = {
            ...signupForm['password'],
            value: ''
        }
        const clearForm = {
            ...signupForm,
            email: clearEmail,
            password: clearPassword
        }
        setSignupForm(clearForm);
    }

    return (
        <form className={classes.Form} onSubmit={submitHandler}>
            {elementArray.map(input => (
                <Input
                    key={input.id}
                    elementConfig={input.config.elementConfig}
                    value={input.config.value}
                    changed={(e) => inputChangedHandler(e, input.id)}
                    title={input.config.title}
                    inputType={input.config.inputType}
                />
            ))};
            <div className={classes.SpreadButtons}>
                <Button>Sign Up</Button>
                <Button clicked={cancelHandler}>Cancel</Button>
            </div>
        </form>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        onAuthenticate: (email, password, isSignin) => dispatch(actions.authenticate(email, password, isSignin))
    }
}

export default connect(null, mapDispatchToProps)(SignupForm);