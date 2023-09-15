import React from "react";
import PropTypes from 'prop-types'

export default function About(props) {
    return (
        <div>
            This is {props.title} Page
        </div>
    )
}

About.propTypes = {
    title: PropTypes.string
}