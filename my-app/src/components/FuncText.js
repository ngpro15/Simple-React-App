import React, {useState, useContext} from 'react';
import TextContext from '../context/TextContext';

function FuncText(props) {

    const [selected, setSelected] = useState(props.select);
    const context = useContext(TextContext);
    const text = context.myText;

    let displayText = "";

    if(selected==="Count") {
        displayText = `The text has a character count of ${text.length}`
    }
    else if(selected==="Uppercase") {
        displayText = `The text converted to Uppercase:\n ${text.toUpperCase()}`
    }
    else if(selected==="Words") {
        displayText = `Number of words in the text is: ${text.split(/[ .]/).length}`
    }

    return (
        <h3 style={{marginTop: '5%'}}>
            {displayText}
        </h3>
    )
}

export default FuncText;
