import React from 'react'
import { makeStyles, Typography } from "@material-ui/core";

const Skills = ({title, dark, id}) => {
    const classes = useStyles();
    return (
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
           <div className={classes.sectioncontent} id={id}>
        <Typography variant="h3">{title}</Typography>
      </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    section: {
       minHeight:"100vh"
    },
    sectiondark: {
        background: "#166B7C",
        color: "#fff"
    },
    sectioncontent: {
        maxWidth: "80vh",
        margin: "0 auto",
      },
    }))

export default Skills
