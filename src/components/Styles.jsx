import React from 'react';
import Ciudades from './Ciudades';
import Preguntas from './Preguntas';
import Categorias from './Categorias';
// import Grafica from './Grafica';
import Social from './Social';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LocationCityRoundedIcon from '@material-ui/icons/LocationCityRounded';
import PeopleOutlineRoundedIcon from '@material-ui/icons/PeopleOutlineRounded';
import LocalLibraryRoundedIcon from '@material-ui/icons/LocalLibraryRounded';
import QuestionAnswerRoundedIcon from '@material-ui/icons/QuestionAnswerRounded';
import whaleIcon from './../images/whaleIcon.gif';
//imports select





const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        textAlign: 'center',
        marginRight: '80px'
    },
    imgSize: {
        width: '80px',
        height: '50px',
        margin: '0'
    },
    toolbar: {
        padding: '0',
        backgroundColor: '#222059'
    },
    icons: {
        display: 'flex',
        marginTop: '160px',
    },
    iconSize: {
        fontSize: '30px'
    },
    inputContainer: {
        display: 'inline-flex'
    }


}));

 export default function ButtonAppBar() {


    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar className={classes.toolbar}>
                    <img src={whaleIcon} className={classes.imgSize} />
                    <Typography variant="h6" className={classes.title}>
                        Sismógrafo electoral
          </Typography>
                </Toolbar>
            </AppBar>

            {/* <Grafica></Grafica> */}
            <Social></Social>

            <div className={classes.icons}>
                <div className={classes.inputContainer}>
                    <LocationCityRoundedIcon className={classes.iconSize}>
                    </LocationCityRoundedIcon>
                    <Ciudades></Ciudades>
                </div>


                <div className={classes.inputContainer}>
                <LocalLibraryRoundedIcon className={classes.iconSize}>
                </LocalLibraryRoundedIcon>
                <Categorias></Categorias>
                </div>
                
                <div className={classes.inputContainer}>
                <QuestionAnswerRoundedIcon className={classes.iconSize}>
                </QuestionAnswerRoundedIcon>
                <Preguntas></Preguntas>
                </div>


            </div>
        </div>

    );
}
