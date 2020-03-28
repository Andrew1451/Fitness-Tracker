import React from "react"
import { connect } from "react-redux"
import * as actions from "../store/actions/index"
import { navigate } from "gatsby";

const Logout = props => {
    props.onLogout();
    navigate('/');
    return <div></div>
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout())
    }
}

export default connect(null, mapDispatchToProps)(Logout);