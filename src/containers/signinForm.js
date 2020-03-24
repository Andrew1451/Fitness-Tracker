import React, { useState } from "react"
import { connect } from "react-redux"
import { navigate } from "gatsby"

import classes from "./form.module.css"
import Input from "../components/ui/input"
import Button from "../components/ui/button"
import * as actions from "../store/actions/index"

const SigninForm = props => {
    const [ signinForm, setSigninForm ] = useState({
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

    let inputArray = [];
    for (let key in signinForm) {
        inputArray.push({
            id: key,
            config: signinForm[key]
        });
    }

    const inputChangedHandler = ( e, input ) => {
        e.preventDefault();
        const updatedInput = {
            ...signinForm[input],
            value: e.target.value
        }
        const updatedForm = {
            ...signinForm,
            [input]: updatedInput
        }
        setSigninForm(updatedForm);
    }

    const cancelHandler = e => {
        e.preventDefault();
        const clearEmail = {
            ...signinForm['email'],
            value: ''
        };
        const clearPassword = {
            ...signinForm['password'],
            value: ''
        };
        const clearForm = {
            ...signinForm,
            email: clearEmail,
            password: clearPassword
        };
        setSigninForm(clearForm);
    }

    const submitHandler = e => {
        e.preventDefault();
        const email = signinForm.email.value;
        const password = signinForm.password.value;
        const isSignup = false;
        props.onAuthenticate(email, password, isSignup);
    }

    let form = (
        <form className={classes.Form}>
            {inputArray.map(input => (
                <Input 
                    key={input.id}
                    value={input.config.value}
                    title={input.config.title}
                    inputType={input.config.inputType}
                    elementConfig={input.config.elementConfig}
                    changed={(e) => inputChangedHandler(e, input.id)}
                />
            ))}
            <div className={classes.SpreadButtons}>
                <Button clicked={submitHandler}>Sign in</Button>
                <Button clicked={cancelHandler}>Cancel</Button>
            </div>
        </form>
    );

    return (
        <div>
            {form}
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        onAuthenticate: (email, password, isSignup) => dispatch(actions.authenticate(email, password, isSignup))
    }
}

export default connect(null, mapDispatchToProps) (SigninForm);