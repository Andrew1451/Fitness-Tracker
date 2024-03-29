import React from 'react';
import * as classes from './button.module.css';

const Button = props => {
    return (
        <button className={[classes.Button, classes[props.btnType]].join(' ')} type={props.type} disabled={props.disabled} onClick={props.clicked} >{props.children}</button>
    )
}

export default Button;