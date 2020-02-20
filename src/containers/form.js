import React, { useState } from 'react';
import Input from '../components/input';
import Button from '../components/button';
import classes from './form.module.css';

const Form = props => {
    const [exerciseForm, setExerciseForm] = useState({
        exercise: {
            inputType: 'input',
            value: '',
            title: 'Name of Exercise',
            elementConfig: {
                type: 'text',
                placeholder: 'Exercise Name'
            }
        },
        reps: {
            inputType: 'input',
            value: '',
            title: 'Number of Reps',
            elementConfig: {
                type: 'text',
                placeholder: 'Number of Reps'
            }
        }
    });

    let inputArray = [];
    for (let key in exerciseForm) {
        inputArray.push({
            id: key,
            config: exerciseForm[key]
        });
    }

    const inputChangedHandler = ( e, input ) => {
        const updatedInput = {
            ...exerciseForm[input],
            value: e.target.value
        }
        const updatedForm = {
            ...exerciseForm,
            [input]: updatedInput
        };
        setExerciseForm(updatedForm);
    }

    return (
        <form className={classes.Form}>
            {inputArray.map(input => (
                <Input 
                    key={input.id} 
                    inputType={input.config.inputType} 
                    value={input.config.value} 
                    title={input.config.title} 
                    elementConfig={input.config.elementConfig} 
                    changed={(e) => inputChangedHandler(e, input.id)}
                />
            ))}
            <div className={classes.SpreadButtons}>
                <Button>Save Exercise</Button>
                <Button>Save Workout</Button>
            </div>
        </form>
    )
}

export default Form;