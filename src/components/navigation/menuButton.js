import React from 'react';
import classes from './menuButton.module.css';

const MenuButton = props => {
    let buttonStyle = null;
    if (props.open) {
        buttonStyle = classes.Open;
    }
    return (
        <div className={classes.MenuButton} onClick={props.clicked}>
            <div className={buttonStyle}></div>
            <div className={buttonStyle}></div>
            <div className={buttonStyle}></div>
            <div className={buttonStyle}></div>
        </div>
    );

}

export default MenuButton;