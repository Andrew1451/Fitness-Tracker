import React from 'react';
import classes from './menuButton.module.css';

const MenuButton = props => {
    let buttonStyle = null;
    let ariaExpanded = false;
    if (props.open) {
        buttonStyle = classes.Open;
        ariaExpanded = true
    }
    return (
        //eslint-disable-next-line
        <div className={classes.MenuButton} onClick={props.clicked} 
        tabIndex='0' aria-expanded={ariaExpanded} role='menu' id='menu' onKeyDown={props.handleKeyPress} ref={props.setRef}>
            <div className={buttonStyle}></div>
            <div className={buttonStyle}></div>
            <div className={buttonStyle}></div>
            <div className={buttonStyle}></div>
        </div>
    );

}

export default MenuButton;