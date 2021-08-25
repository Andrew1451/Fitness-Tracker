import React from 'react';
import * as classes from './input.module.css';

const Input = props => {
    let inputElement = null;
    switch (props.inputType) {
        case ('input'):
            inputElement = <input className={classes.InputElement} {...props.elementConfig} value={props.value} onChange={props.changed} />;
            break;
        case ('textarea'):
            inputElement = <textarea className={classes.InputElement} {...props.elementConfig} value={props.value} onChange={props.changed} />;
            break;
        case ('select'):
            inputElement = (
                //eslint-disable-next-line
                <select className={classes.InputElement} value={props.value} onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>{option.displayValue}</option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input className={classes.InputElement} {...props.elementConfig} value={props.value} />;
    }
    return (
        <div>
            <label htmlFor={props.name} className={classes.Label}>{props.title}</label>
            {inputElement}
            {/* <input 
                className={'form-input'}
                type={props.type}
                name={props.name}
                id={props.name}
                placeholder={props.placeholder}
                required={props.required ? true : null}
                value={props.value}
                onChange={props.changed}
            /> */}
        </div>
    )
}

export default Input;