import React from 'react'
import {create} from 'jss';
import rtl from 'jss-rtl';
import {jssPreset, StylesProvider} from '@material-ui/styles';

// Configure JSS
const jss = create({plugins: [...jssPreset().plugins, rtl()]});

function RTL(props) {
    return (
        <StylesProvider jss={jss}>
            {props.children}
        </StylesProvider>
    );
}

export default RTL;