import React from "react"
import {AppBar, Toolbar, CssBaseline, Typography, makeStyles} from "@material-ui/core"
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    navLinks: {
        marginLeft: theme.spacing(5),
        display: "flex"
    },
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "15px",
        marginLeft: theme.spacing(5)
    },
    logo: {
        flexGrow: "1"
    }
}));

function Navbar() {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <CssBaseline />
            <Toolbar>
                <Typography variant="h4" className={classes.logo}>
                    Text Analyzer
                </Typography>
                <div className={classes.navLinks}>
                    <Link to="/" className={classes.link}>
                        Home
                    </Link>
                    <Link to="/about" className={classes.link}>
                        About
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;