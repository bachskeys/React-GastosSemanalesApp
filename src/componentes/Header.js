import React from "react";
import PropTypes from 'prop-types'

const Header = (props) =>{
    return(<header>
        <h1>{props.titulo}</h1>
    </header>)
}

export default Header;

Header.prototypes = {
    titulo:PropTypes.string.isRequired
}