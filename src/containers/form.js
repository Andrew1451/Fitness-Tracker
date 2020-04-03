import React, { useState } from 'react';
import { connect } from "react-redux";
import * as actions from "../store/actions/index";
import Input from '../components/ui/input';
import Button from '../components/ui/button';
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

    const clearFields = () => {
        const clearExercise = {
            ...exerciseForm['exercise'],
            value: ''
        }
        const clearReps = {
            ...exerciseForm['reps'],
            value: ''
        }
        const clearedForm = {
            ...exerciseForm,
            exercise: clearExercise,
            reps: clearReps
        }
        setExerciseForm(clearedForm);
    }

    const submitExerciseHandler = e => {
        e.preventDefault();
        const exercise = exerciseForm.exercise.value;
        const reps = exerciseForm.reps.value;
        const newExercise = {
            exercise: exercise,
            reps: reps
        }
        const localStorageExercises = JSON.parse(localStorage.getItem('exercises'));
        localStorageExercises.push(newExercise);
        localStorage.setItem('exercises', JSON.stringify(localStorageExercises))
        props.onSaveExercise(newExercise)
        clearFields();
    }

    const submitWorkoutHandler = e => {
        e.preventDefault();
        //submit workout to database
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
                <Button clicked={submitExerciseHandler}>Save Exercise</Button>
                <Button clicked={submitWorkoutHandler}>Save Workout</Button>
            </div>
        </form>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onSaveExercise: (newExercise) => dispatch(actions.saveExercise(newExercise))
    }
}

export default connect(null, mapDispatchToProps) (Form);