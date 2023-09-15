import React from "react";
import FuncText from "./FuncText"
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Home() {

    const [text, setText] = React.useState('');
    const [btn, setBtn] = React.useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const dispCount = (event) => {
        setBtn('Count')
    }

    const dispUp = (event) => {
        setBtn('Uppercase')
    }

    const dispWords = (event) => {
        setBtn('Words')
    }

    return(
        <Box
            component="form"
            sx={{
                marginLeft: "10%",
                marginTop: '2%',
                '& .MuiTextField-root': { m: 2, width: '75%' },
            }}
            noValidate
            autoComplete="off"
        >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h1>Enter the text to analyze</h1>
                <TextField
                    id="outlined-multiline-static"
                    label="Enter text"
                    multiline
                    rows={7}
                    value={text}
                    onChange={handleChange}
                />
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Button variant="contained" sx={{ width: 'auto', marginRight: '10px' }} onClick={dispCount} >Character count</Button>
                    <Button variant="contained" sx={{ width: 'auto', marginRight: '10px' }} onClick={dispUp} >Uppercase</Button>
                    <Button variant="contained" sx={{ width: 'auto' }} onClick={dispWords} >Word Count</Button>
                </div>
                { btn==="Count" && <FuncText select="Count" text={text} /> }
                { btn==="Uppercase" && <FuncText select="Uppercase" text={text} /> }
                { btn==="Words" && <FuncText select="Words" text={text} /> }
            </div>
        </Box>
    )
}