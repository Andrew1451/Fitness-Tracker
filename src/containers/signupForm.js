import React, { useState } from "react"
import { connect } from "react-redux"

import Input from "../components/ui/input"
import Button from "../components/ui/button"
import classes from "./form.module.css"
import * as actions from "../store/actions/index"

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
                type: 'text'
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
        props.onSignup();
    }

    const cancelHandler = e => {
        e.preventDefault();
        alert('zogma');
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
        onSignup: (email, password) => dispatch(actions.signup(email, password))
    }
}

export default connect(null, mapDispatchToProps)(SignupForm);

// web api key = AIzaSyAjzHYmMyWeCh4bfMggTyyhxMXKFmqKaiU

// project id = fitness-tracker-8b179