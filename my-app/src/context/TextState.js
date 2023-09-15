import React, { useState } from 'react'
import TextContext from './TextContext';

const TextState = (props) => {
    const initial = ""

    const [myText, setMyText] = useState(initial);

    const update = (val) => {
        setMyText(val);
    }

    return (
        <TextContext.Provider value={{myText, update}}>
            {props.children}
        </TextContext.Provider>
    )
}

export default TextState;