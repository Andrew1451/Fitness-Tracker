export const handleKeyPress = (e, props, firstNavItem, lastNavItem) => {
    if (e.key === 'Enter') {
        e.target.click();
    }
    if (props && props.open && e.key === 'Escape') {
        firstNavItem.focus();
        firstNavItem.click();
    }
    if (e.key === 'Tab' || e.shiftKey) {
        if (props && e.shiftKey && e.key === 'Tab' && props.open) {  //shift and tab
            if (firstNavItem === document.activeElement) {
                lastNavItem.focus();
                e.preventDefault();
            }
        } else {  //tab
            if (lastNavItem === document.activeElement) {
                firstNavItem.focus();
                e.preventDefault();
            }
        }
    }
}